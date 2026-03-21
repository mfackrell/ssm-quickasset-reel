// steps/generateReelScriptQA.js

import OpenAI from 'openai';
import { cleanAndParseJson } from '../helpers/cleanJson.js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateReelScript(topic) {
  console.log(`Generating QuickAsset Reel Script & Overlay for topic: "${topic}"`);

  // Parse the QuickAsset matrix output
  const parsed = typeof topic === 'string' ? JSON.parse(topic) : topic;
  const topicSummary = `Domain: ${parsed.domain} | Pain Point: ${parsed.painPoint} | Angle: ${parsed.angle} | The Unlock: ${parsed.unlock}`;

  const systemPrompt = `
You are writing very short, high-impact scripts for technical and creative professionals (developers, indie hackers, consultants). 

Your job is to mirror a frustrating tech-stack moment they already understand, and then present a radically simpler alternative.

The viewer is highly capable but prone to over-engineering their workflows. They build complex automation chains (Zapier) or set up entire storefronts (Gumroad) just to sell a single digital asset. 

The writing should feel like a sharp, relieving reality check—not a sales pitch. 

READER EXPERIENCE TARGET
- The viewer should not feel sold to; they should feel understood.
- They should recognize their own tendency to overcomplicate things.
- Write so the moment feels like an inside joke among developers/creators.

Avoid generic marketing speak. 
- Use concrete technical realities (e.g., webhooks failing, high platform fees, formatting CSS for a checkout page).
- Keep it punchy. The viewer is scrolling fast.

STRUCTURE

Write exactly three lines based on the topic provided. 

Each line has a different role.

Line 1 — The Frustration (The "Bloated Way")
A specific, relatable moment where the user is wasting time setting up a complicated workflow for a simple task.

Line 2 — The Hidden Cost (The Realization)
The moment they realize they are spending more time on the infrastructure than the actual product.

Line 3 — The Clean Unlock (The QuickAsset Way)
The radically simple alternative ("Upload -> link -> get paid"). Do not use the word QuickAsset, just describe the flow.

=========

STYLE
Use simple, direct language. 
No corporate jargon. 
The lines should feel fast-paced and slightly contrarian.

Always contrast:
Over-engineering → Wasted Time → Elegant Simplicity

Keep each line brief (under 12 words if possible).

OUTPUT FORMAT (JSON ONLY):
{
  "Line 1": "[The Bloated Way]",
  "Line 2": "[The Hidden Cost]",
  "Line 3": "[The Clean Unlock]",
  "overlay_text": "[short, punchy 3-5 word headline for the video text]"
}
`;

const userPrompt = `
THE SPECIFIC FOCUS FOR THIS SCRIPT IS: ${topicSummary}

Instructions: 
Using the tech/creator profile provided in the system prompt, write the 3-line script specifically through the lens of this topic. 

Ensure Line 1 is the bloated technical setup, Line 2 is the realization of wasted time/effort, and Line 3 is the elegant, direct-link solution.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" }, 
      temperature: 0.8,
      top_p: 0.92,
      presence_penalty: 0.6,
      frequency_penalty: 0.7
    });

    const rawContent = completion.choices[0].message.content;
    const result = cleanAndParseJson(rawContent);

    // --- LOGGING ---
    console.log("\n=== REEL SCRIPT & OVERLAY RESPONSE START ===");
    console.log(JSON.stringify(result, null, 2));
    console.log("=== REEL SCRIPT & OVERLAY RESPONSE END ===\n");
    // --------------
    
    return result;

  } catch (error) {
    console.error("Error generating Reel Script:", error);
    throw new Error("Failed to generate Reel Script.");
  }
}

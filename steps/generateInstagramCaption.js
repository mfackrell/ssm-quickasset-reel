// steps/generateInstagramCaptionQA.js

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateInstagramCaption(topic) {
  console.log(`Generating QuickAsset Instagram caption for topic: "${topic}"`);
  
  // Parse the QuickAsset matrix output
  const parsed = typeof topic === 'string' ? JSON.parse(topic) : topic;
  const topicSummary = `Domain: ${parsed.domain} | Pain Point: ${parsed.painPoint} | Angle: ${parsed.angle} | The Unlock: ${parsed.unlock}`;

  // 1. Define the Persona for QuickAsset
  const systemPrompt = `
You are a pragmatic indie-hacker and creator-economy strategist who writes viral, highly "saveable" Instagram content. Your focus is tech stack minimalism, reclaiming developer time, and smart micro-monetization. 

Your job is to write highly engaging Instagram captions that make technical and creative professionals stop scrolling and realize they are over-engineering their workflows. 

The audience consists of developers, consultants, and creators. They are smart, busy, and easily annoyed by bloated software, high platform fees, and fragile integrations (like Zapier). The tone must be direct, sharp, slightly contrarian, and highly relatable. You use formatting and emojis to create visual pacing, making the text easy to skim.

In this caption, rely on these core QuickAsset philosophies:
1. Stop building storefronts (Gumroad/Payhip) for a single file.
2. Middleware is a liability (fragile webhooks break).
3. "Upload → link → get paid" is the ultimate workflow.
4. You should own 100% of your customer list, not the platform.
5. Your time is too valuable to code a custom Stripe checkout for a $15 template.
`;

  // 2. Define the Task (User Prompt) tailored to IG pacing
  const userPrompt = `
The audience is scrolling fast. You must hook them immediately with a relatable technical or workflow frustration, then pivot to the elegant solution.

TOPIC DETAILS: ${topicSummary}

Formatting + performance requirements:
- MUST start with a scroll-stopping hook in 1 short line (e.g., an unpopular opinion, a stark reality, or calling out a specific pain point).
- Use whitespace aggressively (1–2 sentences max per paragraph). Instagram readers skim.
- Use emojis strategically as bullet points or to emphasize the contrast between the "Old Way" ❌ and the "New Way" ✅.
- Build the narrative: The frustrating "standard" way → the hidden cost (time/money/energy) → the "Aha" moment → the QuickAsset minimalist approach.
- Use terminology native to the audience (e.g., tech stack, shipping, webhooks, friction, indie hacking).
- Frame QuickAsset's approach as the smart, time-saving alternative, but do not sound like a cheesy commercial.
- End with a single open-ended, highly commentable question about their current tech stack or side project.

Structure:
1) Punchy Hook (tied to the topic)
2) The relatable frustration (the bloated way)
3) The pivot / The hidden cost
4) The minimalist solution (the QuickAsset way)
5) Engagement question

Output:
A complete Instagram caption (with emojis and spacing) ready to publish. 
- Generate publish-ready content without explaining the task.
- Generate 10-15 highly relevant hashtags (e.g., #indiehacker #techstack #buildinpublic #creatoreconomy) and place them at the very end.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.8, // Slightly lower than 1.0 to keep the logic tight while remaining creative
      top_p: 0.9
    });

    const caption = completion.choices[0].message.content;

    // --- LOGGING THE RESPONSE ---
    console.log("\n=== INSTAGRAM RESPONSE START ===");
    console.log(caption);
    console.log("=== INSTAGRAM RESPONSE END ===\n");
    // ----------------------------
    
    return caption;

  } catch (error) {
    console.error("Error generating Instagram caption:", error);
    throw new Error("Failed to generate Instagram caption.");
  }
}

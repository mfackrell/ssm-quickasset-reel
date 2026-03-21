import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateFacebookCaption(topic) {
  console.log(`Generating Facebook caption for topic: "${topic}"`);

  // 1. Define the Persona
const systemPrompt = `
You are a pragmatic, anti-bloat tech strategist and indie hacker who specializes in creating high-engagement Facebook posts about workflow efficiency, creator economics, and tech stack minimalism. You understand how to write for Facebook’s audience: compelling storytelling, contrasting the "old way" vs the "new way," and sparking conversations in the comments. You use emojis to create visual pacing and draw attention, but never excessively.

Your job is to write a highly engaging Facebook post that helps developers, consultants, and creators realize they are over-engineering their monetization workflows and wasting time on bloated platforms.

The audience is highly capable, technical, or creative professionals. They value their time, hate complex middleware (like Zapier chains), and despise setting up entire storefronts just to sell a single digital asset. The tone must be direct, relatable, transparent, and slightly contrarian — never corporate, generic, or overly "salesy."

In this caption, consider these core QuickAsset philosophies:

# The Frustrations (The "Villains")
1. Storefront bloat (setting up Gumroad/Payhip for one file)
2. Middleware dependency (fragile Zapier/Make webhooks)
3. Platform lock-in (losing access to your customer data/emails)
4. The "Build vs. Buy" trap (wasting a weekend coding a Stripe checkout)
5. Scope creep on simple side projects
6. High platform fees eating into small margins

# The QuickAsset Reality (The "Unlock")
7. The "Digital Cash Register" approach (Upload → link → get paid)
8. Instant, native file delivery without automation chains
9. Owning 100% of your customer list
10. Shipping in minutes, not days
11. Monetizing "digital exhaust" (past templates, SOPs, scripts)
`;

  // 2. Define the Task (User Prompt) tailored to Tech/Creator pain points
  const userPrompt = `
Write a Facebook post based on this TOPIC MATRIX: ${topic}

Formatting + performance requirements for Facebook:
- MUST begin with a scroll-stopping hook on its own line that calls out a specific workflow frustration or tech-stack reality.
- Use whitespace strategically for pacing (1–3 sentences per paragraph).
- Use emojis for emphasis and structure (e.g., contrasting the old way vs new way).
- Build the narrative: Start with the common, painful way people do this -> highlight the hidden cost (time/energy/money) -> introduce the simple, frictionless alternative.
- Use language familiar to creators/developers (e.g., tech stack, friction, webhooks, shipping, monetization).
- Position QuickAsset's core philosophy ("You don't need a store, you just need a link") as the logical conclusion, but don't make it sound like an infomercial.
- Do NOT use bullet points unless comparing "Old Way vs. Quick Way".
- End with a targeted, open-ended question about their workflow or tech stack to drive comments.

Structure:
1) Hook tied to the topic's pain point.
2) The relatable, frustrating "standard" scenario.
3) The realization of wasted time or over-engineering.
4) The simpler paradigm (the QuickAsset way).
5) Reflective engagement question.

Output:
A complete Facebook post formatted with emojis and spacing, optimized for shares and comments.
Include 8–12 relevant hashtags placed on a new line at the bottom.
Do NOT explain the task. Output only the final post.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }, // Now valid because userPrompt is defined
      ],
      temperature: 0.7, 
    });

    const caption = completion.choices[0].message.content;
    
    // --- LOGGING THE RESPONSE ---
    console.log("\n=== FACEBOOK RESPONSE START ===");
    console.log(caption);
    console.log("=== FACEBOOK RESPONSE END ===\n");
    // ----------------------------    
    return caption;

  } catch (error) {
    console.error("Error generating Facebook caption:", error);
    throw new Error("Failed to generate Facebook caption.");
  }
}

// steps/selectTopic.js

// steps/selectTopic.js

// -------- AXIS 1: DOMAIN --------
const domains = [
  "Tech Stack Minimalism",
  "Creator Economics",
  "Workflow Efficiency",
  "Data Ownership",
  "Micro-Monetization",
  "Developer Time",
  "Platform Independence",
  "Digital Asset Strategy",
  "Direct-to-Buyer Sales",
  "Indie Hacking & Side Hustles",
  "Freelance Client Offboarding",
  "Asynchronous Consulting",
  "The 'Digital Cash Register'",
  "Open Source Monetization",
  "Knowledge Management & Notion",
  "Niche Audience Building",
  "Info-Product Prototyping",
  "Bootstrapped Business Math"
];

// -------- AXIS 2: MECHANISM --------
const mechanisms = [
  "Middleware dependency (Zapier/Make)",
  "Storefront bloat (Gumroad/Payhip)",
  "Unjustified platform fees",
  "Over-engineering a simple checkout",
  "Setup friction and delays",
  "Walled gardens locking up customer data",
  "Scope creep on weekend projects",
  "Manual file delivery via email",
  "Subscription fatigue for basic tools",
  "Building custom auth for a single PDF",
  "The imposter syndrome of 'launching a store'",
  "Dealing with platform lock-in",
  "Emailing large ZIP files that bounce",
  "Customers losing their download links",
  "'Link in bio' clutter",
  "Managing taxes on fragmented platforms",
  "The graveyard of unfinished side projects",
  "Fragile webhook connections breaking"
];

// -------- AXIS 3: PERSPECTIVE --------
const perspectives = [
  "Build vs. Buy teardown",
  "Contrarian reality check",
  "Workflow comparison (Before vs. After)",
  "Architecture deep-dive",
  "Micro-case study",
  "Unpopular opinion",
  "Step-by-step simplification",
  "The 'Aha' moment realization",
  "The 'Lazy Developer' approach",
  "The 5-minute shipping challenge",
  "Behind-the-scenes revenue breakdown",
  "Breaking down a competitor's pricing trap",
  "What I wish I knew before building",
  "The hidden cost of 'free' tools",
  "Customer support nightmare story",
  "'Just ship it' motivation",
  "The math behind the business model"
];

// -------- AXIS 4: AGENCY EFFECT --------
const agencyEffects = [
  "Reclaiming developer time",
  "Monetizing 'digital exhaust' (past work)",
  "Zero-maintenance revenue streams",
  "Direct relationship with buyers",
  "Shipping in minutes, not days",
  "Frictionless instant delivery",
  "Keeping 100% of your customer list",
  "Eliminating point-of-failure dependencies",
  "Earning while sleeping",
  "Validating a product idea instantly",
  "Turning a Notion doc into $100",
  "Professionalizing the DM sale",
  "Setting it and forgetting it completely",
  "No monthly burn rate",
  "Owning the entire customer lifecycle",
  "Bypassing the algorithm",
  "Confidence to charge for small wins",
  "Total portability of Stripe data"
];

// Utility
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// -------- PUBLIC API --------
export async function selectTopic() {
  console.log("Selecting topic using MESA matrix...");

  const selection = {
    domain: pickRandom(domains),
    mechanism: pickRandom(mechanisms),
    perspective: pickRandom(perspectives),
    agencyEffect: pickRandom(agencyEffects)
  };

  console.log("QuickAsset Topic Selection:", selection);

  return JSON.stringify(selection);
}

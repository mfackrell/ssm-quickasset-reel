// steps/selectQATopic.js

// -------- AXIS 1: BUSINESS FUNCTION --------
const businessFunctions = [
  "asset monetization",
  "storefront ownership",
  "automated fulfillment",
  "payment friction",
  "tech-stack simplification",
  "pricing for value",
  "conversion optimization",
  "niche positioning",
  "customer retention",
  "speed to market",
  "global tax/compliance",
  "workflow productization"
];

// -------- AXIS 2: COMMON FRICTION / MISUNDERSTANDING --------
const frictions = [
  "over-engineering the storefront",
  "marketplace fee dependency (Etsy/Gumroad)",
  "tech-setup paralysis",
  "manual delivery burnout",
  "undervaluing 'boring' assets",
  "the 'I am not a dev' mental block",
  "leaky bucket checkouts",
  "fear of Stripe complexity",
  "lack of professional polish",
  "distraction by 'meta-work'",
  "waiting for 'perfect' before shipping",
  "giving away value for free"
];

// -------- AXIS 3: EXPLANATORY LENS --------
const explanatoryLenses = [
  "marketplace vs direct math",
  "the 5-minute launch walkthrough",
  "professional vs amateur checkout",
  "the power of the 'Micro-Asset'",
  "why 'boring' sells best",
  "the 'Payment Link' mindset",
  "invisible automation secrets",
  "trust-building for practitioners",
  "scaling from 1 to 100 sales",
  "asset productization 101",
  "the 'Link-in-Bio' revenue trap",
  "behind-the-scenes of a $20 sale"
];

// -------- AXIS 4: INTENDED TAKEAWAY --------
const takeaways = [
  "confidence to ship today",
  "clarity on the 'fee tax'",
  "reduced technical anxiety",
  "excitement about niche assets",
  "path to the first $100",
  "recognition of passive leverage",
  "focus on the payment link",
  "understanding direct ownership",
  "awareness of friction costs",
  "validation of their expertise",
  "less worry about 'building' more",
  "vision of a lean revenue stream"
];

// Utility
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// -------- PUBLIC API --------
export async function selectTopic() {
  console.log("Selecting topic using QuickAsset Monetization Matrix...");

  const selection = {
    businessFunction: pickRandom(businessFunctions),
    friction: pickRandom(frictions),
    explanatoryLens: pickRandom(explanatoryLenses),
    takeaway: pickRandom(takeaways)
  };

  console.log("QuickAsset Topic Selection:", selection);

  return JSON.stringify(selection);
}

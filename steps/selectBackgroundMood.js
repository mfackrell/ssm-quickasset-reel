export async function selectBackgroundMood() {
  console.log("Selecting background mood...");

  const moods = [
    // --- 1. The Deep Work & Code Vibe (Dark Mode Focus) ---
    "Blurred lines of code scrolling smoothly on a dark-mode IDE",
    "Soft focus on a 'Deploying...' terminal screen in dark mode",
    "Glowing green server status lights blinking in a dark rack",
    "Close-up of a cursor blinking on a blank dark-mode canvas",
    "Time-lapse of git commits filling a contribution graph",
    "A sleek code editor with colorful syntax highlighting in soft blur",
    "Slow pan across an open API documentation page in dark mode",
    "A JSON payload formatting smoothly on screen",
    "A glowing 'Payment Successful' notification blurred in the background",
    "A loading spinner resolving into a green checkmark on a dark screen",

    // --- 2. The Hardware & Setup Vibe (The Indie Hacker Desk) ---
    "Close-up of a mechanical keyboard bathed in subtle monitor glow",
    "A clean, minimalist desk setup with a single laptop and black coffee",
    "A focused overhead shot of hands typing steadily on a low-profile keyboard",
    "Sunlight hitting a sleek silver laptop on a wooden cafe table",
    "Sleek smartphone resting on a matte black desk pad",
    "Macro shot of a wireless mouse clicking on a clean white desk",
    "An ultrawide monitor displaying a dark dashboard, viewed from an angle",
    "Soft glowing LED light strip behind a minimalist desk setup",
    "A closed matte black laptop sitting on a clean glass table",
    "Noise-canceling headphones resting next to a glowing tablet",

    // --- 3. The Focus & Flow Vibe (Analog Meets Digital) ---
    "A steaming cup of pour-over coffee next to an open wireframe notebook",
    "Warm amber desk lamp illuminating a neat stack of sticky notes",
    "Steam rising slowly from a black ceramic mug on a dark desk",
    "A pristine, empty Notion-style workspace on a high-resolution display",
    "Close-up of a perfectly organized digital Kanban board in soft focus",
    "Soft shadows on a blank wireframe grid sketchbook",
    "A Pomodoro timer ticking down quietly in the background",
    "Raindrops on a window behind a glowing computer monitor",
    "Soft morning light illuminating a blank whiteboard",
    "A single pen resting perfectly parallel to a closed notebook",

    // --- 4. The Anti-Bloat Vibe (Minimalism & Clean Geometry) ---
    "Time-lapse of sunlight moving across a completely uncluttered workspace",
    "Minimalist home office with a single monstera plant and a glowing screen",
    "A pristine white room with sharp geometric shadows",
    "Smooth, slow-moving shadows across a modern concrete wall",
    "A clean frosted glass partition with soft light filtering through",
    "Minimalist metallic desk lamp casting a sharp shadow",
    "A completely empty, clean digital canvas waiting for input",
    "Abstract architectural lines of a modern glass office building",
    "Slow pan across a textured matte black wall",
    "Sunlight refracting through a glass prism onto a clean desk",

    // --- 5. The Abstract Tech Vibe (System Flow & UI) ---
    "Abstract smooth gradient mesh moving slowly in dark tech colors",
    "Abstract data particles floating gently over a dark digital grid",
    "Subtle 3D glass morphism shapes rotating slowly in space",
    "A single, glowing neon progress bar filling up instantly",
    "Dark, sleek metallic textures shifting subtly in low light",
    "Smooth UI/UX component animations playing in a blurred loop",
    "A glowing wireframe of a checkout flow assembling itself",
    "Soft, pulsing concentric circles representing data transfer",
    "A minimalist digital clock turning over to the next minute",
    "Subtle soundwave animations moving smoothly across a dark background"
  ];

  // Logic: Randomly select one item from the array
  const randomIndex = Math.floor(Math.random() * moods.length);
  const selectedMood = moods[randomIndex];

  console.log(`Mood Selected: "${selectedMood}"`);

  return selectedMood;
}

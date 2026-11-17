/**
 * "Movement Built Into Your Day" — eight free one-sheet guides.
 *
 * Each guide gets its own standalone page at /free/<slug> (see
 * components/MovementGuidePage.tsx). Same pattern as Wake Up & Wind Down in
 * Bed: direct download, no email gate, indexable, deliberately NOT in
 * data/freebies.ts so they stay off /shop and the freebie grids.
 *
 * Moves are word-for-word from Lili's poster PDF
 * (Lili_Human_Movement_Built_Into_Your_Day_Posters.pdf, one page per guide).
 * Order matches the PDF: poster 1 of 8 … 8 of 8.
 */

export type MovementStep = {
  task: string;
  move: string;
  how: string;
  easier: string;
};

export type MovementGuide = {
  slug: string;
  name: string;
  /** Title split so the second half can be set in italic sage, like other freebie pages. */
  titleLead: string;
  titleAccent: string;
  tagline: string;
  intro: string;
  safety: string;
  steps: MovementStep[];
};

export const MOVEMENT_DISCLAIMER =
  'If you are pregnant, recovering from surgery or living with a health condition, check with your health professional first. Stop if you feel pain.';

export const movementGuides: MovementGuide[] = [
  {
    slug: 'laundry-day-movement',
    name: 'Laundry Day Movement',
    titleLead: 'Laundry Day',
    titleAccent: 'Movement',
    tagline: 'Turn every load into a little strength session.',
    intro:
      'Fourteen small moves matched to the laundry jobs you already do, from sorting the pile to fluffing the pillows. Every move has an easier, seated option.',
    safety: 'Keep baskets light. Two easy trips beat one painful heavy trip.',
    steps: [
      { task: 'Sorting laundry', move: 'Supported squats', how: 'Sit your hips back as you sort each pile.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Loading the washer', move: 'Hip hinges', how: 'Hinge from your hips with a long, neutral back.', easier: 'Seated hip hinge with hands resting on thighs.' },
      { task: 'Moving clothes to the dryer', move: 'Alternating step-backs', how: 'Switch legs after every few items.', easier: 'Seated alternating heel slides.' },
      { task: 'Waiting for the washer', move: 'Wall sit', how: 'Hold for 15-30 seconds.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Carrying a light basket', move: 'Farmer carry', how: 'Hold it close and walk with tall posture.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Folding laundry', move: 'Calf raises', how: 'Rise and lower slowly for 10-20 reps.', easier: 'Seated heel raises with feet firmly planted.' },
      { task: 'Folding small items', move: 'Single-leg balance', how: 'Stay near a counter; switch after 10-20 seconds.', easier: 'Seated alternating toe taps.' },
      { task: 'Putting clothes away', move: 'Sit-to-stands', how: 'Do 5-10 when you finish a basket.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Using lower drawers', move: 'Supported squats', how: 'Bend your knees instead of rounding your back.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Hanging clothes', move: 'Overhead reaches', how: 'Reach tall without shrugging your shoulders.', easier: 'Seated reaches within a comfortable range.' },
      { task: 'Delivering clothes to rooms', move: 'Brisk hallway walks', how: 'Take smaller loads and add more steps.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Matching socks', move: 'Seated knee extensions', how: 'Straighten one leg at a time.', easier: 'Already seated; slow the pace or shorten the range.' },
      { task: 'Changing bedding', move: 'Alternating step-backs', how: 'Switch legs as you move around the bed.', easier: 'Seated alternating heel slides.' },
      { task: 'Fluffing pillows', move: 'Pillow chest presses', how: 'Press forward 10 times before placing them.', easier: 'Seated palm presses at chest height.' },
    ],
  },
  {
    slug: 'dishes-and-dishwasher',
    name: 'Dishes + Dishwasher',
    titleLead: 'Dishes +',
    titleAccent: 'Dishwasher',
    tagline: 'Build balance, legs and posture at the kitchen sink.',
    intro:
      'Twelve small moves for washing up, loading the racks and putting everything away. Every move has an easier, seated option.',
    safety: 'Put knives, hot dishes and glassware down before adding movement.',
    steps: [
      { task: 'Washing dishes', move: 'Calf raises', how: 'Rise slowly onto your toes and lower with control.', easier: 'Seated heel raises with feet firmly planted.' },
      { task: 'Rinsing dishes', move: 'Glute squeezes', how: 'Squeeze for 3 seconds; repeat 10 times.', easier: 'Perform seated; squeeze gently and release.' },
      { task: 'Scrubbing a pot', move: 'Gentle core brace', how: 'Brace softly without holding your breath.', easier: 'Seated gentle core brace; keep breathing.' },
      { task: 'Loading the top rack', move: 'Alternating heel lifts', how: 'Lift one heel at a time.', easier: 'Seated heel raises with feet firmly planted.' },
      { task: 'Loading the bottom rack', move: 'Supported squat', how: 'Lower through your hips and knees.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Putting away plates', move: 'Side steps', how: 'Take 2-3 controlled steps between stations.', easier: 'Seated side taps, one foot at a time.' },
      { task: 'Putting away cups', move: 'Overhead reaches', how: 'Reach tall while keeping shoulders relaxed.', easier: 'Seated reaches within a comfortable range.' },
      { task: 'Putting away cutlery', move: 'Single-leg balance', how: 'Stay near the counter and switch sides.', easier: 'Seated alternating toe taps.' },
      { task: 'Waiting for dishes to soak', move: 'Counter push-ups', how: 'Complete 8-12 controlled reps.', easier: 'Seated palm presses at chest height.' },
      { task: 'Wiping the sink', move: 'Side leg raises', how: 'Do 8-10 per side after you finish.', easier: 'Seated side taps or alternating heel slides.' },
      { task: 'Emptying the dishwasher', move: 'Squat and reach', how: 'Squat for an item, then stand tall.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Starting the dishwasher', move: 'Celebration march', how: 'Press Start, then march for 30 seconds.', easier: 'Seated marching, or slow supported steps.' },
    ],
  },
  {
    slug: 'floor-care-fitness',
    name: 'Floor-Care Fitness',
    titleLead: 'Floor-Care',
    titleAccent: 'Fitness',
    tagline: 'Vacuum, sweep and mop with stronger movement patterns.',
    intro:
      'Ten small moves for vacuuming, sweeping and mopping, so your legs do the work instead of your back. Every move has an easier, seated option.',
    safety: 'Point your hips and feet toward the area you are cleaning; avoid twisting.',
    steps: [
      { task: 'Vacuuming', move: 'Long walking steps', how: 'Step forward and back instead of reaching with one arm.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Vacuuming under furniture', move: 'Supported split squat', how: 'Bend both knees with one hand supported.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Moving between rooms', move: 'Brisk walking', how: 'Add one quick lap before the next room.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Sweeping', move: 'Side-to-side weight shifts', how: 'Move your weight with each sweep.', easier: 'Seated side taps, one foot at a time.' },
      { task: 'Gathering a debris pile', move: 'Mini squats', how: 'Complete 5-10 before using the dustpan.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Using the dustpan', move: 'Supported lunge', how: 'Lower with control instead of folding forward.', easier: 'Seated alternating heel slides.' },
      { task: 'Mopping', move: 'Alternating step-backs', how: 'Step back with each long stroke.', easier: 'Seated alternating heel slides.' },
      { task: 'Waiting for the floor to dry', move: 'Wall push-ups', how: 'Complete 8-12 reps.', easier: 'Seated palm presses at chest height.' },
      { task: 'Putting the vacuum away', move: 'Calf raises', how: 'Do 10 once it is safely stored.', easier: 'Seated heel raises with feet firmly planted.' },
      { task: 'Finishing one room', move: 'Marching break', how: 'March for 30 seconds before moving on.', easier: 'Seated marching, or slow supported steps.' },
    ],
  },
  {
    slug: 'cleaning-day-circuit',
    name: 'Cleaning-Day Circuit',
    titleLead: 'Cleaning-Day',
    titleAccent: 'Circuit',
    tagline: 'Use ordinary chores as cues for full-body movement.',
    intro:
      'Fourteen small moves for wiping, dusting, scrubbing and decluttering, from the first counter to the last bag of garbage. Every move has an easier, seated option.',
    safety: 'Use a knee pad, stable supports and smaller loads whenever needed.',
    steps: [
      { task: 'Wiping counters', move: 'Hamstring curls', how: 'Bring one heel toward your bottom at a time.', easier: 'Seated side taps or alternating heel slides.' },
      { task: 'Cleaning a table', move: 'Alternating side lunges', how: 'Shift gently toward each side.', easier: 'Seated alternating heel slides.' },
      { task: 'Dusting shelves', move: 'Reach and row', how: 'Reach forward, then pull your elbows back.', easier: 'Seated reaches within a comfortable range.' },
      { task: 'Dusting high surfaces', move: 'Calf raises', how: 'Only from the floor — never while on a stool.', easier: 'Seated heel raises with feet firmly planted.' },
      { task: 'Cleaning mirrors', move: 'Wall angels', how: 'Complete 8-10 slow reps afterward.', easier: 'Perform the same movement seated and gently.' },
      { task: 'Cleaning windows', move: 'Split-stance shifts', how: 'Switch which foot is forward halfway through.', easier: 'Perform seated, slowly, and within a comfortable range.' },
      { task: 'Scrubbing the bathtub', move: 'Half-kneeling posture', how: 'Use a pad and change knees regularly.', easier: 'Perform the same movement seated and gently.' },
      { task: 'Cleaning the toilet', move: 'Supported squat', how: 'Hold something stable and use your legs.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Taking out garbage', move: 'Farmer carry', how: 'Keep bags light and walk tall.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Replacing garbage bags', move: 'Reach + side stretch', how: 'Reach up, then gently stretch each side.', easier: 'Seated reaches within a comfortable range.' },
      { task: 'Collecting room garbage', move: 'Brisk hallway walk', how: 'Add an extra safe lap between rooms.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Organizing a cupboard', move: 'Sit-to-stands', how: 'Use a chair for low areas and stand between sections.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Decluttering', move: 'Squat and sort', how: 'Place keep, donate and discard bins at safe heights.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Finishing a task', move: 'Victory reaches', how: 'Reach overhead five times and take three breaths.', easier: 'Seated reaches within a comfortable range.' },
    ],
  },
  {
    slug: 'kitchen-movement-snacks',
    name: 'Kitchen Movement Snacks',
    titleLead: 'Kitchen Movement',
    titleAccent: 'Snacks',
    tagline: 'Move while you wait — never while handling heat or knives.',
    intro:
      'Fourteen small moves for the waiting moments in the kitchen: the coffee, the toast, the kettle, the oven. Every move has an easier, seated option.',
    safety: 'Exercise only when your hands are free and you are away from heat and blades.',
    steps: [
      { task: 'Waiting for coffee', move: 'Counter push-ups', how: 'Complete 8-15 reps.', easier: 'Seated palm presses at chest height.' },
      { task: 'Waiting for toast', move: 'Side steps', how: 'Continue for 30-45 seconds.', easier: 'Seated side taps, one foot at a time.' },
      { task: 'Waiting for the microwave', move: 'March in place', how: 'Keep moving until the timer rings.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Waiting for the kettle', move: 'Supported squats', how: 'Complete 8-12 reps.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Oven preheating', move: 'Standing hip extensions', how: 'Complete 10 per side.', easier: 'Seated side taps or alternating heel slides.' },
      { task: 'Reading a recipe', move: 'Calf raises', how: 'Complete 15-20 slow reps.', easier: 'Seated heel raises with feet firmly planted.' },
      { task: 'Washing produce', move: 'Glute squeezes', how: 'Hold for 3 seconds and release.', easier: 'Perform seated; squeeze gently and release.' },
      { task: 'After opening cans', move: 'Shoulder-blade squeezes', how: 'Put the opener down, then do 10.', easier: 'Perform the same movement seated and gently.' },
      { task: 'Stirring something cool', move: 'Wide-stance weight shifts', how: 'Shift gently from side to side.', easier: 'Seated side taps, one foot at a time.' },
      { task: 'After checking the simmer', move: 'Standing side crunches', how: 'Step away from the stove first; complete 8-10 per side.', easier: 'Seated gentle core brace; keep breathing.' },
      { task: 'Putting away groceries', move: 'Curls with light cans', how: 'Do 8-12 before putting them away.', easier: 'Seated curls with no weight or very light items.' },
      { task: 'Setting the table', move: 'Brisk walking', how: 'Carry a few safe items per trip.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Clearing the table', move: 'Squat and stand', how: 'Add one squat after each safe trip.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Wiping the table', move: 'Side leg raises', how: 'Complete 10 per side afterward.', easier: 'Seated side taps or alternating heel slides.' },
    ],
  },
  {
    slug: 'tidy-and-tone',
    name: 'Tidy + Tone',
    titleLead: 'Tidy +',
    titleAccent: 'Tone',
    tagline: 'Let putting things away add movement to your day.',
    intro:
      'Fourteen small moves for picking up toys, making the bed, sorting paperwork and watering the plants. Every move has an easier, seated option.',
    safety: 'Use stable surfaces and keep loads close to your body.',
    steps: [
      { task: 'Picking up toys', move: 'Toy squats', how: 'Squat for each toy or every second toy.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Filling a toy bin', move: 'Alternating side lunges', how: 'Place the bin between your feet and switch sides.', easier: 'Seated alternating heel slides.' },
      { task: 'Returning items to rooms', move: 'Extra walking', how: 'Take smaller loads to collect more steps.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Making the bed', move: 'Alternating step-backs', how: 'Switch legs while moving around the bed.', easier: 'Seated alternating heel slides.' },
      { task: 'Changing pillowcases', move: 'Pillow chest presses', how: 'Press the pillow forward 10 times first.', easier: 'Seated palm presses at chest height.' },
      { task: 'Organizing a closet', move: 'Side leg raises', how: 'Complete 10 each side while choosing items.', easier: 'Seated side taps or alternating heel slides.' },
      { task: 'Choosing an outfit', move: 'Front + side arm raises', how: 'Use no weight and move slowly.', easier: 'Perform seated, slowly, and within a comfortable range.' },
      { task: 'Putting shoes away', move: 'Sit-to-stands', how: 'Complete 5-10 from a chair or bench.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Organizing paperwork', move: 'Seated marches', how: 'Continue for 30-60 seconds.', easier: 'Already seated; slow the pace or shorten the range.' },
      { task: 'Filing papers', move: 'Seated knee extensions', how: 'Complete 10 per side.', easier: 'Already seated; slow the pace or shorten the range.' },
      { task: 'Unpacking deliveries', move: 'Hip hinges', how: 'Keep packages close and hinge at your hips.', easier: 'Seated hip hinge with hands resting on thighs.' },
      { task: 'Breaking down boxes', move: 'Wall push-ups', how: 'Complete 10 before recycling them.', easier: 'Seated palm presses at chest height.' },
      { task: 'Watering plants', move: 'Suitcase carry', how: 'Switch the watering can between hands.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Checking each plant', move: 'Supported calf raises', how: 'Complete five at each plant station.', easier: 'Seated heel raises with feet firmly planted.' },
    ],
  },
  {
    slug: 'get-ready-movement',
    name: 'Get-Ready Movement',
    titleLead: 'Get-Ready',
    titleAccent: 'Movement',
    tagline: 'Start the day with strength, balance and mobility.',
    intro:
      'Twelve small moves for your morning routine, from brushing your teeth to the last look in the mirror. Every move has an easier, seated option.',
    safety: 'Sit for dressing when needed. Keep toothbrushes and wet floors out of movement.',
    steps: [
      { task: 'Brushing your teeth', move: 'Calf raises', how: 'Use firm counter support and move only on a dry floor.', easier: 'Seated heel raises with feet firmly planted.' },
      { task: 'After brushing', move: 'Supported mini squats', how: 'Put the toothbrush away, then do 8-12.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Washing your face', move: 'Standing hip extensions', how: 'Complete 8-10 per side afterward.', easier: 'Seated side taps or alternating heel slides.' },
      { task: 'Applying skincare', move: 'Wall sit', how: 'Hold for 15-30 seconds while it absorbs.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Waiting for the shower', move: 'Wall push-ups', how: 'Complete 8-12 away from wet floors.', easier: 'Seated palm presses at chest height.' },
      { task: 'Drying your hair', move: 'Alternating step taps', how: 'Tap one foot out to the side at a time.', easier: 'Seated side taps or alternating heel slides.' },
      { task: 'Doing your makeup', move: 'Single-leg balance', how: 'Stay near the counter and switch often.', easier: 'Seated alternating toe taps.' },
      { task: 'Choosing clothes', move: 'Side leg raises', how: 'Complete 10 per side.', easier: 'Seated side taps or alternating heel slides.' },
      { task: 'Putting on socks', move: 'Seated knee extensions', how: 'Do 8 per side before putting them on.', easier: 'Already seated; slow the pace or shorten the range.' },
      { task: 'Getting dressed', move: 'Sit-to-stands', how: 'Use a stable chair; complete 8-12 after dressing.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Putting on a jacket', move: 'Shoulder rolls', how: 'Do five forward and five backward.', easier: 'Perform the same movement seated and gently.' },
      { task: 'Checking the mirror', move: 'Posture reset', how: 'Stand tall and take three slow breaths.', easier: 'Perform the same movement seated and gently.' },
    ],
  },
  {
    slug: 'workday-movement',
    name: 'Workday Movement',
    titleLead: 'Workday',
    titleAccent: 'Movement',
    tagline: 'Attach a tiny exercise to the tasks you already complete.',
    intro:
      'Twelve small moves for the desk, from logging in to shutting down, including the ones you can do without leaving your chair. Every move has an easier, seated option.',
    safety: 'Change position often. Comfortable, pain-free movement is the goal.',
    steps: [
      { task: 'Logging in', move: 'Seated marches', how: 'March for 30 seconds.', easier: 'Already seated; slow the pace or shorten the range.' },
      { task: 'Opening email', move: 'Shoulder-blade squeezes', how: 'Complete 10.', easier: 'Perform the same movement seated and gently.' },
      { task: 'Finishing an email', move: 'Seated calf raises', how: 'Complete 10-15.', easier: 'Already seated; slow the pace or shorten the range.' },
      { task: 'Completing a phone call', move: 'Sit-to-stands', how: 'Complete 5-10.', easier: 'Seated knee extensions or gentle glute squeezes.' },
      { task: 'Waiting on hold', move: 'March in place', how: 'Continue until the call resumes.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Reading a long document', move: 'Seated knee extensions', how: 'Complete 10 per side.', easier: 'Already seated; slow the pace or shorten the range.' },
      { task: 'Saving or submitting work', move: 'Overhead reaches', how: 'Complete five slow reaches.', easier: 'Seated reaches within a comfortable range.' },
      { task: 'Filling your water bottle', move: 'Brisk walk', how: 'Take the longer safe route.', easier: 'Seated marching, or slow supported steps.' },
      { task: 'Bathroom break', move: 'Wall push-ups', how: 'Complete 8-12 before returning.', easier: 'Seated palm presses at chest height.' },
      { task: 'Starting lunch', move: 'Chest stretch', how: 'Hold for 20-30 seconds.', easier: 'Perform the same movement seated and gently.' },
      { task: 'Afternoon slump', move: 'Side steps', how: 'Continue for 45-60 seconds.', easier: 'Seated side taps, one foot at a time.' },
      { task: 'Shutting down', move: 'Wall angels', how: 'Complete 8-10.', easier: 'Perform the same movement seated and gently.' },
    ],
  },
];

export function getMovementGuide(slug: string): MovementGuide {
  const g = movementGuides.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown movement guide: ${slug}`);
  return g;
}

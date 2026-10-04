export interface IllusionOption {
  id: string;
  text: string;
  interpretation: string;
}

export interface IllusionStage {
  id: number;
  slug: string;
  title: string;
  question: string;
  imageSrc: string;
  options: IllusionOption[];
}

export const ILLUSIONS_DATA: IllusionStage[] = [
  {
    id: 1,
    slug: "bird-or-lynx",
    title: "Bird or Lynx? A Dual-Perspective Dilemma",
    question: "What did you notice first?",
    imageSrc: "/images/bird_or_lynx.webp",
    options: [
      {
        id: "lynx",
        text: "A Lynx",
        interpretation: "Strategic thinker, capable of grasping the big picture. Ideal for leadership roles managing complex dynamics."
      },
      {
        id: "bird",
        text: "A Bird",
        interpretation: "Creative and practical problem-solver who values innovation and thinks outside the box."
      }
    ]
  },
  {
    id: 2,
    slug: "animal-kingdom",
    title: "The Animal Kingdom: Discover Hidden Life",
    question: "How many animals do you spot in your first glance?",
    imageSrc: "/images/the_animal_kingdom.jpg",
    options: [
      {
        id: "under-3",
        text: "Fewer Than 3 Animals",
        interpretation: "Focuses on the big picture and macro themes, sometimes overlooking everyday micro-subtleties."
      },
      {
        id: "4-to-7",
        text: "4 to 7 Animals",
        interpretation: "Balanced perspective—observant yet fluid in attention, balancing general flow with details."
      },
      {
        id: "8-or-more",
        text: "More Than 8 Animals",
        interpretation: "Natural curiosity, meticulous attention to detail, and a rare eye for what others miss."
      }
    ]
  },
  {
    id: 3,
    slug: "old-or-young",
    title: "Old or Young? A Tale of Two Couples",
    question: "Which couple caught your eyes first?",
    imageSrc: "/images/old_or_young.webp",
    options: [
      {
        id: "older-couple",
        text: "The Older Couple Reminiscing",
        interpretation: "Cherishes wisdom, nostalgia, and comfort. Rooted in tradition, depth, and life's enduring lessons."
      },
      {
        id: "young-couple",
        text: "The Vibrant Young Couple",
        interpretation: "Phase of adventure, spontaneity, and forward-thinking optimism, embracing new horizons."
      }
    ]
  },
  {
    id: 4,
    slug: "superheroes",
    title: "How Many Superheroes Do You See?",
    question: "Which superhero figure jumps out immediately?",
    imageSrc: "/images/how_many_superhero.jpg",
    options: [
      {
        id: "two-batmen",
        text: "Two Batmen (Facing each other)",
        interpretation: "Appreciates a nuanced, complex outlook on heroism. Values resilience, discipline, and grit."
      },
      {
        id: "wolverine",
        text: "Wolverine (Yellow cowl & mask)",
        interpretation: "Creative, bold, spontaneous, and drawn to fiery determination and innovation."
      },
      {
        id: "abstract",
        text: "Abstract Pattern / Neither Standout",
        interpretation: "Possesses a non-conformist perspective not defined by mainstream narratives; interprets world on own terms."
      }
    ]
  },
  {
    id: 5,
    slug: "which-woman",
    title: "Which Woman Do You See? A Classic Conundrum",
    question: "What is your immediate visual recognition?",
    imageSrc: "/images/which_human_do_you_see.webp",
    options: [
      {
        id: "mature-woman",
        text: "The Mature Woman (Downward gaze)",
        interpretation: "Reflective and contemplative, valuing seasoned life experience and measured judgment."
      },
      {
        id: "young-woman",
        text: "The Young Woman (Looking over shoulder)",
        interpretation: "Curious, hopeful, and energized by forward-thinking potential and youthful optimism."
      }
    ]
  },
  {
    id: 6,
    slug: "vase-or-faces",
    title: "Vase or Faces? The Rubin's Vase Reimagined",
    question: "What did you register in that first split second?",
    imageSrc: "/images/vase_or_faces.jpg",
    options: [
      {
        id: "vase",
        text: "The Central Vase",
        interpretation: "Appreciates the overarching structure, simplicity, and macro balance over intricate clutter."
      },
      {
        id: "faces",
        text: "Two Faces in Profile",
        interpretation: "Detail-oriented, socially observant of subtle non-verbal cues, and tuned into interpersonal dynamics."
      }
    ]
  },
  {
    id: 7,
    slug: "mask-or-bra",
    title: "Mask or Bra? A Modern Twist on Perception",
    question: "What does your eye parse first?",
    imageSrc: "/images/mask_or_bra.jpg",
    options: [
      {
        id: "spiderman-mask",
        text: "Spider-Man Mask",
        interpretation: "Calm, reserved, grounded in familiar, traditional anchors; cautious when navigating disruption."
      },
      {
        id: "white-bra",
        text: "White Bra",
        interpretation: "Open to novelty, playful, and adventurous. Unafraid to challenge conventional boundaries."
      }
    ]
  },
  {
    id: 8,
    slug: "man-or-woman",
    title: "Man or Woman? Reflecting on Duality",
    question: "Which figure captures your focus?",
    imageSrc: "/images/man_or_women.jpg",
    options: [
      {
        id: "young-woman",
        text: "Back of a Young Woman's Head",
        interpretation: "Curious and naturally optimistic, looking on the bright side with thoughtful deliberation."
      },
      {
        id: "older-man",
        text: "Older Man with a Mustache",
        interpretation: "Loyal, dependable, and analytical. Natural problem-solver who takes accountability seriously."
      }
    ]
  },
  {
    id: 9,
    slug: "moon-or-birds",
    title: "Moon or Birds? An Ethereal Perspective",
    question: "What does your perception reveal first?",
    imageSrc: "/images/moon_or_bird.jpg",
    options: [
      {
        id: "mustached-face",
        text: "Round Face with Mustache",
        interpretation: "Cautious, considerate, and diplomatic. Trusts inner intuition and diffuses friction."
      },
      {
        id: "birds",
        text: "Pair of Birds Against the Moon",
        interpretation: "Naturally warm, welcoming, and joyful. Easily puts others at ease with infectious optimism."
      }
    ]
  },
  {
    id: 10,
    slug: "faces-or-candlestick",
    title: "Faces or a Candlestick? Social Dynamics in a Snapshot",
    question: "What stands out in the silhouette?",
    imageSrc: "/images/face_or_candlestick.jpg",
    options: [
      {
        id: "faces",
        text: "Two Profiles Facing Each Other",
        interpretation: "Extroverted and socially energized. Thrives on conversation, connection, and collective synergy."
      },
      {
        id: "candlestick",
        text: "The Solitary Candlestick",
        interpretation: "Introverted depth and introspective peace. Cherishes personal sanctuary and thoughtful solitude."
      }
    ]
  },
  {
    id: 11,
    slug: "columns-or-silhouettes",
    title: "Columns or Silhouettes? Order vs Impulse",
    question: "What creates the primary shape?",
    imageSrc: "/images/column_or_silhoutess.webp",
    options: [
      {
        id: "columns",
        text: "Three Classical Columns",
        interpretation: "Values security, structural clarity, and methodical plans. Works steadily toward defined benchmarks."
      },
      {
        id: "silhouettes",
        text: "Two Silhouettes in the Gaps",
        interpretation: "Comfortable with spontaneity and calculated risk. Values autonomy over rigid rules."
      }
    ]
  },
  {
    id: 12,
    slug: "explosion-or-hands",
    title: "Explosion or Hands? Leadership and Empathy",
    question: "What is your immediate impression?",
    imageSrc: "/images/explosion_or_hand.jpg",
    options: [
      {
        id: "explosion",
        text: "A Colorful Burst / Explosion",
        interpretation: "Assertive, decisive leader with dynamic drive, organizational vision, and momentum."
      },
      {
        id: "hands",
        text: "Two Hands / Thumbs Hidden in Dark Space",
        interpretation: "Deeply empathetic, principled, and supportive. Driven by justice and emotional solidarity."
      }
    ]
  },
  {
    id: 13,
    slug: "binoculars-car-or-a",
    title: "Binoculars, Car, or the Letter A?",
    question: "Which of the three hidden elements strikes you?",
    imageSrc: "/images/binorcular_car_or_a.jpg",
    options: [
      {
        id: "binoculars",
        text: "Man Peering Through Binoculars",
        interpretation: "Strategic trend-forecaster with an innate ability to foresee opportunities and risks ahead."
      },
      {
        id: "car",
        text: "A Car Cruising Along the Road",
        interpretation: "Yearns for freedom, exploration, and living life on self-determined terms."
      },
      {
        id: "letter-a",
        text: "The Letter A",
        interpretation: "Lateral thinker and inventive problem solver who looks at everyday constraints from unique angles."
      }
    ]
  },
  {
    id: 14,
    slug: "skull-or-woman",
    title: "Skull or Woman? Reflections on Vanity and Self-Image",
    question: "What did your eyes lock onto?",
    imageSrc: "/images/skull_or_women.webp",
    options: [
      {
        id: "skull",
        text: "The Haunting Skull",
        interpretation: "Philosophical, macro-contemplative mind seeking the deeper truths and common human bonds."
      },
      {
        id: "woman",
        text: "Woman Gazing into the Vanity Mirror",
        interpretation: "Introspective and detail-focused, exploring personal identity and inner self-worth."
      }
    ]
  },
  {
    id: 15,
    slug: "so-much-to-see",
    title: "So Much to See! A Kaleidoscope of Symbols",
    question: "Which symbol draws your attention first?",
    imageSrc: "/images/so_much_to_see.webp",
    options: [
      {
        id: "book",
        text: "Open Book",
        interpretation: "Love for knowledge, intuition, intellectual curiosity, and lifelong learning."
      },
      {
        id: "roses",
        text: "Roses / Flowers",
        interpretation: "Calm demeanor, appreciation of beauty in micro-moments, and peaceful harmony."
      },
      {
        id: "balloons",
        text: "Balloons / Heart",
        interpretation: "Playful enthusiasm, emotional warmth, and readiness to celebrate everyday life."
      },
      {
        id: "lion",
        text: "Lion / Strong Figure",
        interpretation: "Bravery, high fortitude, and fearless confidence in confronting adversity."
      }
    ]
  },
  {
    id: 16,
    slug: "coming-or-moving",
    title: "Is He Coming Closer or Moving Away?",
    question: "In your mind's eye, which direction is the figure moving?",
    imageSrc: "/images/coming_close_or_moving_away.jpg",
    options: [
      {
        id: "approaching",
        text: "Approaching Closer Toward You",
        interpretation: "Open, welcoming, and fundamentally optimistic about forthcoming experiences and connections."
      },
      {
        id: "receding",
        text: "Moving Away into the Distance",
        interpretation: "Guarded, cautious, and discerning. Protects personal boundaries with healthy skepticism."
      }
    ]
  },
  {
    id: 17,
    slug: "woman-or-skull-twist",
    title: "Woman or Skull? A Twist on Dual Perception",
    question: "What stands out in this dual perception variant?",
    imageSrc: "/images/women_or_skull_twist_dule_perception.jpg",
    options: [
      {
        id: "skull",
        text: "The Skull Form",
        interpretation: "Sensory alertness to existential challenges, high self-awareness, and contemplation."
      },
      {
        id: "woman",
        text: "The Seated Protective Woman",
        interpretation: "Empathetic, nurturing, and protective, placing high value on emotional security and trust."
      }
    ]
  },
  {
    id: 18,
    slug: "tree-root-lips",
    title: "Trees, Roots, or Lips? Navigating Life's Complexities",
    question: "Which element takes priority in your view?",
    imageSrc: "/images/tree_root_lips.webp",
    options: [
      {
        id: "lips",
        text: "The Silhouette of Lips",
        interpretation: "Pragmatic and adaptive; resolves challenges directly as they appear without over-complicating."
      },
      {
        id: "roots",
        text: "The Complex Intricate Roots",
        interpretation: "Grounded, foundational builder who nurtures long-term stability from the ground up."
      },
      {
        id: "trees",
        text: "The Towering Forest Trees",
        interpretation: "Ambitious, high-aspiration visionary striving for peak performance and upward growth."
      }
    ]
  },
  {
    id: 19,
    slug: "love-ultimate-mirror",
    title: "Love: The Ultimate Mirror of the Soul",
    question: "Which figure captures your romantic imagination first?",
    imageSrc: "/images/love_ultimate_mirror.jpg",
    options: [
      {
        id: "old-man",
        text: "The Contemplative Old Man",
        interpretation: "Values seasoned, enduring devotion, recognizing love requires patient, constant nurturing."
      },
      {
        id: "horse-rider",
        text: "Man on a Horse",
        interpretation: "Yearns for adventure and idealistic, epic romance full of passion and grand journeys."
      },
      {
        id: "girl-river",
        text: "Girl Resting by the River",
        interpretation: "Discerning and reflective in matters of the heart, protecting emotional depth."
      },
      {
        id: "stone-bridge",
        text: "The Stone Arch Bridge",
        interpretation: "Believes in connection as a bridge between souls; embraces the shared journey."
      }
    ]
  }
];

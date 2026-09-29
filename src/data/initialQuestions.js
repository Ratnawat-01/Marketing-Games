// Rich Question Dataset for All 5 MVP Game Types

export const INITIAL_QUESTIONS = [
  // ==========================================
  // GAME 1: 🎯 LOGO GUESS
  // ==========================================
  {
    id: "logo_01",
    game_type: "logo_guess",
    difficulty: "easy",
    category: "Footwear & Apparel",
    question: "Which global brand is identified by this iconic mark?",
    correct_answer: "Nike",
    options: ["Nike", "Adidas", "Puma", "Reebok"],
    brand_id: "nike",
    svgType: "nike",
    explanation: "Nike's 'Swoosh' was designed in 1971 by Carolyn Davidson. It represents the wing of Nike, the Greek goddess of victory.",
    status: "active"
  },
  {
    id: "logo_02",
    game_type: "logo_guess",
    difficulty: "easy",
    category: "Consumer Tech",
    question: "Identify this global tech giant from its silhouette.",
    correct_answer: "Apple",
    options: ["Microsoft", "Apple", "Dell", "HP"],
    brand_id: "apple",
    svgType: "apple",
    explanation: "Rob Janoff designed the Apple logo with a bite mark so that people wouldn't confuse it with a cherry at smaller sizes.",
    status: "active"
  },
  {
    id: "logo_03",
    game_type: "logo_guess",
    difficulty: "easy",
    category: "Coffee & Beverage",
    question: "Which beverage chain is known by this mythical twin-tailed Siren?",
    correct_answer: "Starbucks",
    options: ["Costa Coffee", "Dunkin'", "Starbucks", "Tim Hortons"],
    brand_id: "starbucks",
    svgType: "starbucks",
    explanation: "The Starbucks Siren stems from a 16th-century Norse woodcut, paying homage to coffee's seafaring trade routes from Seattle.",
    status: "active"
  },
  {
    id: "logo_04",
    game_type: "logo_guess",
    difficulty: "easy",
    category: "Music Streaming",
    question: "Which streaming giant uses these tilted soundwave arcs?",
    correct_answer: "Spotify",
    options: ["Apple Music", "Tidal", "Spotify", "SoundCloud"],
    brand_id: "spotify",
    svgType: "spotify",
    explanation: "Spotify's waves represent audio streaming. They are deliberately rotated by 16 degrees so the logo appears energetic and organic.",
    status: "active"
  },
  {
    id: "logo_05",
    game_type: "logo_guess",
    difficulty: "easy",
    category: "Streaming Media",
    question: "Which entertainment service is represented by this crimson ribbon 'N'?",
    correct_answer: "Netflix",
    options: ["Hulu", "Netflix", "HBO Max", "Disney+"],
    brand_id: "netflix",
    svgType: "netflix",
    explanation: "Netflix introduced the red ribbon 'N' in 2016, designed to evoke the curve of a cinema red carpet.",
    status: "active"
  },
  {
    id: "logo_06",
    game_type: "logo_guess",
    difficulty: "easy",
    category: "Automotive & Clean Energy",
    question: "Which pioneering brand uses this electric motor cross-section 'T'?",
    correct_answer: "Tesla",
    options: ["Rivian", "Lucid", "Tesla", "Polestar"],
    brand_id: "tesla",
    svgType: "tesla",
    explanation: "Elon Musk confirmed that the stylized 'T' represents a cross-section of an electric induction motor's rotor pole.",
    status: "active"
  },
  {
    id: "logo_07",
    game_type: "logo_guess",
    difficulty: "medium",
    category: "Retail",
    question: "Which retail giant has this simple concentric circle mark?",
    correct_answer: "Target",
    options: ["Walmart", "Target", "Kmart", "Costco"],
    brand_id: "target",
    svgType: "target",
    explanation: "Introduced in 1962, the Target Bullseye is recognized without the brand name by over 96% of shoppers.",
    status: "active"
  },
  {
    id: "logo_08",
    game_type: "logo_guess",
    difficulty: "easy",
    category: "Hospitality & Travel",
    question: "Which accommodation platform uses the 'Bélo' symbol?",
    correct_answer: "Airbnb",
    options: ["Booking.com", "Expedia", "Airbnb", "Tripadvisor"],
    brand_id: "airbnb",
    svgType: "airbnb",
    explanation: "Design agency DesignStudio created the 'Bélo' to represent people, places, love, and the letter 'A' combined into one continuous loop.",
    status: "active"
  },
  {
    id: "logo_09",
    game_type: "logo_guess",
    difficulty: "medium",
    category: "Automotive",
    question: "Which luxury automaker features this Bavarian flag tribute roundel?",
    correct_answer: "BMW",
    options: ["Mercedes-Benz", "Audi", "BMW", "Porsche"],
    brand_id: "bmw",
    svgType: "bmw",
    explanation: "The blue and white quadrants in BMW's roundel come from the official flag of the German state of Bavaria, where BMW originated.",
    status: "active"
  },
  {
    id: "logo_10",
    game_type: "logo_guess",
    difficulty: "easy",
    category: "Logistics",
    question: "Which shipping giant ingeniously conceals an arrow in its logo?",
    correct_answer: "FedEx",
    options: ["UPS", "DHL", "FedEx", "Maersk"],
    brand_id: "fedex",
    svgType: "fedex",
    explanation: "Designer Lindon Leader placed an arrow in the negative space between the 'E' and 'x', symbolizing forward momentum and precision.",
    status: "active"
  },

  // ==========================================
  // GAME 2: 🎨 BRAND COLOR
  // ==========================================
  {
    id: "color_01",
    game_type: "brand_color",
    difficulty: "easy",
    category: "Fast Food",
    question: "Which world-famous brand is built upon this signature color pair?",
    colors: ["#DA291C", "#FFC72C"],
    color_names: ["Speedee Red", "Golden Arches Yellow"],
    correct_answer: "McDonald's",
    options: ["McDonald's", "Burger King", "KFC", "Wendy's"],
    explanation: "The 'Ketchup and Mustard' palette is legendary: Red induces hunger and rapid decision-making, while Yellow radiates friendliness and energy.",
    status: "active"
  },
  {
    id: "color_02",
    game_type: "brand_color",
    difficulty: "easy",
    category: "Beverage",
    question: "Which iconic beverage brand owns this trademarked red and white combination?",
    colors: ["#F40009", "#FFFFFF"],
    color_names: ["Coke Red", "Crisp White"],
    correct_answer: "Coca-Cola",
    options: ["Pepsi", "Coca-Cola", "Red Bull", "Dr Pepper"],
    explanation: "Coke Red has been trademarked for over a century. Red is scientifically proven to raise heart rates and trigger instant desire.",
    status: "active"
  },
  {
    id: "color_03",
    game_type: "brand_color",
    difficulty: "easy",
    category: "Furniture & Retail",
    question: "Which Scandinavian powerhouse is instantly identified by these blue and yellow tones?",
    colors: ["#0058A9", "#FFDB00"],
    color_names: ["Swedish Blue", "Swedish Yellow"],
    correct_answer: "IKEA",
    options: ["IKEA", "Lego", "H&M", "Volvo"],
    explanation: "IKEA's blue and yellow match Sweden's national flag, signaling affordable Scandinavian utility and optimism.",
    status: "active"
  },
  {
    id: "color_04",
    game_type: "brand_color",
    difficulty: "easy",
    category: "Search & Tech",
    question: "Which tech giant is famous for this playful four-color primary palette?",
    colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    color_names: ["Blue", "Red", "Yellow", "Green"],
    correct_answer: "Google",
    options: ["Microsoft", "Google", "Slack", "eBay"],
    explanation: "Google used primary colors for its letters but made the 'l' green (a secondary color) to show that Google doesn't follow rigid conventions.",
    status: "active"
  },
  {
    id: "color_05",
    game_type: "brand_color",
    difficulty: "medium",
    category: "Logistics",
    question: "Which global courier is trademarked with this vibrant purple and orange duo?",
    colors: ["#4D148C", "#FF6600"],
    color_names: ["Deep Purple", "Express Orange"],
    correct_answer: "FedEx",
    options: ["UPS", "FedEx", "DHL", "TNT"],
    explanation: "Purple conveys prestige and reliability, while high-vis Orange stands for lightning-fast express delivery.",
    status: "active"
  },
  {
    id: "color_06",
    game_type: "brand_color",
    difficulty: "easy",
    category: "Coffee & Lifestyle",
    question: "Which beverage brand is renowned for this deep forest green and white?",
    colors: ["#00704A", "#FFFFFF"],
    color_names: ["Starbucks Green", "Pure White"],
    correct_answer: "Starbucks",
    options: ["Starbucks", "Heineken", "Subway", "Whole Foods"],
    explanation: "In 1987, Starbucks switched from brown to green to symbolize growth, freshness, prosperity, and natural ethical sourcing.",
    status: "active"
  },
  {
    id: "color_07",
    game_type: "brand_color",
    difficulty: "easy",
    category: "Audio Streaming",
    question: "Which streaming company is built around this electric neon green and dark canvas?",
    colors: ["#1DB954", "#191414"],
    color_names: ["Spotify Green", "Midnight Black"],
    correct_answer: "Spotify",
    options: ["Spotify", "Razer", "Xbox", "Monster Energy"],
    explanation: "Spotify refreshed its brand with a punchy fluorescent green that cuts through saturated smartphone screens and modern music culture.",
    status: "active"
  },
  {
    id: "color_08",
    game_type: "brand_color",
    difficulty: "medium",
    category: "Toys & Play",
    question: "Which beloved brand pairs vibrant brick red and bright yellow?",
    colors: ["#D11013", "#FFD500", "#000000", "#FFFFFF"],
    color_names: ["Lego Red", "Lego Yellow", "Black", "White"],
    correct_answer: "LEGO",
    options: ["LEGO", "Hot Wheels", "Fisher-Price", "Nerf"],
    explanation: "Bright primary colors stimulate spatial creativity and joyful problem-solving in children and adults alike.",
    status: "active"
  },

  // ==========================================
  // GAME 3: 🔤 BRAND A–Z
  // ==========================================
  {
    id: "az_01",
    game_type: "brand_az",
    difficulty: "easy",
    category: "Alphabet Challenge",
    letter: "M",
    question: "Name the world-famous fast-food brand that begins with the letter 'M'!",
    correct_answer: "McDonald's",
    options: ["McDonald's", "Mercedes-Benz", "Microsoft", "Mastercard"],
    explanation: "McDonald's operates in over 100 countries and serves over 69 million customers every single day.",
    status: "active"
  },
  {
    id: "az_02",
    game_type: "brand_az",
    difficulty: "easy",
    category: "Alphabet Challenge",
    letter: "A",
    question: "Which trillion-dollar e-commerce titan starts with 'A' and delivers from A to Z?",
    correct_answer: "Amazon",
    options: ["Apple", "Amazon", "Adidas", "Audi"],
    explanation: "Amazon was originally founded in 1994 as Cadabra, but Jeff Bezos renamed it after the world's largest river to denote endless scale.",
    status: "active"
  },
  {
    id: "az_03",
    game_type: "brand_az",
    difficulty: "easy",
    category: "Alphabet Challenge",
    letter: "S",
    question: "Which Swedish music streaming phenomenon begins with 'S'?",
    correct_answer: "Spotify",
    options: ["Sony", "Samsung", "Spotify", "Sephora"],
    explanation: "Daniel Ek and Martin Lorentzon co-founded Spotify in Stockholm, transforming the music industry from ownership to subscription access.",
    status: "active"
  },
  {
    id: "az_04",
    game_type: "brand_az",
    difficulty: "easy",
    category: "Alphabet Challenge",
    letter: "N",
    question: "Which global sportswear brand beginning with 'N' is named after the Greek goddess of victory?",
    correct_answer: "Nike",
    options: ["Nike", "New Balance", "Nintendo", "Nivea"],
    explanation: "Originally known as Blue Ribbon Sports, employee Jeff Johnson dreamt up the name 'Nike' the night before patent papers were filed.",
    status: "active"
  },
  {
    id: "az_05",
    game_type: "brand_az",
    difficulty: "medium",
    category: "Alphabet Challenge",
    letter: "Z",
    question: "Which Spanish fast-fashion powerhouse begins with 'Z'?",
    correct_answer: "Zara",
    options: ["Zara", "Zoom", "Zappos", "Zenith"],
    explanation: "Amancio Ortega originally wanted to name the store Zorba after 'Zorba the Greek', but because a local bar had the same name, he rearranged the letter molds into Z-A-R-A.",
    status: "active"
  },
  {
    id: "az_06",
    game_type: "brand_az",
    difficulty: "easy",
    category: "Alphabet Challenge",
    letter: "T",
    question: "Which electric vehicle company beginning with 'T' was named in honor of inventor Nikola Tesla?",
    correct_answer: "Tesla",
    options: ["Toyota", "Tesla", "Target", "Tiffany & Co."],
    explanation: "Tesla was founded in July 2003 by Martin Eberhard and Marc Tarpenning, with Elon Musk joining as lead investor in 2004.",
    status: "active"
  },
  {
    id: "az_07",
    game_type: "brand_az",
    difficulty: "medium",
    category: "Alphabet Challenge",
    letter: "F",
    question: "Which express delivery pioneer begins with 'F' and famously delivers overnight?",
    correct_answer: "FedEx",
    options: ["Ford", "FedEx", "Ferrari", "Facebook"],
    explanation: "Fred Smith wrote the conceptual business plan for Federal Express as an economics term paper at Yale University (he famously received an average 'C' grade!).",
    status: "active"
  },
  {
    id: "az_08",
    game_type: "brand_az",
    difficulty: "easy",
    category: "Alphabet Challenge",
    letter: "I",
    question: "Which flat-pack furniture giant beginning with 'I' is famous for Swedish meatballs?",
    correct_answer: "IKEA",
    options: ["IBM", "Intel", "IKEA", "Instagram"],
    explanation: "IKEA is an acronym formed from Ingvar Kamprad (founder), Elmtaryd (his family farm), and Agunnaryd (his home village in Sweden).",
    status: "active"
  },

  // ==========================================
  // GAME 4: 📚 MARKETING TERMS
  // ==========================================
  {
    id: "term_01",
    game_type: "marketing_terms",
    difficulty: "medium",
    category: "Pricing Strategy",
    question: "What pricing strategy involves setting a relatively low initial price to rapidly attract customers and capture high market share?",
    correct_answer: "Penetration Pricing",
    options: [
      "Price Skimming",
      "Penetration Pricing",
      "Premium Pricing",
      "Dynamic Pricing"
    ],
    explanation: "Penetration pricing trades early profit margins for rapid market adoption. Once established with high brand loyalty, prices are gradually normalized.",
    status: "active"
  },
  {
    id: "term_02",
    game_type: "marketing_terms",
    difficulty: "medium",
    category: "Pricing Strategy",
    question: "Which strategy sets high introductory prices to capture surplus from early adopters before lowering prices over time?",
    correct_answer: "Price Skimming",
    options: [
      "Penetration Pricing",
      "Price Skimming",
      "Cost-Plus Pricing",
      "Loss Leader Pricing"
    ],
    explanation: "Apple frequently uses price skimming with flagship iPhones: capturing tech enthusiasts willing to pay top dollar first, then discounting older tiers.",
    status: "active"
  },
  {
    id: "term_03",
    game_type: "marketing_terms",
    difficulty: "easy",
    category: "Marketing Fundamentals",
    question: "What are the traditional '4 Ps' of the classic marketing mix?",
    correct_answer: "Product, Price, Place, Promotion",
    options: [
      "Product, Price, Place, Promotion",
      "People, Process, Profit, Packaging",
      "Planning, Production, Placement, Press",
      "Purchase, Positioning, Purpose, Publicity"
    ],
    explanation: "Formulated by E. Jerome McCarthy in 1960 and popularized by Philip Kotler, the 4 Ps remain foundational to strategic marketing plans.",
    status: "active"
  },
  {
    id: "term_04",
    game_type: "marketing_terms",
    difficulty: "hard",
    category: "Product Management",
    question: "When a company introduces a new product that ends up stealing sales from its own existing product line, this is called:",
    correct_answer: "Cannibalization",
    options: [
      "Market Saturation",
      "Cannibalization",
      "Brand Dilution",
      "Feature Creep"
    ],
    explanation: "Cannibalization occurs when products eat each other's revenue. However, as Steve Jobs famously said: 'If you don't cannibalize yourself, someone else will.'",
    status: "active"
  },
  {
    id: "term_05",
    game_type: "marketing_terms",
    difficulty: "medium",
    category: "Strategic Marketing",
    question: "In strategic marketing, what does the acronym 'STP' stand for?",
    correct_answer: "Segmentation, Targeting, Positioning",
    options: [
      "Sales, Turnover, Profit",
      "Segmentation, Targeting, Positioning",
      "Strategy, Tactical, Planning",
      "Search, Traffic, Performance"
    ],
    explanation: "STP is the core framework for answering: Who exists in the market (Segmentation)? Who do we serve (Targeting)? How do we stand out in their minds (Positioning)?",
    status: "active"
  },
  {
    id: "term_06",
    game_type: "marketing_terms",
    difficulty: "easy",
    category: "Consumer Behaviour",
    question: "What term describes the psychological discomfort felt by a consumer after making a difficult purchase decision (buyer's remorse)?",
    correct_answer: "Cognitive Dissonance",
    options: [
      "Cognitive Dissonance",
      "Choice Overload",
      "Loss Aversion",
      "Confirmation Bias"
    ],
    explanation: "Post-purchase cognitive dissonance is why marketers send reassuring welcome emails and testimonials immediately following large purchases.",
    status: "active"
  },
  {
    id: "term_07",
    game_type: "marketing_terms",
    difficulty: "medium",
    category: "Digital Marketing",
    question: "The percentage of website visitors who leave after viewing only a single page without taking any action is called:",
    correct_answer: "Bounce Rate",
    options: [
      "Churn Rate",
      "Bounce Rate",
      "Drop-off Index",
      "Abandonment Velocity"
    ],
    explanation: "A high bounce rate often points to misleading ad copy, sluggish loading speeds, or mismatched landing page user expectations.",
    status: "active"
  },
  {
    id: "term_08",
    game_type: "marketing_terms",
    difficulty: "medium",
    category: "Growth & Unit Economics",
    question: "Which metric calculates the total revenue a business can reasonably expect from a single customer throughout their relationship?",
    correct_answer: "Customer Lifetime Value (CLV / LTV)",
    options: [
      "Customer Acquisition Cost (CAC)",
      "Customer Lifetime Value (CLV / LTV)",
      "Net Promoter Score (NPS)",
      "Average Order Value (AOV)"
    ],
    explanation: "A healthy sustainable business model typically aims for an LTV:CAC ratio of at least 3:1 (customer lifetime value is 3x the cost to acquire them).",
    status: "active"
  },
  {
    id: "term_09",
    game_type: "marketing_terms",
    difficulty: "easy",
    category: "Branding",
    question: "The commercial value derived from consumer perception of a brand name rather than the product or service itself is known as:",
    correct_answer: "Brand Equity",
    options: [
      "Brand Equity",
      "Market Share",
      "Goodwill Reserve",
      "Price Elasticity"
    ],
    explanation: "High brand equity allows brands like Apple and Rolex to command extreme price premiums over functionally similar generic products.",
    status: "active"
  },
  {
    id: "term_10",
    game_type: "marketing_terms",
    difficulty: "hard",
    category: "Pricing Psychology",
    question: "Setting a price just below a round number (e.g., $9.99 instead of $10.00) is known as which pricing tactic?",
    correct_answer: "Charm Pricing",
    options: [
      "Charm Pricing",
      "Decoy Pricing",
      "Anchor Pricing",
      "Value-Based Pricing"
    ],
    explanation: "Due to the 'left-digit effect', human brains subconsciously process $9.99 closer to $9 than $10, dramatically increasing conversion rates.",
    status: "active"
  },

  // ==========================================
  // GAME 5: 🏷️ TAGLINE GUESS
  // ==========================================
  {
    id: "tagline_01",
    game_type: "tagline_guess",
    difficulty: "easy",
    category: "Sportswear",
    question: "Which brand made marketing history with the iconic slogan: \"Just Do It.\"?",
    tagline: "Just Do It.",
    correct_answer: "Nike",
    options: ["Adidas", "Nike", "Puma", "Under Armour"],
    explanation: "Dan Wieden created 'Just Do It' in 1988, surprisingly inspired by the infamous final words of death-row inmate Gary Gilmore.",
    status: "active"
  },
  {
    id: "tagline_02",
    game_type: "tagline_guess",
    difficulty: "easy",
    category: "Fast Food",
    question: "Which fast-food giant sings the worldwide earworm: \"I'm Lovin' It\"?",
    tagline: "I'm Lovin' It",
    correct_answer: "McDonald's",
    options: ["Burger King", "McDonald's", "Wendy's", "Subway"],
    explanation: "Launched in 2003 with a jingle recorded with Justin Timberlake and Pharrell Williams, it became McDonald's longest-running global campaign.",
    status: "active"
  },
  {
    id: "tagline_03",
    game_type: "tagline_guess",
    difficulty: "easy",
    category: "Consumer Tech",
    question: "Which brand rallied rebels and creative thinkers with: \"Think Different.\"?",
    tagline: "Think Different.",
    correct_answer: "Apple",
    options: ["Microsoft", "IBM", "Apple", "Sony"],
    explanation: "Crafted by TBWA\\Chiat\\Day in 1997 upon Steve Jobs's return, it honored innovators like Einstein, Gandhi, and Picasso who 'push the human race forward'.",
    status: "active"
  },
  {
    id: "tagline_04",
    game_type: "tagline_guess",
    difficulty: "easy",
    category: "Energy Drinks",
    question: "Which beverage brand famously promises: \"Gives You Wings\"?",
    tagline: "Red Bull Gives You Wings.",
    correct_answer: "Red Bull",
    options: ["Monster Energy", "Red Bull", "Rockstar", "Gatorade"],
    explanation: "Dietrich Mateschitz and advertising executive Johannes Kastner devised this slogan in 1987, anchoring Red Bull's association with extreme physical feats.",
    status: "active"
  },
  {
    id: "tagline_05",
    game_type: "tagline_guess",
    difficulty: "medium",
    category: "Sportswear",
    question: "Which athletic brand championed athletes with: \"Impossible Is Nothing\"?",
    tagline: "Impossible Is Nothing.",
    correct_answer: "Adidas",
    options: ["Nike", "Reebok", "Adidas", "Asics"],
    explanation: "Adidas launched this campaign in 2004, inspired by a quote from legendary boxing champion Muhammad Ali.",
    status: "active"
  },
  {
    id: "tagline_06",
    game_type: "tagline_guess",
    difficulty: "medium",
    category: "Automotive",
    question: "Which automaker claimed driving superiority with: \"The Ultimate Driving Machine\"?",
    tagline: "The Ultimate Driving Machine.",
    correct_answer: "BMW",
    options: ["Mercedes-Benz", "BMW", "Audi", "Porsche"],
    explanation: "Created in 1974 by Ammirati & Puris, it positioned BMW cars as performance instruments engineered for people who truly enjoy the thrill of driving.",
    status: "active"
  },
  {
    id: "tagline_07",
    game_type: "tagline_guess",
    difficulty: "easy",
    category: "Fast Food",
    question: "Which burger brand puts customer customization first with: \"Have It Your Way\"?",
    tagline: "Have It Your Way.",
    correct_answer: "Burger King",
    options: ["McDonald's", "Burger King", "Five Guys", "In-N-Out"],
    explanation: "Introduced in 1974 to contrast against McDonald's rigid assembly-line preparation, emphasizing that BK cooks burgers to your individual preference.",
    status: "active"
  },
  {
    id: "tagline_08",
    game_type: "tagline_guess",
    difficulty: "medium",
    category: "Hospitality & Travel",
    question: "Which platform redefined travel culture with the tagline: \"Belong Anywhere\"?",
    tagline: "Belong Anywhere.",
    correct_answer: "Airbnb",
    options: ["Airbnb", "Hilton", "Uber", "Expedia"],
    explanation: "The slogan captures Airbnb's mission not just to provide a place to sleep, but to make guests feel at home in any neighborhood around the globe.",
    status: "active"
  },
  {
    id: "tagline_09",
    game_type: "tagline_guess",
    difficulty: "easy",
    category: "Beverage",
    question: "Which legendary brand encouraged the world to: \"Open Happiness\"?",
    tagline: "Open Happiness.",
    correct_answer: "Coca-Cola",
    options: ["Pepsi", "Coca-Cola", "Sprite", "Fanta"],
    explanation: "Launched in 2009 by Wieden+Kennedy, this global campaign positioned Coca-Cola as an invitation to pause, connect, and savor simple everyday joy.",
    status: "active"
  },
  {
    id: "tagline_10",
    game_type: "tagline_guess",
    difficulty: "medium",
    category: "Diamonds & Luxury",
    question: "Which slogan, coined by De Beers in 1947, made diamonds the universal symbol of marriage?",
    tagline: "A Diamond Is Forever.",
    correct_answer: "De Beers",
    options: ["Tiffany & Co.", "Cartier", "De Beers", "Rolex"],
    explanation: "Written by copywriter Frances Gerety at N.W. Ayer, AdAge voted it the #1 greatest advertising slogan of the 20th century.",
    status: "active"
  }
];

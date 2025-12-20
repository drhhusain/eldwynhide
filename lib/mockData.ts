import { Category, Product, Stockist, FAQ } from "./sanity/types";

// Mock data for development when Sanity is not connected
export const mockCategories: Category[] = [
  {
    _id: "cat-1",
    name: "Bags",
    slug: "bags",
    description: "Handcrafted leather bags for every occasion",
  },
  {
    _id: "cat-2",
    name: "Wallets",
    slug: "wallets",
    description: "Elegant wallets and cardholders",
  },
  {
    _id: "cat-3",
    name: "Purses",
    slug: "purses",
    description: "Sophisticated purses and clutches",
  },
  {
    _id: "cat-4",
    name: "Accessories",
    slug: "accessories",
    description: "Belts, keychains, and more",
  },
];

export const mockProducts: Product[] = [
  {
    _id: "prod-1",
    name: "The Heritage Tote",
    slug: "heritage-tote",
    description:
      "A timeless tote bag crafted from full-grain leather, featuring brass hardware and hand-stitched details.",
    price: 895,
    images: [],
    colors: [
      { name: "Cognac", hex: "#8B4513" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "Tan", hex: "#D2691E" },
    ],
    materials: ["Full-grain leather", "Brass hardware"],
    dimensions: { width: '14"', height: '12"', depth: '5"' },
    careInstructions:
      "Clean with a soft, dry cloth. Condition regularly with leather balm.",
    featured: true,
    category: mockCategories[0],
  },
  {
    _id: "prod-2",
    name: "Minimalist Bifold",
    slug: "minimalist-bifold",
    description:
      "Sleek bifold wallet with 6 card slots and a bill compartment, crafted from vegetable-tanned leather.",
    price: 245,
    images: [],
    colors: [
      { name: "Navy", hex: "#1B2838" },
      { name: "Burgundy", hex: "#722F37" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    materials: ["Vegetable-tanned leather"],
    dimensions: { width: '4.5"', height: '3.5"', depth: '0.5"' },
    careInstructions:
      "Keep away from direct sunlight. Clean with leather conditioner.",
    featured: true,
    category: mockCategories[1],
  },
  {
    _id: "prod-3",
    name: "Evening Clutch",
    slug: "evening-clutch",
    description:
      "An elegant clutch with gold-tone clasp, perfect for special occasions.",
    price: 425,
    images: [],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    materials: ["Nappa leather", "Gold-plated hardware"],
    dimensions: { width: '10"', height: '5"', depth: '2"' },
    careInstructions: "Store in dust bag when not in use.",
    featured: true,
    category: mockCategories[2],
  },
  {
    _id: "prod-4",
    name: "Executive Briefcase",
    slug: "executive-briefcase",
    description:
      "A structured briefcase with laptop compartment, designed for the modern professional.",
    price: 1295,
    images: [],
    colors: [
      { name: "Dark Brown", hex: "#3C2415" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    materials: ["Bridle leather", "Solid brass"],
    dimensions: { width: '16"', height: '12"', depth: '4"' },
    careInstructions: "Brush regularly. Apply leather cream seasonally.",
    featured: true,
    category: mockCategories[0],
  },
  {
    _id: "prod-5",
    name: "Card Holder",
    slug: "card-holder",
    description: "Slim card holder with 4 slots, made from supple calfskin.",
    price: 145,
    images: [],
    colors: [
      { name: "Cognac", hex: "#8B4513" },
      { name: "Forest", hex: "#228B22" },
      { name: "Navy", hex: "#1B2838" },
    ],
    materials: ["Calfskin leather"],
    dimensions: { width: '4"', height: '2.75"', depth: '0.25"' },
    careInstructions: "Wipe clean with damp cloth.",
    featured: false,
    category: mockCategories[1],
  },
  {
    _id: "prod-6",
    name: "Crossbody Satchel",
    slug: "crossbody-satchel",
    description:
      "Versatile crossbody with adjustable strap and multiple compartments.",
    price: 675,
    images: [],
    colors: [
      { name: "Saddle", hex: "#8B4513" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    materials: ["Full-grain leather", "Antique brass"],
    dimensions: { width: '10"', height: '8"', depth: '3"' },
    careInstructions: "Condition every 3-6 months.",
    featured: true,
    category: mockCategories[0],
  },
  {
    _id: "prod-7",
    name: "Leather Belt",
    slug: "leather-belt",
    description:
      "Classic dress belt with polished buckle, handcrafted from bridle leather.",
    price: 195,
    images: [],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Brown", hex: "#8B4513" },
    ],
    materials: ["Bridle leather", "Nickel buckle"],
    dimensions: { width: '1.25"', height: "Various lengths" },
    careInstructions: "Avoid getting wet. Polish buckle as needed.",
    featured: false,
    category: mockCategories[3],
  },
  {
    _id: "prod-8",
    name: "Frame Purse",
    slug: "frame-purse",
    description: "Vintage-inspired frame purse with kiss-lock closure.",
    price: 395,
    images: [],
    colors: [
      { name: "Bordeaux", hex: "#722F37" },
      { name: "Emerald", hex: "#046307" },
    ],
    materials: ["Italian lambskin", "Brass frame"],
    dimensions: { width: '8"', height: '6"', depth: '3"' },
    careInstructions: "Handle with care. Store stuffed to maintain shape.",
    featured: true,
    category: mockCategories[2],
  },
];

export const mockStockists: Stockist[] = [
  {
    _id: "stock-1",
    name: "Maison Leather",
    address: "152 Rue du Faubourg Saint-Honoré",
    city: "Paris",
    country: "France",
    phone: "+33 1 42 66 00 00",
    website: "https://maisonleather.fr",
  },
  {
    _id: "stock-2",
    name: "The Leather Room",
    address: "28 Mount Street, Mayfair",
    city: "London",
    country: "United Kingdom",
    phone: "+44 20 7629 0000",
    website: "https://theleatherroom.co.uk",
  },
  {
    _id: "stock-3",
    name: "Artisan Goods",
    address: "892 Madison Avenue",
    city: "New York",
    country: "United States",
    phone: "+1 212 555 0100",
    website: "https://artisangoods.com",
  },
  {
    _id: "stock-4",
    name: "Pelletteria Milano",
    address: "Via Montenapoleone 12",
    city: "Milan",
    country: "Italy",
    phone: "+39 02 7600 0000",
    website: "https://pelletteriamilano.it",
  },
];

export const mockFAQs: FAQ[] = [
  {
    _id: "faq-1",
    question: "What type of leather do you use?",
    answer:
      "We exclusively use full-grain and top-grain leathers sourced from reputable tanneries in Italy, France, and England. Our leather is vegetable-tanned using traditional methods that have been perfected over centuries.",
    category: "products",
  },
  {
    _id: "faq-2",
    question: "How do I care for my leather goods?",
    answer:
      "We recommend cleaning your leather items with a soft, dry cloth regularly. Apply a quality leather conditioner every 3-6 months to maintain suppleness. Avoid exposure to direct sunlight and water. Store in the provided dust bag when not in use.",
    category: "care",
  },
  {
    _id: "faq-3",
    question: "Do you offer repairs?",
    answer:
      "Yes, we offer a comprehensive repair service for all Eldwynhide products. Our skilled artisans can handle everything from replacing hardware to reconditioning leather. Please contact us for a repair assessment.",
    category: "care",
  },
  {
    _id: "faq-4",
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase for items in original, unused condition with all tags attached. Custom orders are final sale. Please visit a stockist for in-person returns or contact us for return shipping instructions.",
    category: "returns",
  },
  {
    _id: "faq-5",
    question: "Are your products handmade?",
    answer:
      "Every Eldwynhide piece is handcrafted by skilled artisans in our workshops. Each item requires dozens of hours of meticulous work, from cutting the leather to the final hand-burnished edges.",
    category: "products",
  },
  {
    _id: "faq-6",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide through our network of authorized stockists. International orders are shipped via express courier with full tracking and insurance. Delivery times vary by destination.",
    category: "orders",
  },
];

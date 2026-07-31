export const brand = {
  name: "Northline Painting",
  tagline: "Clean finishes. Honest timelines.",
  phone: "021 000 0000",
  email: "hello@northlinepainting.demo",
  address: "18 Jervois Road, Ponsonby, Auckland 1011",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    id: "interior",
    title: "Interior Painting",
    description:
      "Walls, ceilings, trim and feature finishes with careful prep and crisp lines throughout the home.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    description:
      "Weather-ready coatings for façades, eaves, fences and outdoor timber that hold up season after season.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "office",
    title: "Office & Commercial",
    description:
      "Low-disruption commercial work for offices, retail and shared spaces — including after-hours options.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "bodycorp",
    title: "Body Corporate Painting",
    description:
      "Coordinated common-area and building painting with clear communication for committees and building managers.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "cabinets",
    title: "Cabinet Refresh",
    description:
      "Spray-finished kitchen and vanity updates that look new without a full renovation budget.",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1600&q=80",
  },
];

export const reasons = [
  {
    title: "Owner-led crews",
    body: "A dedicated lead on every job, so details don’t get lost between quote and final walkthrough.",
  },
  {
    title: "Proper surface prep",
    body: "Sanding, filling, priming and protection first — the finish only looks this good because of what’s underneath.",
  },
  {
    title: "Clear written quotes",
    body: "Scope, timeline and inclusions spelled out before we start. No surprise extras mid-project.",
  },
  {
    title: "Premium paint systems",
    body: "We specify durable, low-VOC coatings matched to each surface and exposure condition.",
  },
];

export type ProjectCategory = "All" | "Interior" | "Exterior" | "Commercial";

export const projects: {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  location: string;
  image: string;
}[] = [
  {
    id: "p1",
    title: "Harbour View Residence",
    category: "Interior",
    location: "Devonport",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p2",
    title: "Villa Facade Refresh",
    category: "Exterior",
    location: "Grey Lynn",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p3",
    title: "Studio Office Fit-Out",
    category: "Commercial",
    location: "Wynyard Quarter",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p4",
    title: "Coastal Living Room",
    category: "Interior",
    location: "Takapuna",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p5",
    title: "Courtyard & Fence Coat",
    category: "Exterior",
    location: "Mount Eden",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p6",
    title: "Retail Frontage Update",
    category: "Commercial",
    location: "Karangahape Road",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "They finished our whole apartment in four days and left it cleaner than they found it. Colour advice was spot on.",
    name: "Amelia R.",
    role: "Homeowner, Ponsonby",
  },
  {
    quote:
      "Our body corporate finally found a team that shows up when they say they will. Communication was excellent.",
    name: "James K.",
    role: "Body Corporate Manager",
  },
  {
    quote:
      "After-hours office paint job with zero disruption to staff. Crisp lines, fast turnaround, fair quote.",
    name: "Priya S.",
    role: "Operations Lead, CBD",
  },
];

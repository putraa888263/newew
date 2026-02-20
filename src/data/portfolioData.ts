export type ProjectCategory = "UI/UX Design" | "Motion Graphics" | "3D Animation" | "Visual Design" | "Fotografi" | "Branding";

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  year: string;
  tools: string[];
  link?: string;
}

export const portfolioData: PortfolioProject[] = [
  {
    id: 1,
    title: "Neon Horizons",
    description: "Desain UI/UX untuk aplikasi futuristic city explorer dengan konsep cyberpunk dan neon aesthetics.",
    category: "UI/UX Design",
    image: "/images/portfolio/project-1.jpg",
    year: "2024",
    tools: ["Figma", "Adobe XD", "After Effects"],
    link: "#"
  },
  {
    id: 2,
    title: "Digital Dreams",
    description: "Motion graphics project dengan fluid animations dan colorful ribbon effects untuk brand campaign.",
    category: "Motion Graphics",
    image: "/images/portfolio/project-2.jpg",
    year: "2024",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    link: "#"
  },
  {
    id: 3,
    title: "Cyber Pulse",
    description: "3D animation showcase dengan geometric shapes dan neon lighting untuk music visualizer.",
    category: "3D Animation",
    image: "/images/portfolio/project-3.jpg",
    year: "2023",
    tools: ["Blender", "Octane Render", "After Effects"],
    link: "#"
  },
  {
    id: 4,
    title: "Abstract Reality",
    description: "Visual design project dengan experimental typography dan bold colors untuk event poster.",
    category: "Visual Design",
    image: "/images/portfolio/project-4.jpg",
    year: "2023",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    link: "#"
  },
  {
    id: 5,
    title: "Neon Silhouette",
    description: "Fashion photography series dengan creative lighting dan neon color gels untuk editorial.",
    category: "Fotografi",
    image: "/images/portfolio/project-5.jpg",
    year: "2023",
    tools: ["Lightroom", "Photoshop", "Capture One"],
    link: "#"
  },
  {
    id: 6,
    title: "Lumiere Brand",
    description: "Complete brand identity design dengan logo, stationery, dan brand guidelines.",
    category: "Branding",
    image: "/images/portfolio/project-6.jpg",
    year: "2024",
    tools: ["Illustrator", "Figma", "InDesign"],
    link: "#"
  }
];

export const categoryColors: Record<ProjectCategory, string> = {
  "UI/UX Design": "#4dabf7",
  "Motion Graphics": "#ff6b9d",
  "3D Animation": "#9775fa",
  "Visual Design": "#ff922b",
  "Fotografi": "#51cf66",
  "Branding": "#fcc419"
};

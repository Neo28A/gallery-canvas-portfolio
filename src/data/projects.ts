import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "1",
    title: "Brooklyn Bridge",
    category: "Architecture",
    thumbnail: "https://images.unsplash.com/photo-1541336744128-c4b211d13087",
    year: 2023,
    description: "A stunning view of the Brooklyn Bridge in black and white, showcasing its iconic architectural structure."
  },
  {
    id: "2",
    title: "Autumn Colors",
    category: "Nature",
    thumbnail: "https://images.unsplash.com/photo-1508264165352-258db2ebd59b",
    year: 2023,
    description: "Vibrant yellow trees during fall season, capturing the beauty of autumn colors."
  },
  {
    id: "3", 
    title: "Red Forest",
    category: "Nature",
    thumbnail: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2",
    year: 2022,
    description: "A mesmerizing red forest landscape with a mysterious path cutting through."
  },
  {
    id: "4",
    title: "Coastal View",
    category: "Ocean",
    thumbnail: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    year: 2022,
    description: "Beautiful coastal landscape showcasing the meeting of land and sea."
  },
  {
    id: "5",
    title: "Church Spire",
    category: "Architecture",
    thumbnail: "https://images.unsplash.com/photo-1529954382468-c3b5e8371e10",
    year: 2021,
    description: "A tall church spire reaching into the blue sky, demonstrating classical architectural design."
  },
  {
    id: "6",
    title: "Footprints",
    category: "Nature",
    thumbnail: "https://cdn.cosmos.so/484f2cf8-7eab-4597-8214-2d8d7ebb0a1e?format=jpeg",
    year: 2021,
    description: "Footprints in the sand, telling a story of human presence in nature."
  },
  {
    id: "7",
    title: "Mountain Stream",
    category: "Water",
    thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9",
    year: 2020,
    description: "A rushing stream flowing through rocks, capturing the dynamic nature of mountain water features."
  },
  {
    id: "8",
    title: "City Skyline",
    category: "Urban",
    thumbnail: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362",
    year: 2020,
    description: "Silhouette of a city skyline against the water at dusk, showing urban beauty."
  },
  {
    id: "9",
    title: "Woodland Path",
    category: "Nature",
    thumbnail: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    year: 2019,
    description: "A peaceful path through a green forest, inviting exploration and tranquility."
  },
  {
    id: "10",
    title: "Fish Gathering",
    category: "Wildlife",
    thumbnail: "https://images.unsplash.com/photo-1546026423-cc4642628d2b",
    year: 2019,
    description: "A group of colorful fish swimming together, showing the beauty of underwater life."
  },
  {
    id: "11",
    title: "Painted Stones",
    category: "Art",
    thumbnail: "https://cdn.cosmos.so/b46bdf63-c954-4832-b929-eb87782db3e2?format=jpeg",
    year: 2018,
    description: "Carefully painted stones with vibrant designs, showcasing human creativity with natural elements."
  },
  {
    id: "12",
    title: "Winter Forest",
    category: "Nature",
    thumbnail: "https://images.unsplash.com/photo-1457269449834-928af64c684d",
    year: 2018,
    description: "A serene winter landscape with trees covered in frost, capturing the quiet beauty of winter."
  }
];

export const getUniqueCategories = (): string[] => {
  const categories = projects.map(project => project.category);
  return [...new Set(categories)];
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

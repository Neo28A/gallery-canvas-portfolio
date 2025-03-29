import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Project } from "@/components/ProjectCard";
import { Plus, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects as allProjects } from "@/data/projects";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(allProjects);
  const [activeCategory, setActiveCategory] = useState("ALL");
  
  // Extract unique categories from projects
  const categories = ["ALL", ...Array.from(new Set(allProjects.map(project => project.category.toUpperCase())))];
  
  useEffect(() => {
    if (activeCategory === "ALL") {
      setProjects(allProjects);
    } else {
      const filtered = allProjects.filter(
        project => project.category.toUpperCase() === activeCategory
      );
      setProjects(filtered);
    }
  }, [activeCategory]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        {/* Mobile categories */}
        <div className="flex md:hidden overflow-x-auto py-4 mb-6 -mx-2 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "text-left py-1.5 px-3 whitespace-nowrap text-sm transition-colors mr-4 border-b-2",
                activeCategory === category 
                  ? "text-[#FF4D00] font-medium border-[#FF4D00]" 
                  : "text-gray-400 hover:text-[#FF4D00] border-transparent hover:border-[#FF4D00]/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row rounded-xl overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-sm">
          {/* Left sidebar with categories - desktop only */}
          <div className="hidden md:block w-64 border-r border-gray-800 p-4">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 mr-2">
                <img 
                  src="/avatar.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/40';
                  }}
                />
              </div>
            </div>
            
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={cn(
                    "w-full text-left py-1.5 px-2 text-sm transition-colors",
                    activeCategory === category 
                      ? "text-[#FF4D00] font-medium" 
                      : "text-gray-500 hover:text-[#FF4D00]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <button 
              className="flex items-center text-gray-400 mt-auto pt-4 text-sm hover:text-[#FF4D00] transition-colors"
            >
              <Plus size={16} className="mr-1" />
              ADD CATEGORY
            </button>
          </div>
          
          {/* Right side with projects grid */}
          <div className="flex-1 p-4 relative">
            <div className="flex justify-between items-center md:hidden mb-4">
              <button 
                className="flex items-center text-gray-400 text-sm hover:text-[#FF4D00] transition-colors"
              >
                <Plus size={16} className="mr-1" />
                ADD CATEGORY
              </button>
              
              <button className="flex items-center text-white bg-transparent hover:text-[#FF4D00] transition-colors">
                <Upload size={18} className="mr-1" />
                UPLOAD
              </button>
            </div>
            
            <button className="hidden md:flex absolute top-4 right-4 items-center text-white bg-transparent hover:text-[#FF4D00] transition-colors">
              <Upload size={18} className="mr-1" />
              UPLOAD
            </button>
            
            <div className="md:pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className={cn(
                    "aspect-square overflow-hidden relative group",
                    // Randomly assign different sizes to some items to create masonry effect
                    Math.random() > 0.7 ? "md:col-span-2 md:row-span-2" : "",
                    Math.random() > 0.8 ? "md:col-span-2" : "",
                  )}
                >
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <div>
                      <h3 className="text-white font-medium">{project.title}</h3>
                      <p className="text-[#FF4D00] text-sm">{project.category} | {project.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects; 
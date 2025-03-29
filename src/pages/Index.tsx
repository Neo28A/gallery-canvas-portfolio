import React, { useState } from "react";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectFilter from "@/components/ProjectFilter";
import { getUniqueCategories, getProjectsByCategory } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = getUniqueCategories();
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 pt-24 pb-24">
        <div className="flex flex-col md:flex-row gap-10 max-w-[1400px] mx-auto">
          <div className="w-full md:w-64 shrink-0">
            <h3 className="text-lg font-medium mb-3 text-left text-white">Projects Gallery</h3>
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <ProjectGrid 
              projects={filteredProjects} 
              activeCategory={activeCategory}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;

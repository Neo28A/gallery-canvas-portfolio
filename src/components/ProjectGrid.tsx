import React, { useEffect, useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  activeCategory?: string;
}

const ProjectGrid = ({ projects, activeCategory = "all" }: ProjectGridProps) => {
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    // Start transition when projects change
    setIsTransitioning(true);
    
    // Wait for fade-out animation to complete
    const timer = setTimeout(() => {
      setVisibleProjects(projects);
      setIsTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [projects]);
  
  // Split projects into three columns
  const columnSize = Math.ceil(visibleProjects.length / 3);
  const column1 = visibleProjects.slice(0, columnSize);
  const column2 = visibleProjects.slice(columnSize, columnSize * 2);
  const column3 = visibleProjects.slice(columnSize * 2);
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {/* Column 1 */}
      <div className="flex flex-col gap-8">
        {column1.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* Column 2 */}
      <div className="flex flex-col gap-8">
        {column2.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* Column 3 */}
      <div className="flex flex-col gap-8">
        {column3.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;

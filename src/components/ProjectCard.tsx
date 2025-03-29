import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  year: number;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if View Transitions API is supported
    if ("startViewTransition" in document) {
      // Set custom properties for this specific card
      const uniqueId = `project-${project.id}`;
      document.documentElement.style.setProperty('--image-transition-name', uniqueId);
      document.documentElement.style.setProperty('--title-transition-name', `${uniqueId}-title`);
      
      // Pre-load the image to ensure smooth transition
      const img = new Image();
      img.src = project.thumbnail;
      
      // Start the view transition with a slight delay to ensure DOM update
      requestAnimationFrame(() => {
        // @ts-ignore - TypeScript might not recognize startViewTransition
        document.startViewTransition(() => {
          // After the transition starts, navigate to the project detail page
          navigate(`/project/${project.id}`);
          return new Promise(resolve => setTimeout(resolve, 10)); // Small delay for smoother transition
        });
      });
    } else {
      // Fallback for browsers that don't support View Transitions API
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <Link
      to={`/project/${project.id}`}
      onClick={handleClick}
      className={cn(
        "project-card block relative aspect-[4/3] overflow-hidden bg-muted",
        className
      )}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ viewTransitionName: `project-${project.id}` }}
        loading="eager" // Force eager loading for smoother transitions
      />
      <div className="project-card-overlay absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
        <div>
          <h3 
            className="project-card-title text-xl md:text-2xl font-medium mb-1 text-white" 
            style={{ viewTransitionName: `project-${project.id}-title` }}
          >
            {project.title}
          </h3>
          <p className="text-[#FF4D00] text-sm">{project.category} | {project.year}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

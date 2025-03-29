import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <Link
      to={`/project/${project.id}`}
      className={cn(
        "project-card block relative aspect-[4/3] overflow-hidden bg-muted",
        className
      )}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="project-card-overlay">
        <h3 className="text-xl md:text-2xl font-medium mb-1">{project.title}</h3>
        <p className="text-[#FF4D00] text-sm">{project.category} | {project.year}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;

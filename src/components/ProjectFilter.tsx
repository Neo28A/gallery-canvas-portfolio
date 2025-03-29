import React from "react";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <button
        onClick={() => onCategoryChange("all")}
        className={cn(
          "px-0 py-2 text-sm text-left relative transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] after:transition-all after:duration-300 hover:after:w-full",
          activeCategory === "all" ? "font-medium text-[#FF4D00] after:w-full" : "text-gray-400 hover:text-[#FF4D00]"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-0 py-2 text-sm text-left relative transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] after:transition-all after:duration-300 hover:after:w-full",
            activeCategory === category ? "font-medium text-[#FF4D00] after:w-full" : "text-gray-400 hover:text-[#FF4D00]"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;

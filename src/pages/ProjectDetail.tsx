import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Project } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projects.find((p) => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      
      // Set view transition names for this project
      const uniqueId = `project-${foundProject.id}`;
      document.documentElement.style.setProperty('--image-transition-name', uniqueId);
      document.documentElement.style.setProperty('--title-transition-name', `${uniqueId}-title`);
      
      // Preload the image to ensure smooth transitions
      const img = new Image();
      img.src = foundProject.thumbnail;
      img.onload = () => setIsLoaded(true);
    }
  }, [id]);
  
  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if View Transitions API is supported
    if ("startViewTransition" in document) {
      // Start the view transition with a slight delay for better animation
      requestAnimationFrame(() => {
        // @ts-ignore - TypeScript might not recognize startViewTransition
        document.startViewTransition(() => {
          // After the transition starts, navigate back
          navigate('/');
          return new Promise(resolve => setTimeout(resolve, 10)); // Small delay for smoother transition
        });
      });
    } else {
      // Fallback for browsers that don't support View Transitions API
      navigate('/');
    }
  };

  if (!project) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 md:px-6 pt-32 pb-16">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <Link 
          to="/" 
          onClick={handleBackClick}
          className="inline-flex items-center text-gray-400 hover:text-[#FF4D00] mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative overflow-hidden aspect-[4/3] bg-gray-900/50">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className={`project-detail-image w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ viewTransitionName: `project-${project.id}` }}
            />
          </div>
          
          <div>
            <h1 
              className="project-detail-title text-3xl md:text-4xl font-medium text-white mb-1" 
              style={{ viewTransitionName: `project-${project.id}-title` }}
            >
              {project.title}
            </h1>
            <p className="text-[#FF4D00] mb-8">{project.category} | {project.year}</p>
            
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p>{project.description}</p>
              
              {/* Add more paragraphs or content as needed */}
              <p>
                This project showcases the beauty and complexity of {project.category.toLowerCase()} through
                careful composition and attention to detail. Every element was captured with precision
                to convey the authentic essence of the subject.
              </p>
              
              <p>
                The approach involved studying the subject from multiple angles, considering lighting
                conditions, and waiting for the perfect moment to capture this image. The result is
                a compelling visual narrative that invites viewers to explore further.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;

import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If project not found, redirect to homepage
    if (!project) {
      navigate("/");
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <Link
          to="/"
          className="inline-flex items-center mb-8 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-medium mb-4 text-white">
              {project.title}
            </h1>
            <div className="flex items-center text-gray-400">
              <span>{project.category}</span>
              <span className="mx-2">•</span>
              <span>{project.year}</span>
            </div>
          </header>

          <div className="mb-12">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto aspect-video object-cover mb-8"
            />
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              {project.description}
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Suspendisse in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse feugiat sapien laoreet auctor. Suspendisse potenti. Aenean vitae magna magna. Nulla dapibus lacinia magna, a faucibus tortor commodo a.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <img
              src={`https://source.unsplash.com/random/800x600?${project.category.toLowerCase()},1`}
              alt={`${project.title} detail 1`}
              className="w-full h-auto object-cover"
            />
            <img
              src={`https://source.unsplash.com/random/800x600?${project.category.toLowerCase()},2`}
              alt={`${project.title} detail 2`}
              className="w-full h-auto object-cover"
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;

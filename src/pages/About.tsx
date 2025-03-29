import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera } from "lucide-react";

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-md aspect-square">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&q=80"
              alt="Photographer with camera"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[#FF4D00] text-sm mb-2">
                  <Camera size={14} className="mr-2" />
                  <span>Photography</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl md:text-4xl font-serif">About the Gallery</h1>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Welcome to my curated collection of nature and architectural photography. This gallery 
                represents my journey through diverse landscapes and urban environments, capturing 
                moments of beauty in both the natural and built world.
              </p>
              
              <p>
                Each image in this collection tells a story of exploration and discovery, 
                from the serene coastal views to vibrant autumn forests, from urban skylines 
                to the intricate details of historical architecture.
              </p>
              
              <p>
                My photography is driven by a passion for finding unexpected perspectives in 
                familiar scenes. I'm particularly drawn to the intersection of natural elements 
                and human presence – footprints in sand, carefully painted stones, the geometric 
                patterns of bridges against organic backdrops.
              </p>
            </div>
            
            <div className="pt-4 space-y-4">
              <h2 className="text-xl font-medium">Technical Approach</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-md p-4">
                  <h3 className="font-medium text-[#FF4D00] mb-2">Equipment</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>Sony Alpha a7III</li>
                    <li>Canon 5D Mark IV</li>
                    <li>Various prime lenses</li>
                    <li>DJI Mavic 3 Pro (aerial)</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-md p-4">
                  <h3 className="font-medium text-[#FF4D00] mb-2">Style</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>High contrast naturalism</li>
                    <li>Geometric composition</li>
                    <li>Seasonal color studies</li>
                    <li>Minimalist framing</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <a 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 bg-[#FF4D00] text-white rounded-md hover:bg-[#e04500] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;

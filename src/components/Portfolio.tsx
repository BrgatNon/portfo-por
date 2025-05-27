
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "Ranggayan",
      description: "A Mobile-Based and Web-Based Barangay Governance and Communication System",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ranggayan.netlify.app/",
      image: "https://i.ibb.co/HpCxtsNc/Add-a-heading.png"
    },
    {
      title: "De-cafe-mate",
      description: "A web-based ordering and point-of-sale (POS) system specifically developed,for TommyCo",
      tech: ["React", "TypeScript", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://tommyco.netlify.app/",
      image: "https://i.ibb.co/Q3NqLVnZ/deca.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a learning journey 
            and showcases different aspects of my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-100 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-semibold text-blue-700 group-hover:text-blue-800 transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="bg-blue-700 hover:bg-blue-800 text-white flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-yellow-400 text-yellow-600 hover:bg-yellow-50 flex-1"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

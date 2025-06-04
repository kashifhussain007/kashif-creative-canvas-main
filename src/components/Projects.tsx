
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Charts.js'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Python', 'Django', 'PostgreSQL', 'D3.js'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction tracking.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Express.js', 'JWT', 'Encryption'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'AI Chatbot Platform',
      description: 'Intelligent chatbot platform with natural language processing and machine learning capabilities.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-slate-700 text-cyan-300 border border-cyan-400/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 flex-1"
                  >
                    <Link className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 flex-1"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Code
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

export default Projects;

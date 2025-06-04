
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, User, Star } from 'lucide-react';

const About = () => {
  const skills = [
    'HTML + CSS',
  'Bootstrap',
  'JavaScript',
  'JQuery',
  'React.js',
  'Next.js',
  'REACT_REDUX_SAGA',
  'Nest.js',
  'MySQL',
  'Amadeus SOAP API',
  'Sabre RESTful API',
  'SEO Expert',
  'WordPress',
  'Photoshop',
  'Figma',
  'Machine Learning',
  'Deep Learning'

  ];

  const achievements = [
    { icon: Code, title: '50+ Projects', description: 'Completed successfully' },
    { icon: User, title: '3+ Years', description: 'Development experience' },
    { icon: Star, title: '100%', description: 'Client satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Passionate Software Engineer
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a dedicated software engineer with a passion for creating innovative 
                solutions that make a difference. With expertise in full-stack development, 
                I enjoy tackling complex problems and turning ideas into reality.
              </p>
              <p>
                My journey in software development has led me to work with various 
                technologies and frameworks, always staying curious and eager to learn 
                new tools that can enhance my development process.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects, 
                mentoring fellow developers, and exploring the latest trends in technology.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-slate-800 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats/Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{achievement.title}</h4>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

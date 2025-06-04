
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-slate-900 rounded-full p-2">
                  <img 
                    src="/lovable-uploads/79fe2e50-40c3-4fab-a81e-d2322e9beaee.png"
                    alt="Kashif - Software Engineer"
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
                </div>
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Kashif
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
              <TypewriterText />
            </div>
            
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed animate-fade-in delay-300">
              With over 4 years of experience in designing and developing complex web applications using a variety of technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <User className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

const TypewriterText = () => {
  const [text, setText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const words = ['Front-End Developer', 'Software Engineer','GDS API Integrator','SEO Specialist', 'Problem Solver', 'Tech Enthusiast'];
  
  React.useEffect(() => {
    const currentWord = words[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return <span className="text-cyan-400 font-semibold">{text}|</span>;
};

export default Hero;

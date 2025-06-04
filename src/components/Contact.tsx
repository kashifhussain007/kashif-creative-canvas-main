
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, User, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'engr.kashif111@gmail.com',
      link: 'mailto:engr.kashif111@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+92 3408922375',
      link: 'tel:+923408922375'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Lahore, Pakistan',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project idea, want to discuss technology, or 
                just want to say hello, don't hesitate to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 min-h-[120px] bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 py-3 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

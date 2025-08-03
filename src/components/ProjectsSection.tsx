import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Zap, Clock, Star, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: 'Ozank Money Transfer App',
      description: 'A secure mobile app for instant money transfers and payments.',
      image: 'https://i.ibb.co/KjWLRfn7/Screenshot-2025-07-28-at-4-40-45-PM.png',
      tags: ['IOS', 'Android', 'Node.js', 'Docker', 'AWS', 'PostgreSQL', 'Socket.io'],
      category: 'Mobile Development',
      slug: 'ozank-money-transfer',
    },
    {
      title: 'My Salon Club',
      description: 'Complete salon management app for booking, payments, and customer management.',
      image: 'https://i.ibb.co/9mDXKSyc/Screenshot-2025-07-28-at-4-45-06-PM.png',
      tags: ['React Native', 'Node.js', 'Docker', 'AWS', 'MySQL', 'Socket.io'],
      category: 'Mobile Development',
      slug: 'my-salon-club',
    },
    {
      title: 'Krushley Dating Platform',
      description: 'An innovative dating platform that connects users through shared interests and activities.',
      image: 'https://i.ibb.co/JFGPKRz5/Screenshot-2025-07-28-at-5-10-11-PM.png',
      tags: ['Flutter', 'Node.js', 'Docker', 'AWS', 'MySQL', 'Socket.io'],
      category: 'Mobile Development',
      slug: 'krushley-dating-platform',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-tech-gray mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent success stories and see how we've helped businesses transform through technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 bg-white hover:shadow-[0_0_40px_rgba(26,115,232,0.15),0_0_80px_rgba(52,168,83,0.1)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold text-gray-800 group-hover:text-brand-blue transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-blue-50 text-brand-blue px-2 py-1 rounded text-sm font-medium border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 hover:shadow-lg" onClick={() => navigate(`/projects/${project.slug}`)}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-tech-blue hover:bg-tech-blue/90 text-white px-8"
            onClick={() => navigate('/projects')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

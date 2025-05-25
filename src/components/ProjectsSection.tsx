import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Zap, Clock, Star, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      description: 'Complete overhaul of a major retail platform, resulting in 40% increase in conversion rates and improved user experience.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      metrics: [
        { text: '40% Conversion Increase', icon: TrendingUp },
        { text: '60% Load Time Reduction', icon: Zap },
        { text: '2M+ Users', icon: Users }
      ],
      category: 'Web Development'
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Cross-platform mobile application for patient management and telemedicine consultations with 150k+ active users.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Firebase', 'Healthcare', 'HIPAA'],
      metrics: [
        { text: '150k+ Active Users', icon: Users },
        { text: '4.8 App Store Rating', icon: Star },
        { text: '99.9% Uptime', icon: Shield }
      ],
      category: 'Mobile Development'
    },
    {
      title: 'Enterprise Cloud Migration',
      description: 'Successfully migrated legacy systems to AWS cloud infrastructure for a Fortune 500 company, reducing costs by 35%.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      tags: ['AWS', 'DevOps', 'Kubernetes', 'Docker'],
      metrics: [
        { text: '35% Cost Reduction', icon: TrendingUp },
        { text: 'Zero Downtime', icon: Clock },
        { text: '5x Performance Boost', icon: Zap }
      ],
      category: 'Cloud Solutions'
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

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Key Results:</h4>
                  {project.metrics.map((metric, idx) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={idx} className="flex items-center text-sm text-gray-600 group/metric hover:text-brand-blue transition-colors">
                        <div className="w-6 h-6 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center mr-3 group-hover/metric:scale-110 transition-transform">
                          <IconComponent size={12} className="text-white" />
                        </div>
                        {metric.text}
                      </div>
                    );
                  })}
                </div>

                <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 hover:shadow-lg">
                  View Case Study
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

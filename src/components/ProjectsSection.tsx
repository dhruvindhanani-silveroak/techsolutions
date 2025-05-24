
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      description: 'Complete overhaul of a major retail platform, resulting in 40% increase in conversion rates and improved user experience.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      metrics: ['40% Conversion Increase', '60% Load Time Reduction', '2M+ Users'],
      category: 'Web Development'
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Cross-platform mobile application for patient management and telemedicine consultations with 150k+ active users.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Firebase', 'Healthcare', 'HIPAA'],
      metrics: ['150k+ Active Users', '4.8 App Store Rating', '99.9% Uptime'],
      category: 'Mobile Development'
    },
    {
      title: 'Enterprise Cloud Migration',
      description: 'Successfully migrated legacy systems to AWS cloud infrastructure for a Fortune 500 company, reducing costs by 35%.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      tags: ['AWS', 'DevOps', 'Kubernetes', 'Docker'],
      metrics: ['35% Cost Reduction', 'Zero Downtime', '5x Performance Boost'],
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
            <Card key={index} className="group overflow-hidden border-0 tech-shadow hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold text-tech-gray group-hover:text-tech-blue transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-tech-light text-tech-blue px-2 py-1 rounded text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-tech-gray">Key Results:</h4>
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-tech-orange rounded-full mr-3"></span>
                      {metric}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TrendingUp, Users, Zap, Clock, Star, Shield, Filter, ExternalLink, Github, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Development', 'Cloud Solutions', 'AI/ML', 'Enterprise'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      description: 'Complete overhaul of a major retail platform, resulting in 40% increase in conversion rates and improved user experience.',
      fullDescription: 'A comprehensive redesign and development of a major e-commerce platform serving over 2 million users. The project involved modernizing the entire tech stack, implementing responsive design, optimizing performance, and enhancing the user experience. Key achievements include 40% increase in conversion rates, 60% reduction in load times, and improved accessibility standards.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      metrics: [
        { text: '40% Conversion Increase', icon: TrendingUp },
        { text: '60% Load Time Reduction', icon: Zap },
        { text: '2M+ Users', icon: Users }
      ],
      category: 'Web Development',
      status: 'Completed',
      duration: '6 months',
      client: 'RetailCorp Inc.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Redis'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      description: 'Cross-platform mobile application for patient management and telemedicine consultations with 150k+ active users.',
      fullDescription: 'A comprehensive mobile health platform that connects patients with healthcare providers through secure video consultations, appointment scheduling, and health record management. Built with React Native for cross-platform compatibility and integrated with HIPAA-compliant backend systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Firebase', 'Healthcare', 'HIPAA'],
      metrics: [
        { text: '150k+ Active Users', icon: Users },
        { text: '4.8 App Store Rating', icon: Star },
        { text: '99.9% Uptime', icon: Shield }
      ],
      category: 'Mobile Development',
      status: 'Completed',
      duration: '8 months',
      client: 'HealthTech Solutions',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js', 'PostgreSQL'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'Enterprise Cloud Migration',
      description: 'Successfully migrated legacy systems to AWS cloud infrastructure for a Fortune 500 company, reducing costs by 35%.',
      fullDescription: 'Led the complete migration of legacy on-premise infrastructure to AWS cloud for a Fortune 500 manufacturing company. The project involved containerizing applications, implementing CI/CD pipelines, setting up monitoring and logging, and ensuring zero-downtime migration.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      tags: ['AWS', 'DevOps', 'Kubernetes', 'Docker'],
      metrics: [
        { text: '35% Cost Reduction', icon: TrendingUp },
        { text: 'Zero Downtime', icon: Clock },
        { text: '5x Performance Boost', icon: Zap }
      ],
      category: 'Cloud Solutions',
      status: 'Completed',
      duration: '12 months',
      client: 'ManufactureCorp',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Prometheus'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning platform for real-time business intelligence and predictive analytics.',
      fullDescription: 'Developed an advanced analytics platform that uses machine learning algorithms to provide real-time business insights and predictive analytics. The system processes millions of data points daily and provides actionable insights through interactive dashboards.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      metrics: [
        { text: '90% Prediction Accuracy', icon: Star },
        { text: '10M+ Data Points', icon: TrendingUp },
        { text: 'Real-time Processing', icon: Zap }
      ],
      category: 'AI/ML',
      status: 'In Progress',
      duration: '9 months',
      client: 'DataTech Analytics',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'Apache Kafka', 'PostgreSQL'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 5,
      title: 'Financial Trading Platform',
      description: 'High-frequency trading platform with microsecond latency and advanced risk management.',
      fullDescription: 'Built a sophisticated trading platform capable of handling thousands of transactions per second with microsecond latency. The system includes advanced risk management, real-time market data processing, and compliance monitoring.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      tags: ['C++', 'React', 'WebSockets', 'Redis'],
      metrics: [
        { text: 'Microsecond Latency', icon: Zap },
        { text: '99.99% Uptime', icon: Shield },
        { text: '$100M+ Daily Volume', icon: TrendingUp }
      ],
      category: 'Enterprise',
      status: 'Completed',
      duration: '18 months',
      client: 'FinTech Capital',
      technologies: ['C++', 'React', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 6,
      title: 'Smart City IoT Platform',
      description: 'IoT platform for smart city management including traffic, energy, and environmental monitoring.',
      fullDescription: 'Comprehensive IoT platform that integrates various city systems including traffic management, energy distribution, and environmental monitoring. The platform processes data from thousands of sensors and provides city administrators with real-time insights.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      tags: ['IoT', 'Azure', 'Node.js', 'MongoDB'],
      metrics: [
        { text: '10,000+ Sensors', icon: Users },
        { text: '25% Energy Savings', icon: TrendingUp },
        { text: 'Real-time Monitoring', icon: Clock }
      ],
      category: 'Enterprise',
      status: 'In Progress',
      duration: '15 months',
      client: 'Smart City Initiative',
      technologies: ['Azure IoT', 'Node.js', 'MongoDB', 'React', 'Time Series DB'],
      links: {
        live: '#',
        github: '#'
      }
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-blue/5 via-white to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-tech-gray mb-6">
              Our <span className="gradient-text">Featured Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of successful digital transformations, innovative solutions, 
              and cutting-edge technologies that have helped businesses achieve their goals and 
              exceed their expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-xl p-2">
              <Filter className="w-5 h-5 text-gray-500 ml-2" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-brand-blue text-white shadow-lg' 
                        : 'text-gray-600 hover:text-brand-blue hover:bg-blue-50'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="group overflow-hidden border-0 bg-white hover:shadow-[0_0_40px_rgba(26,115,232,0.15),0_0_80px_rgba(52,168,83,0.1)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-brand-blue text-white shadow-lg"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-brand-green text-white' : 'bg-yellow-500 text-white'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-heading font-semibold text-gray-800 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    {project.metrics.slice(0, 2).map((metric, idx) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-5 h-5 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center mr-3">
                            <IconComponent size={10} className="text-white" />
                          </div>
                          {metric.text}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-heading text-brand-blue">
                            {project.title}
                          </DialogTitle>
                          <DialogDescription asChild>
                            <div className="space-y-6">
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Client</h4>
                                  <p className="text-gray-600">{project.client}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
                                  <p className="text-gray-600">{project.duration}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Status</h4>
                                  <Badge className={project.status === 'Completed' ? 'bg-brand-green' : 'bg-yellow-500'}>
                                    {project.status}
                                  </Badge>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Project Overview</h4>
                                <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Key Results</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  {project.metrics.map((metric, idx) => {
                                    const IconComponent = metric.icon;
                                    return (
                                      <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center mr-3">
                                          <IconComponent size={14} className="text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{metric.text}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech, idx) => (
                                    <Badge key={idx} variant="outline" className="text-sm">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex space-x-4 pt-4 border-t">
                                <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                    <Globe className="w-4 h-4 mr-2" />
                                    Live Demo
                                  </a>
                                </Button>
                                <Button variant="outline" asChild>
                                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" />
                                    Source Code
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    
                    <Button asChild size="sm" className="bg-brand-green hover:bg-brand-green/90 text-white">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 mb-4">No projects found in this category.</p>
              <Button onClick={() => setSelectedCategory('All')} className="bg-brand-blue hover:bg-brand-blue/90">
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              View Our Process
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

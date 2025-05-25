
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, ExternalLink, Github, Globe, CheckCircle, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from an API or database
  const project = {
    id: 1,
    title: '100Vigha – Real Estate Website',
    subtitle: 'A modern real estate platform built using React and Firebase.',
    description: 'A comprehensive real estate platform designed to connect property buyers with sellers through an intuitive and modern interface. The platform features advanced search capabilities, property management tools, and seamless user experience across all devices.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    timeline: 'Built in 3 weeks as a freelance client project',
    purpose: 'The primary goal was to create a user-friendly real estate platform that simplifies property search and listing management. The target audience includes property buyers, sellers, and real estate agents looking for a modern digital solution.',
    technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Vercel', 'Figma', 'TypeScript'],
    features: [
      'Property listing with advanced filters (price, location, type)',
      'Contact form for property inquiries with email notifications',
      'Responsive design optimized for mobile and desktop',
      'Admin dashboard for managing property listings',
      'Search functionality with autocomplete suggestions',
      'Light/Dark mode toggle for better user experience'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        title: 'Homepage View',
        description: 'Clean and modern homepage with featured properties'
      },
      {
        url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
        title: 'Property Listing',
        description: 'Comprehensive property listing with detailed information'
      },
      {
        url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
        title: 'Contact Page',
        description: 'User-friendly contact form for property inquiries'
      },
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        title: 'Admin Panel',
        description: 'Comprehensive admin dashboard for property management'
      }
    ],
    techStack: [
      {
        name: 'React.js',
        description: 'Chosen for its component-based architecture and reusability, allowing for efficient development and maintenance.'
      },
      {
        name: 'Firebase',
        description: 'Provided seamless backend integration with real-time database and authentication capabilities.'
      },
      {
        name: 'Tailwind CSS',
        description: 'Enabled rapid UI development with utility-first approach and consistent design system.'
      },
      {
        name: 'Vercel',
        description: 'Offered fast deployment and excellent performance optimization for React applications.'
      }
    ],
    challenges: [
      {
        challenge: 'Dynamic filtering of properties based on user input',
        solution: 'Implemented custom filtering logic using Firestore queries and React state management for real-time updates.'
      },
      {
        challenge: 'Ensuring responsiveness across devices',
        solution: 'Used Tailwind CSS utility classes for adaptive layouts and tested extensively on multiple devices.'
      },
      {
        challenge: 'Optimizing image loading performance',
        solution: 'Implemented lazy loading and image optimization techniques to improve page load speeds.'
      }
    ],
    lessons: [
      'Improved understanding of Firebase authentication and real-time database management',
      'Gained experience with responsive design using utility-first frameworks like Tailwind',
      'Mastered modular code structuring in React for better maintainability',
      'Enhanced client communication and requirement gathering skills'
    ],
    liveUrl: 'https://100vigha.vercel.app',
    githubUrl: 'https://github.com/yourusername/100vigha'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Button */}
      <div className="pt-24 pb-4">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/projects')}
            className="flex items-center text-gray-600 hover:text-brand-blue"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-green/10 p-8 md:p-12">
            <div className="absolute inset-0 opacity-20">
              <img 
                src={project.heroImage} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-tech-gray mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                {project.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-5 h-5 mr-2" />
                    View Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-tech-gray mb-8">Project Overview</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-brand-blue mb-2">Timeline</h3>
                <p className="text-gray-600">{project.timeline}</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-blue mb-2">Role</h3>
                <p className="text-gray-600">Full-Stack Developer</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-blue mb-2">Status</h3>
                <Badge className="bg-brand-green text-white">Completed</Badge>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {project.purpose}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Functionalities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-tech-gray mb-8">Features & Functionalities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-tech-gray mb-8 text-center">Screenshots Gallery</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.screenshots.map((screenshot, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <img 
                          src={screenshot.url} 
                          alt={screenshot.title}
                          className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                          <h3 className="font-semibold text-gray-800 mb-2">{screenshot.title}</h3>
                          <p className="text-gray-600 text-sm">{screenshot.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src={screenshot.url} 
                      alt={screenshot.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-tech-gray mb-8">Tech Stack Breakdown</h2>
            <div className="space-y-6">
              {project.techStack.map((tech, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{tech.name}</h3>
                        <p className="text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-tech-gray mb-8">Challenges & Solutions</h2>
            <div className="space-y-8">
              {project.challenges.map((item, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                        <h3 className="font-semibold text-gray-800">Challenge</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{item.challenge}</p>
                      <div className="flex items-center mb-3">
                        <CheckCircle className="w-5 h-5 text-brand-green mr-2" />
                        <h3 className="font-semibold text-gray-800">Solution</h3>
                      </div>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-tech-gray mb-8">Lessons Learned</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.lessons.map((lesson, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Lightbulb className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{lesson}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Interested in Similar Projects?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub Repo
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-blue"
              onClick={() => navigate('/projects')}
            >
              Back to Projects
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

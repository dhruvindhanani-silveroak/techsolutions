
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, ExternalLink, Github, Globe, CheckCircle, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Projects from '@/data/ProjectsDetails.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  // Mock project data - in a real app, this would come from an API or database
  const project = Projects.find((p) => String(p.slug) === id);

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
                {/* <Button asChild variant="outline" size="lg">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                </Button> */}
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

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green">
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
      </section> */}
      <Footer />
    </div>
  );
};

export default ProjectDetail;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Filter, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Web Development', 'Mobile Development'];

  const projects = [
    {
      id: 1,
      slug: '100vigha',
      title: '100Vigha – Real Estate Website',
      description: 'A modern real estate platform built using React and Firebase.',
      image: '/images/projects/project1.png',
      tags: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
      category: 'Web Development',
      status: 'Completed',
      links: {
        live: 'https://100vigha.com',
      }
    },
    {
      id: 2,
      slug: 'ozank-money-transfer',
      title: 'Ozank Money Transfer App',
      description: 'A secure mobile app for instant money transfers and payments.',
      image: '/images/projects/project2.png',
      tags: ['IOS', 'Android', 'Node.js', 'Docker', 'AWS', 'PostgreSQL', 'Socket.io'],
      category: 'Mobile Development',
      status: 'Completed',
      links: {
        live: 'https://ozank.com',
      }
    },
    {
      id: 3,
      slug: 'my-salon-club',
      title: 'My Salon Club',
      description: 'Complete salon management app for booking, payments, and customer management.',
      image: '/images/projects/project3.png',
      tags: ['React Native', 'Node.js', 'Docker', 'AWS', 'MySQL', 'Socket.io'],
      category: 'Mobile Development',
      status: 'Completed',
      links: {
        live: 'http://mysalon.club/'
      }
    },
    {
      id: 4,
      slug: 'we-are-makeup',
      title: 'We Are Makeup',
      description: 'digital hub for connecting, empowering, and growing the makeup industry.',
      image: '/images/projects/project4.png',
      tags: ['React Native', 'Node.js', 'Docker', 'AWS', 'MySQL', 'Socket.io'],
      category: 'Mobile Development',
      status: 'Completed',
      links: {
        live: 'https://wearemakeup.com/'
      }
    },
    {
      id: 5,
      slug: 'krushley-dating-platform',
      title: 'Krushley Dating Platform',
      description: 'An innovative dating platform that connects users through shared interests and activities.',
      image: '/images/projects/project5.png',
      tags: ['Flutter', 'Node.js', 'Docker', 'AWS', 'MySQL', 'Socket.io'],
      category: 'Mobile Development',
      status: 'Completed',
      duration: '5 months',
      client: 'FinTech Capital',
      technologies: ['Flutter', 'Node.js', 'Docker', 'AWS', 'MySQL', 'Socket.io'],
      links: {
        live: 'https://krushley.com/'
      }
    },
    {
      id: 6,
      slug: 'sportyze-kids-app',
      title: 'Sportyze Kids App',
      description: 'A comprehensive sports management app for kids, including scheduling, payments, and communication.',
      image: '/images/projects/project6.png',
      tags: ['Flutter', 'Node.js', 'MySQL', 'AWS', 'Socket.io'],
      category: 'Mobile Development',
      status: 'Completed',
      links: {
        live: 'https://sportyze.com/'
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
                    className={`rounded-lg transition-all duration-300 ${selectedCategory === category
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

                  <div className="flex space-x-2 pt-2">
                    <Button
                      variant="outline"
                      className="flex-1 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                      onClick={() => navigate(`/projects/${project.slug}`)}
                    >
                      View Project
                    </Button>

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
            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100" onClick={() => window.location.href = '/contact'}>
              Get Free Consultation
            </Button>
            {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              View Our Process
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Users, 
  Target, 
  Heart, 
  Lightbulb,
  Award,
  Globe,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Code,
  Palette,
  Smartphone,
  Database,
  Shield,
  Zap
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '39+', label: 'Projects Completed', icon: CheckCircle },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '24/7', label: 'Support Available', icon: Globe }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to deliver exceptional results that exceed expectations.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team is passionate about technology and committed to creating solutions that make a real difference for our clients.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring high-quality deliverables and outstanding user experiences.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in transparent communication and collaborative partnerships with our clients throughout the development process.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Kenil Patel',
      role: 'Founder & CEO',
      image: '/placeholder.svg',
      description: 'Tech visionary with a passion for building innovative software solutions that drive business success.',
      skills: ['Leadership', 'Project Management'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Yash Dholaria',
      role: 'Co-Founder & CMO',
      image: '/placeholder.svg',
      description: 'Marketing strategist with a focus on digital transformation, driving growth through innovative marketing solutions.',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sahil Gohil',
      role: 'React Native Developer',
      image: '/placeholder.svg',
      description: 'Experienced in building high-performance cross-platform mobile apps with React Native, focusing on seamless user experiences and robust functionality.',
      skills: ['React Native', 'JavaScript', 'Mobile Development'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Nirmal Patel',
      role: 'Backend Developer',
      image: '/placeholder.svg',
      description: 'Specialist in scalable backend systems, cloud architecture, and database optimization.',
      skills: ['Node.js', 'AWS', 'MongoDB', 'MySQL', 'PostgreSQL'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sanjay Shah',
      role: 'DevOps Engineer',
      image: '/placeholder.svg',
      description: 'Specialist in scalable backend systems, cloud architecture, and database optimization.',
      skills: ['AWS', 'Docker', 'CI/CD'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
  ];

  const technologies = [
    { name: 'React', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js', icon: Database, color: 'text-green-500' },
    { name: 'Flutter', icon: Smartphone, color: 'text-cyan-500' },
    { name: 'AWS', icon: Shield, color: 'text-orange-500' },
    { name: 'UI/UX', icon: Palette, color: 'text-pink-500' },
    { name: 'DevOps', icon: Zap, color: 'text-purple-500' }
  ];

  const milestones = [
    {
      year: 'Aug 2022',
      title: 'Humble Beginnings with a Bold Vision',
      description:
        'Two passionate friends, Kenil Patel and Yash Dholariya, launched TeckySoft with a single mobile app project and a tight-knit team of three. Focused on honesty, quality, and client-first thinking, we set out to create powerful digital solutions for real business challenges.',
    },
    {
      year: '2022–2023',
      title: 'Growing Through Every Challenge',
      description:
        'Every project brought new hurdles—and we welcomed them. With each client, we refined our process, improved our skills, and adapted quickly, ensuring every client experience was better than the last.',
    },
    {
      year: '2023–2024',
      title: 'Building a Young, Creative & Committed Team',
      description:
        'We grew our team with dynamic, skilled, and innovative professionals. Our collaborative culture empowers each member to contribute boldly and deliver results that exceed expectations.',
    },
    {
      year: '2025',
      title: 'Global Reach with 39+ Projects Delivered',
      description:
        'By 2025, we’ve proudly delivered 39+ successful projects globally, covering industries from healthcare to e-commerce, startups to enterprises. Every solution receives our energy, precision, and dedication.',
    },
    {
      year: 'The Road Ahead',
      title: 'Innovation, Integrity, and Impact',
      description:
        'Our journey is just getting started. As we scale, we remain grounded in our values—innovation, integrity, and impact. We’re your long-term digital partners, committed to building technology that grows your business and earns your trust.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100">
              About TeckySoft
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-800 mb-6">
              Transforming Ideas into <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="text-xl text-gray-600 font-body leading-relaxed mb-8">
              We are a passionate team of technology enthusiasts dedicated to creating innovative software solutions that drive business growth and enhance user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl px-8 py-3 font-medium"
              >
                Work With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/projects'}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl px-8 py-3 font-medium"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-heading">{stat.number}</div>
                  <div className="text-gray-600 font-body">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
                Our Story
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
                Building the Future, <span className="gradient-text">One Project at a Time</span>
              </h2>
              <p className="text-lg text-gray-600 font-body leading-relaxed mb-6">
                Founded in 2022, TeckySoft began as a small team with a big vision: to democratize access to cutting-edge technology solutions for businesses of all sizes. What started as a passion project has evolved into a trusted technology partner for companies worldwide.
              </p>
              <p className="text-lg text-gray-600 font-body leading-relaxed mb-8">
                Our journey has been marked by continuous learning, innovation, and an unwavering commitment to client success. We've had the privilege of working with startups, SMEs, and enterprise clients, helping them leverage technology to achieve their business objectives with undefeated price in industry.
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={index} className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm">
                      <IconComponent className={`w-5 h-5 ${tech.color} mr-2`} />
                      <span className="text-gray-700 font-medium text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl aspect-square flex items-center justify-center">
                <img 
                  src="https://img.freepik.com/free-vector/people-talking_53876-25461.jpg" 
                  alt="TeckySoft Team"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-brand-blue mb-1">39+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
              Our Values
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              What <span className="gradient-text">Drives Us</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Our core values guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-2xl">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading font-semibold text-gray-800 group-hover:text-brand-blue transition-colors">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-body leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              <span className="gradient-text">Milestones</span> & Achievements
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              A Journey Built on Passion, Innovation & Trust
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue to-brand-green"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-brand-blue rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} ml-16 md:ml-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-card">
                      <Badge className="mb-3 bg-brand-blue text-white">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 font-body">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
              Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Our diverse team of talented professionals brings together expertise in technology, design, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden">
                <CardHeader className="text-center pb-4">
                  {/* <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  <CardTitle className="text-lg font-heading font-semibold text-gray-800 group-hover:text-brand-blue transition-colors">
                    {member.name}
                  </CardTitle>
                  <p className="text-brand-blue font-medium text-sm">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 font-body text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Start Your <span className="text-yellow-300">Next Project?</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-body">
              Let's collaborate to bring your vision to life. Our team is ready to help you achieve your technology goals and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl min-w-[220px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                onClick={() => window.location.href = '/services'}
                className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl min-w-[220px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

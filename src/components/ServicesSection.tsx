
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Smartphone, Cloud, ChartBar, Shield, Palette } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies for optimal performance and user experience.',
      icon: Laptop,
      features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      icon: Smartphone,
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with enhanced security, scalability, and cost-efficiency.',
      icon: Cloud,
      features: ['AWS & Azure', 'Database Migration', 'DevOps Setup', 'Security Implementation'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      icon: Palette,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      icon: ChartBar,
      features: ['Business Intelligence', 'Data Visualization', 'Machine Learning', 'Predictive Analytics'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving digital threats.',
      icon: Shield,
      features: ['Security Audits', 'Threat Assessment', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
            Comprehensive <span className="gradient-text">IT Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
            We provide end-to-end technology services that help businesses thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-gray-800 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed font-body">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 font-body">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-card">
            <div className="text-3xl font-bold text-brand-blue mb-2">500+</div>
            <div className="text-gray-600 font-body">Projects Delivered</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-card">
            <div className="text-3xl font-bold text-brand-green mb-2">98%</div>
            <div className="text-gray-600 font-body">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-card">
            <div className="text-3xl font-bold text-brand-blue mb-2">5+</div>
            <div className="text-gray-600 font-body">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-card">
            <div className="text-3xl font-bold text-brand-green mb-2">24/7</div>
            <div className="text-gray-600 font-body">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

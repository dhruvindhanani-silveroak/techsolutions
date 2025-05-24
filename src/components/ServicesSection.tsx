
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies for optimal performance and user experience.',
      icon: '🌐',
      features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      icon: '📱',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with enhanced security, scalability, and cost-efficiency.',
      icon: '☁️',
      features: ['AWS & Azure', 'Database Migration', 'DevOps Setup', 'Security Implementation']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      icon: '📊',
      features: ['Business Intelligence', 'Data Visualization', 'Machine Learning', 'Predictive Analytics']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving digital threats.',
      icon: '🔒',
      features: ['Security Audits', 'Threat Assessment', 'Compliance', 'Incident Response']
    }
  ];

  return (
    <section id="services" className="py-20 bg-tech-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-tech-gray mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 tech-shadow bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-heading font-semibold text-tech-gray group-hover:text-tech-blue transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-tech-teal rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

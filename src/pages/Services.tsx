
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { 
  Laptop, 
  Smartphone, 
  Cloud, 
  ChartBar, 
  Shield, 
  Palette,
  Search,
  FileText,
  Brush,
  Code,
  TestTube,
  Rocket,
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: Laptop,
      description: 'Create powerful, scalable web applications that drive business growth and enhance user engagement.',
      features: [
        'Custom web application development using modern frameworks',
        'E-commerce platforms with secure payment integration',
        'Progressive Web Apps (PWAs) for enhanced mobile experience',
        'Content Management Systems (CMS) implementation',
        'API development and third-party integrations',
        'Websites maintenance and support'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'Native iOS and Android app development',
        'Cross-platform solutions using React Native and Flutter',
        'Mobile app UI/UX design and optimization',
        'App Store and Google Play deployment',
        'Mobile app maintenance and updates',
        'Mobile app security and performance optimization'
      ],
      color: 'from-green-500 to-green-600'
    },
    // {
    //   title: 'Cloud Solutions',
    //   icon: Cloud,
    //   description: 'Migrate to the cloud and leverage scalable infrastructure for improved performance and cost efficiency.',
    //   features: [
    //     'Cloud migration strategy and implementation',
    //     'AWS, Azure, and Google Cloud Platform services',
    //     'DevOps and CI/CD pipeline setup',
    //     'Cloud security and compliance management',
    //     'Serverless architecture and microservices'
    //   ],
    //   color: 'from-purple-500 to-purple-600'
    // },
    {
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Design intuitive and engaging user interfaces that enhance customer satisfaction and conversion rates.',
      features: [
        'User research and personas development',
        'Wireframing and prototyping',
        'Visual design and brand identity',
        'Usability testing and optimization',
        'Design system creation and documentation'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    // {
    //   title: 'Data Analytics',
    //   icon: ChartBar,
    //   description: 'Transform raw data into actionable insights that drive informed business decisions and growth.',
    //   features: [
    //     'Business intelligence dashboard development',
    //     'Data visualization and reporting tools',
    //     'Machine learning and predictive analytics',
    //     'Data warehouse design and implementation',
    //     'Real-time analytics and monitoring systems'
    //   ],
    //   color: 'from-yellow-500 to-yellow-600'
    // },
    // {
    //   title: 'Cybersecurity',
    //   icon: Shield,
    //   description: 'Protect your digital assets with comprehensive security solutions and risk management strategies.',
    //   features: [
    //     'Security audits and vulnerability assessments',
    //     'Penetration testing and threat modeling',
    //     'Compliance management (GDPR, HIPAA, SOC 2)',
    //     'Security monitoring and incident response',
    //     'Employee security training and awareness'
    //   ],
    //   color: 'from-red-500 to-red-600'
    // }
  ];

  const processSteps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We analyze your business requirements, target audience, and technical needs to understand your vision and goals.'
    },
    {
      icon: FileText,
      title: 'Planning',
      description: 'Our team creates a detailed project roadmap, timeline, and technical specifications to ensure successful delivery.'
    },
    {
      icon: Brush,
      title: 'Design',
      description: 'We craft intuitive user interfaces and experiences that align with your brand and user expectations.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our experienced developers build your solution using best practices and cutting-edge technologies.'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Comprehensive quality assurance ensures your product is bug-free, secure, and performs optimally.'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'We launch your solution with minimal downtime and provide training for your team.'
    },
    {
      icon: Headphones,
      title: 'Support',
      description: 'Ongoing maintenance, updates, and technical support keep your solution running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100">
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-800 mb-6">
              Comprehensive <span className="gradient-text">Technology Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
              From concept to deployment, we provide end-to-end technology solutions that help businesses thrive in the digital age. Our expert team delivers innovative, scalable, and secure solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-[0_0_40px_rgba(26,115,232,0.15)] transition-all duration-300 hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading font-semibold text-gray-800 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed font-body">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 font-body">
                          <CheckCircle className="w-4 h-4 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
              Our Process
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              How We <span className="gradient-text">Deliver Success</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Our proven development methodology ensures transparent communication, quality deliverables, and successful project outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-brand-green flex items-center justify-center text-brand-green font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-body">
              Let's discuss your project requirements and create a customized solution that drives growth, efficiency, and innovation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl min-w-[220px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold rounded-xl min-w-[220px] transition-all duration-300"
              >
                Schedule Consultation
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

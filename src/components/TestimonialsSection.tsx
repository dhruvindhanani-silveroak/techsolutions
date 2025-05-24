
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "TechSolutions transformed our entire digital infrastructure. Their cloud migration strategy reduced our operational costs by 35% while improving system performance dramatically. The team's expertise and professionalism exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CTO",
      company: "Innovation Corp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      quote: "The mobile app they developed for our healthcare platform has been a game-changer. With over 150,000 active users and a 4.8-star rating, it's clear that TechSolutions understands both technology and user experience.",
      name: "Dr. Michael Chen",
      position: "Founder & CEO",
      company: "HealthFirst Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      quote: "Working with TechSolutions on our e-commerce platform redesign was exceptional. They delivered a 40% increase in conversion rates and significantly improved our user engagement. Highly recommended for any digital transformation project.",
      name: "Emily Rodriguez",
      position: "Head of Digital Marketing",
      company: "RetailPro Inc",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-tech-blue to-tech-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            What Our <span className="text-tech-orange">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped transform through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 tech-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-tech-gray">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-tech-blue font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-white">
              <div className="text-3xl font-bold text-tech-orange">500+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-tech-orange">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-tech-orange">5+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-tech-orange">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

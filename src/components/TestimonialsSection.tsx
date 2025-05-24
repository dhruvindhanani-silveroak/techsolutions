
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

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
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Don't just take our word for it. Here's what businesses say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-brand-blue" />
                </div>

                {/* Rating */}
                <div className="flex mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-8 leading-relaxed font-body">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 font-heading">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-body">{testimonial.position}</p>
                    <p className="text-sm text-brand-blue font-medium font-body">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2 font-heading">500+</div>
              <div className="text-gray-600 font-body">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2 font-heading">98%</div>
              <div className="text-gray-600 font-body">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2 font-heading">50+</div>
              <div className="text-gray-600 font-body">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2 font-heading">24/7</div>
              <div className="text-gray-600 font-body">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

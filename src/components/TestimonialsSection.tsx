
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "TeckySoft delivered a powerful, reliable solution that completely streamlined our global money transfer operations. Their platform's real-time tracking, multi-currency capabilities, and top-tier security have given our users confidence and ease like never before. The intuitive interface is the icing on the cake. Truly exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CTO",
      company: "OZANK Money Transfer",
      rating: 5
    },
    {
      quote: "TeckySoft completely revolutionized how we manage our salon. Their platform made appointment scheduling effortless, payments secure, and customer tracking incredibly efficient. It’s streamlined every aspect of our daily operations. The user-friendly design has been a hit with both our staff and clients. Truly exceeded our expectations in every way!",
      name: "Jessica Smith",
      position: "Founder & CEO",
      company: "My Salon Club",
      rating: 5
    },
    {
      quote: "Working with TeckySoft on this app has been a game-changer. Managing our kids' sports is so much easier now—scheduling, payments, messaging with coaches—everything’s in one place. It’s super easy to use and saves us so much time. Honestly, we can’t imagine going back to how things were before!",
      name: "Emily Rodriguez",
      position: "Head of Digital Marketing",
      company: "RetailPro Inc",
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
      </div>
    </section>
  );
};

export default TestimonialsSection;

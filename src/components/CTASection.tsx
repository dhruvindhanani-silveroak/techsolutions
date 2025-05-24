
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-tech-light">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-tech-blue to-tech-teal border-0 tech-shadow">
          <CardContent className="p-8 md:p-12 text-center text-white">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Ready to Transform <span className="text-tech-orange">Your Business?</span>
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our innovative IT solutions can drive your business forward. 
                Get a free consultation and discover the possibilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 text-lg font-semibold min-w-[200px]"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-tech-blue px-8 py-3 text-lg font-semibold min-w-[200px]"
                >
                  Download Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-2xl mb-2">📞</div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm opacity-90">+1 (555) 123-4567</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-2xl mb-2">✉️</div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm opacity-90">contact@techsolutions.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm opacity-90">123 Tech Street, Innovation City</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;

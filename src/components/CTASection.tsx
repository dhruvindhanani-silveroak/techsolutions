
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-6xl mx-auto bg-gradient-to-r from-brand-blue to-brand-green border-0 rounded-3xl overflow-hidden shadow-card-hover">
          <CardContent className="p-8 md:p-16 text-center text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
            
            <div className="relative z-10 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Ready to Transform <span className="text-yellow-300">Your Business?</span>
              </h2>
              <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed font-body">
                Let's discuss how our innovative IT solutions can drive your business forward. 
                Get a free consultation and discover the possibilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-white text-brand-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl min-w-[240px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold rounded-xl min-w-[240px] transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3 font-heading text-lg">Call Us</h3>
                  <p className="text-white/90 font-body">+1 (555) 123-4567</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3 font-heading text-lg">Email Us</h3>
                  <p className="text-white/90 font-body">contact@techsolutions.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3 font-heading text-lg">Visit Us</h3>
                  <p className="text-white/90 font-body">123 Tech Street, Innovation City</p>
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

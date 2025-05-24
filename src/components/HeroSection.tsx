
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/90 to-tech-teal/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Innovative IT Solutions
            <span className="block text-tech-orange">for Your Business</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology solutions. We deliver scalable, secure, and innovative IT services that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-3 text-lg font-semibold min-w-[200px]"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-tech-blue px-8 py-3 text-lg font-semibold min-w-[200px]"
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-tech-orange/20 rounded-lg animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-tech-teal/20 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;

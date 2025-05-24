
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-tech-blue via-brand-blue to-tech-teal flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-brand-green/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20 shadow-lg">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
            Trusted by 500+ companies worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-white">
            Innovative IT Solutions
            <span className="block bg-gradient-to-r from-brand-green to-white bg-clip-text text-transparent">for Your Business</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed text-white/90 max-w-4xl mx-auto font-body">
            Transform your business with cutting-edge technology solutions. We deliver scalable, secure, and innovative IT services that drive growth and efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl min-w-[220px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl min-w-[220px] transition-all duration-300 hover:border-white hover:bg-white hover:text-brand-blue backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 text-white font-medium text-sm md:text-base border border-white/20">Microsoft</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 text-white font-medium text-sm md:text-base border border-white/20">Google</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 text-white font-medium text-sm md:text-base border border-white/20">Amazon</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 text-white font-medium text-sm md:text-base border border-white/20">IBM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-2xl animate-pulse hidden lg:block backdrop-blur-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-brand-green/20 rounded-xl animate-pulse hidden lg:block backdrop-blur-sm"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/20 rounded-full animate-pulse hidden lg:block backdrop-blur-sm"></div>
    </section>
  );
};

export default HeroSection;

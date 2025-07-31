
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-brand-green/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
            Trusted by 500+ companies worldwide
          </div> */}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-gray-800">
            Innovative IT Solutions
            <span className="block gradient-text">for Your Business</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed text-gray-600 max-w-4xl mx-auto font-body">
            Transform your business with cutting-edge technology solutions. We deliver scalable, secure, and innovative IT services that drive growth and efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/contact'}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg font-semibold rounded-xl min-w-[220px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl min-w-[220px] transition-all duration-300 hover:border-brand-blue hover:text-brand-blue"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button> */}
          </div>

          {/* Social Proof */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-60">
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-medium">Microsoft</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-medium">Google</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-medium">Amazon</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-medium">IBM</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-brand-blue/10 rounded-2xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-brand-green/10 rounded-xl animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-100 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;

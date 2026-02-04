import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <TrendingDown className="w-4 h-4 text-caramel" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              From trading floors to coffee pours
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-comic text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Bear Market?
            <br />
            <span className="text-caramel">Brew Market.</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Where crypto dreams meet reality, and reality serves a damn good latte. 
            Join the community of traders who pivoted to pouring.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link to="/careers">
              <Button variant="hero" size="xl" className="group">
                Start Your Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#story">
              <Button variant="heroSecondary" size="xl">
                Read Our Story
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div>
              <div className="font-comic text-3xl sm:text-4xl font-bold text-primary-foreground">847</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Traders Pivoted</div>
            </div>
            <div>
              <div className="font-comic text-3xl sm:text-4xl font-bold text-primary-foreground">12K+</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Lattes Served</div>
            </div>
            <div>
              <div className="font-comic text-3xl sm:text-4xl font-bold text-primary-foreground">$0</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Crypto Holdings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="careers" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-caramel rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-8">
            <Sparkles className="w-8 h-8 text-caramel" />
          </div>

          {/* Heading */}
          <h2 className="font-comic text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Brew Your Future?
          </h2>

          {/* Description */}
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10">
            Leave the volatility behind. Join a community that values consistency, 
            craftsmanship, and the simple joy of a perfectly pulled shot.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Start Your Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroSecondary" size="xl">
              Visit a Location
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/50 text-sm mb-4">
              Join hundreds who've already made the switch
            </p>
            <div className="flex items-center justify-center gap-8 text-primary-foreground/70">
              <div className="text-center">
                <div className="font-comic text-2xl font-bold">98%</div>
                <div className="text-xs">Job Placement</div>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <div className="font-comic text-2xl font-bold">4.9★</div>
                <div className="text-xs">Trainee Rating</div>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <div className="font-comic text-2xl font-bold">12 wks</div>
                <div className="text-xs">Program Length</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

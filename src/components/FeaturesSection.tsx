import { Coffee, Users, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Coffee,
    title: 'Premium Coffee',
    description: 'Artisanal brews crafted by former traders who know the value of patience and precision.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'A safe space for crypto survivors to commiserate, connect, and caffeinate together.',
  },
  {
    icon: BookOpen,
    title: 'Bear Market Wisdom',
    description: 'Learn from those who\'ve been through the crash. Our menu tells stories of resilience.',
  },
  {
    icon: Briefcase,
    title: 'Career Transition',
    description: 'Turn your chart-watching skills into coffee-making mastery. The pivot is real.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-caramel font-medium text-sm uppercase tracking-wider mb-4 block">
            Why Bearista?
          </span>
          <h2 className="font-comic text-4xl md:text-5xl font-bold text-foreground mb-6">
            More Than Just Coffee
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We're not just serving drinks. We're rebuilding lives, one espresso shot at a time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-sm card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-caramel/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-caramel" />
              </div>

              {/* Content */}
              <h3 className="font-comic text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-caramel font-medium text-sm group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

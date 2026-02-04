import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  Clock, 
  Moon, 
  TrendingUp, 
  Coffee, 
  ChevronDown,
  MapPin,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import ApplicationModal from '@/components/ApplicationModal';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface JobPosition {
  id: string;
  title: string;
  type: string;
  location: string;
  icon: React.ElementType;
  description: string;
  requirements: string[];
  learnings: string[];
  isPaid: boolean;
}

const positions: JobPosition[] = [
  {
    id: 'junior-bearista',
    title: 'Junior Bearista',
    type: 'Night Shift',
    location: 'All Locations',
    icon: Moon,
    description: 'Join our team as a Junior Bearista and learn the art of brewing while the charts sleep. Perfect for those used to watching 3am candles.',
    requirements: [
      'Experience staring at screens for 8+ hours',
      'Ability to handle sudden liquidations (of espresso)',
      'Strong hands (for carrying trays, not holding bags)',
      'Comfortable with red (aprons)',
    ],
    learnings: [
      'Latte art fundamentals',
      'How to actually make money',
      'Customer service without Discord',
      'The joy of guaranteed hourly wages',
    ],
    isPaid: true,
  },
  {
    id: 'copium-supply-manager',
    title: 'Copium Supply Manager',
    type: 'Full-Time',
    location: 'Main Roastery',
    icon: Briefcase,
    description: 'Manage our carefully curated supply of hope, denial, and premium coffee beans. Previous experience in "trust me bro" projects preferred.',
    requirements: [
      'Expert-level rationalization skills',
      'Ability to say "it\'s just a dip" convincingly',
      'Advanced Excel (for calculating paper losses)',
      'At least 3 failed investment theses',
    ],
    learnings: [
      'Inventory management (actual goods, not NFTs)',
      'Supply chain that actually exists',
      'How to read financial statements',
      'Real-world logistics',
    ],
    isPaid: true,
  },
  {
    id: 'latte-art-specialist',
    title: 'Latte Art Specialist',
    type: 'Part-Time',
    location: 'Creative Labs',
    icon: Sparkles,
    description: 'Turn your chart-drawing skills into something beautiful. Training provided for those who can already read candlesticks.',
    requirements: [
      'Steady hands (from holding through dips)',
      'Pattern recognition skills',
      'Ability to see shapes in chaos',
      'Previously believed in "technical analysis"',
    ],
    learnings: [
      'Heart, tulip, and rosetta designs',
      'Art that people actually appreciate',
      'Skills that transfer to the real world',
      'Free-pour techniques',
    ],
    isPaid: true,
  },
  {
    id: 'chart-watcher',
    title: 'Chart Watcher',
    type: 'Break Room Only',
    location: 'All Locations',
    icon: TrendingUp,
    description: 'Can\'t fully let go? We get it. Watch charts during your breaks only. One screen. No leverage. It\'s called balance.',
    requirements: [
      'Acknowledge you have a problem',
      'Promise to only check on breaks',
      'Accept that it\'s "just for fun now"',
      'Able to close TradingView when asked',
    ],
    learnings: [
      'Self-control',
      'Work-life balance',
      'The charts will be there tomorrow',
      'Therapy is also available',
    ],
    isPaid: true,
  },
  {
    id: 'bull-market-intern',
    title: 'Bull Market Intern',
    type: 'Unpaid',
    location: 'TBD (Next Cycle)',
    icon: Coffee,
    description: 'This position opens during the next bull run. Requirements: unbridled optimism, belief in "this time is different," and diamond hands.',
    requirements: [
      'Unshakeable faith in number go up',
      'Twitter account with rocket emojis',
      'At least 3 "we\'re so early" tweets',
      'Ability to ignore all warning signs',
    ],
    learnings: [
      'How to make the same mistakes again',
      'The cycle never ends',
      'Hope springs eternal',
      'This time is definitely different',
    ],
    isPaid: false,
  },
];

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-caramel font-medium text-sm uppercase tracking-wider mb-4 block">
              Join the Team
            </span>
            <h1 className="font-comic text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Careers at Bearista
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Real jobs. Real wages. Real coffee. No tokens, no vesting schedules, no rugpulls.
            </p>
          </div>
        </section>

        {/* Positions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {positions.map((job) => (
                <Collapsible
                  key={job.id}
                  open={expandedJob === job.id}
                  onOpenChange={(open) => setExpandedJob(open ? job.id : null)}
                >
                  <div className={cn(
                    'bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300',
                    expandedJob === job.id ? 'shadow-lg border-caramel/30' : 'shadow-sm hover:shadow-md'
                  )}>
                    {/* Job Header */}
                    <CollapsibleTrigger className="w-full">
                      <div className="p-6 flex items-center gap-4 text-left">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                          <job.icon className="w-6 h-6 text-caramel" />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-comic text-xl font-bold text-foreground">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            {!job.isPaid && (
                              <span className="bg-caramel/10 text-caramel text-xs font-medium px-2 py-1 rounded-full">
                                Hope-Based Compensation
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Expand Icon */}
                        <ChevronDown className={cn(
                          'w-5 h-5 text-muted-foreground transition-transform duration-300',
                          expandedJob === job.id && 'rotate-180'
                        )} />
                      </div>
                    </CollapsibleTrigger>

                    {/* Expanded Content */}
                    <CollapsibleContent>
                      <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
                        {/* Description */}
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        {/* Requirements & Learnings */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-comic text-lg font-bold text-foreground mb-3">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-caramel mt-1">•</span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-comic text-lg font-bold text-foreground mb-3">
                              What You'll Learn
                            </h4>
                            <ul className="space-y-2">
                              {job.learnings.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-caramel mt-1">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-4">
                          <Button
                            variant="cta"
                            size="lg"
                            onClick={() => handleApply(job)}
                            className="w-full sm:w-auto"
                          >
                            Apply for {job.title}
                          </Button>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16 p-8 bg-secondary/50 rounded-2xl max-w-2xl mx-auto">
              <h3 className="font-comic text-2xl font-bold text-foreground mb-3">
                Don't see the right fit?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate people who've survived at least one market cycle.
              </p>
              <Button variant="outline" size="lg" onClick={() => { setSelectedJob(null); setIsModalOpen(true); }}>
                Send General Application
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob?.title || 'General Application'}
      />
    </div>
  );
};

export default Careers;

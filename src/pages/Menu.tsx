import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Coffee, Snowflake, Flame, TrendingDown, AlertTriangle, Ban, Sparkles, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from 'sonner';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: React.ElementType;
  tooltip: string;
  soldOut?: boolean;
  category: 'espresso' | 'cold' | 'specialty';
}

const menuItems: MenuItem[] = [
  {
    id: 'iced-copium',
    name: 'Iced Copium',
    description: 'Cold comfort for long bear markets. Served over ice with a shot of denial.',
    price: '$6.50',
    icon: Snowflake,
    tooltip: 'Best enjoyed while checking your portfolio',
    category: 'cold',
  },
  {
    id: 'rug-pull-roast',
    name: 'Rug Pull Roast',
    description: 'Dark, bitter, and impossible to forget. Just like that one project.',
    price: '$5.00',
    icon: Flame,
    tooltip: 'Gone before you know it',
    category: 'espresso',
  },
  {
    id: 'leverage-latte',
    name: 'Leverage Latte',
    description: 'Smooth at first, dangerous after. 10x foam, liquidation risk.',
    price: '$7.00',
    icon: AlertTriangle,
    tooltip: 'Not financial advice',
    category: 'specialty',
  },
  {
    id: 'capitulation-cappuccino',
    name: 'Capitulation Cappuccino',
    description: 'When you finally let go. Silky smooth surrender in every sip.',
    price: '$6.00',
    icon: TrendingDown,
    tooltip: 'The taste of acceptance',
    category: 'espresso',
  },
  {
    id: 'hodl-hot-chocolate',
    name: 'HODL Hot Chocolate',
    description: 'Sweet, warm, and comforting. Diamond hands not required.',
    price: '$5.50',
    icon: Sparkles,
    tooltip: 'We never sell... the recipe',
    category: 'specialty',
  },
  {
    id: 'fomo-frappe',
    name: 'FOMO Frappé',
    description: 'Blended cold brew with a hint of regret. Everyone else is ordering it.',
    price: '$7.50',
    icon: Snowflake,
    tooltip: 'You don\'t want to miss this one',
    category: 'cold',
  },
  {
    id: 'pump-and-dump-pour',
    name: 'Pump & Dump Pour Over',
    description: 'Starts strong, ends quick. Single origin from "somewhere trustworthy."',
    price: '$6.00',
    icon: Coffee,
    tooltip: 'Early adopters get the best sips',
    category: 'specialty',
  },
  {
    id: 'bull-run',
    name: 'Bull Run',
    description: 'The legendary seasonal blend. Golden, unstoppable, and full of promise.',
    price: '$99.00',
    icon: Ban,
    tooltip: 'Check back next cycle',
    soldOut: true,
    category: 'specialty',
  },
];

const categories = [
  { id: 'all', label: 'All Drinks' },
  { id: 'espresso', label: 'Espresso' },
  { id: 'cold', label: 'Cold Drinks' },
  { id: 'specialty', label: 'Specialty' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToOrder = (item: MenuItem) => {
    if (item.soldOut) {
      toast.error("Sorry, that's been unavailable since 2021", {
        description: "Check back next bull run!",
      });
    } else {
      toast.success(`${item.name} added to your order!`, {
        description: "Just kidding. This is a meme café.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-caramel font-medium text-sm uppercase tracking-wider mb-4 block">
              Our Menu
            </span>
            <h1 className="font-comic text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Drinks for the Diamond-Handed
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Each cup tells a story of market cycles, missed pumps, and the sweet taste of moving on.
            </p>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'px-6 py-3 rounded-full font-medium transition-all duration-300',
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <TooltipProvider>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      'group relative bg-card rounded-2xl p-6 border border-border transition-all duration-300',
                      hoveredItem === item.id ? 'shadow-lg -translate-y-1 border-caramel/30' : 'shadow-sm',
                      item.soldOut && 'opacity-75'
                    )}
                  >
                    {/* Sold Out Badge */}
                    {item.soldOut && (
                      <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
                        SOLD OUT
                      </div>
                    )}

                    {/* Icon */}
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300',
                      item.soldOut ? 'bg-muted' : 'bg-secondary group-hover:bg-caramel/10'
                    )}>
                      <item.icon className={cn(
                        'w-6 h-6',
                        item.soldOut ? 'text-muted-foreground' : 'text-caramel'
                      )} />
                    </div>

                    {/* Content */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className={cn(
                        'font-comic text-xl font-bold',
                        item.soldOut ? 'text-muted-foreground' : 'text-foreground'
                      )}>
                        {item.name}
                      </h3>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="p-1 text-muted-foreground hover:text-caramel transition-colors">
                            <Info className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-comic text-sm">{item.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <p className={cn(
                      'text-sm leading-relaxed mb-4',
                      item.soldOut ? 'text-muted-foreground/70' : 'text-muted-foreground'
                    )}>
                      {item.description}
                    </p>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className={cn(
                        'font-comic text-xl font-bold',
                        item.soldOut ? 'text-muted-foreground line-through' : 'text-foreground'
                      )}>
                        {item.price}
                      </span>
                      <Button
                        variant={item.soldOut ? 'outline' : 'cta'}
                        size="sm"
                        onClick={() => handleAddToOrder(item)}
                        disabled={item.soldOut}
                        className={item.soldOut ? 'opacity-50 cursor-not-allowed' : ''}
                      >
                        {item.soldOut ? 'Unavailable' : 'Add to Order'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TooltipProvider>

            {/* Disclaimer */}
            <div className="text-center mt-12 text-muted-foreground text-sm">
              <p className="font-comic">* Prices are not financial advice. DYOR on your drink order.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;

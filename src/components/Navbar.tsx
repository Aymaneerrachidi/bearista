import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Careers', href: '#careers' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-navbar py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={cn(
            'flex items-center gap-2 transition-colors duration-300',
            isScrolled ? 'text-primary' : 'text-primary-foreground'
          )}
        >
          <Coffee className="w-8 h-8" />
          <span className="font-comic text-2xl font-bold tracking-tight">
            Bearista
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'relative px-4 py-2 font-medium transition-all duration-300 nav-link-underline',
                isScrolled
                  ? 'text-foreground/70 hover:text-primary'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant={isScrolled ? 'cta' : 'hero'}
            size="default"
            className={cn(
              isScrolled
                ? ''
                : 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6'
            )}
          >
            Start Your Journey
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors duration-300',
            isScrolled
              ? 'text-foreground hover:bg-secondary'
              : 'text-primary-foreground hover:bg-primary-foreground/10'
          )}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-background shadow-lg overflow-hidden transition-all duration-500 ease-out',
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg font-medium transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="lg" className="mt-4">
            Start Your Journey
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

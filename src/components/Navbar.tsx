import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Our Story', href: '/#story' },
  { label: 'Menu', href: '/menu' },
  { label: 'Careers', href: '/careers' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages, navbar should always be solid
  const showSolidNav = isScrolled || !isHomePage;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        showSolidNav
          ? 'bg-background/95 backdrop-blur-md shadow-navbar py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'flex items-center transition-colors duration-300',
            showSolidNav ? 'text-primary' : 'text-primary-foreground'
          )}
        >
          <img src="/images/logo.PNG" alt="Bearista" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith('/#');
            const isActive = link.href === location.pathname;
            
            return isExternal ? (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 font-medium transition-all duration-300 nav-link-underline',
                  showSolidNav
                    ? 'text-foreground/70 hover:text-primary'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                )}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  'relative px-4 py-2 font-medium transition-all duration-300 nav-link-underline',
                  showSolidNav
                    ? isActive 
                      ? 'text-primary' 
                      : 'text-foreground/70 hover:text-primary'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://x.com/i/communities/2019223482295320780"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-2 rounded-lg transition-colors duration-300',
              showSolidNav
                ? 'text-foreground/70 hover:text-primary hover:bg-secondary'
                : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
            )}
          >
            <img src="/images/x logo.png" alt="X" className="w-5 h-5" />
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-2 rounded-lg transition-colors duration-300',
              showSolidNav
                ? 'text-foreground/70 hover:text-primary hover:bg-secondary'
                : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
            )}
          >
            <img src="/images/dexscreener logo.png" alt="Dexscreener" className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/careers">
            <Button
              variant={showSolidNav ? 'cta' : 'hero'}
              size="default"
              className={cn(
                !showSolidNav && 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6'
              )}
            >
              Start Your Journey
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors duration-300',
            showSolidNav
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
          {navLinks.map((link, index) => {
            const isExternal = link.href.startsWith('/#');
            
            return isExternal ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg font-medium transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg font-medium transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Social Icons Mobile */}
          <div className="flex items-center gap-3 mt-4 px-4">
            <a
              href="https://x.com/i/communities/2019223482295320780"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-all duration-300"
            >
              <img src="/images/x logo.png" alt="X" className="w-5 h-5" />
            </a>
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-all duration-300"
            >
              <img src="/images/dexscreener logo.png" alt="Dexscreener" className="w-5 h-5" />
            </a>
          </div>
          <Link to="/careers">
            <Button variant="cta" size="lg" className="mt-4 w-full">
              Start Your Journey
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

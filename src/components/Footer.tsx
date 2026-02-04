import { Coffee, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-caramel" />
              <span className="font-comic text-2xl font-bold">Bearista</span>
            </a>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm">
              From bear markets to barista arts. We're proof that every crash 
              can lead to a beautiful new beginning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-comic text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Menu', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-caramel transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-comic text-lg font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-caramel transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-primary-foreground/50 text-sm mt-6">
              hello@bearista.coffee
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 Bearista. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-caramel fill-caramel" /> by former crypto enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

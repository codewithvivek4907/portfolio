import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Heart, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Email", href: "mailto:alex.johnson@email.com", icon: Mail }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient">
              Alex Johnson
            </div>
            <p className="text-muted-foreground">
              MERN Stack Developer passionate about creating exceptional digital experiences 
              and bringing innovative ideas to life through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-smooth w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>San Francisco, CA</p>
              <p>alex.johnson@email.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3">
                Available for freelance projects
              </p>
              <Button variant="gradient" size="sm" asChild>
                <a href="#contact">
                  Hire Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Designed & Developed by Alex Johnson
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-4 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
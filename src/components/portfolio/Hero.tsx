import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Coding workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-primary/20 animate-float">
        <Code className="w-12 h-12" />
      </div>
      <div className="absolute bottom-40 left-20 text-accent/20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-8 h-8" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">
                Alex Johnson
              </span>
              <br />
              MERN Stack Developer
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I craft exceptional digital experiences using MongoDB, Express.js, React, and Node.js. 
              Passionate about building scalable web applications that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-card rounded-2xl shadow-2xl p-8 card-elegant">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/20 rounded w-3/4"></div>
                      <div className="h-2 bg-accent/20 rounded w-1/2"></div>
                      <div className="h-2 bg-primary/20 rounded w-2/3"></div>
                      <div className="h-2 bg-muted rounded w-1/3"></div>
                    </div>
                    <div className="pt-4">
                      <div className="text-xs text-muted-foreground font-mono">
                        const developer = &#123;<br />
                        &nbsp;&nbsp;name: "Alex Johnson",<br />
                        &nbsp;&nbsp;stack: ["MongoDB", "Express", "React", "Node"],<br />
                        &nbsp;&nbsp;passion: "Building amazing apps"<br />
                        &#125;;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
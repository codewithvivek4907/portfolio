import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Users, Coffee } from "lucide-react";
import profileImage from "@/assets/profile-abstract.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration and communication skills"
    },
    {
      icon: Coffee,
      title: "Passionate",
      description: "Love what I do, always learning and improving"
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express.js", 
    "MongoDB", "PostgreSQL", "Redux", "Next.js", "Tailwind CSS",
    "Docker", "AWS", "Git", "REST APIs", "GraphQL"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate MERN stack developer with a love for creating innovative web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Alex Johnson"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-xl opacity-80 blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-6">
              Turning ideas into <span className="text-gradient">digital reality</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a passionate full-stack developer with 3+ years of experience in the MERN stack. 
                I specialize in building modern, responsive web applications that provide exceptional user experiences.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work, and it has evolved 
                into a career where I get to solve complex problems and bring creative ideas to life through code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Technologies I work with:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.title} 
                className="card-elegant animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import projectImage from "@/assets/project-showcase.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce application with payment integration, admin dashboard, and real-time inventory management.",
      image: projectImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      features: ["Payment Integration", "Admin Dashboard", "Real-time Updates", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced filtering.",
      image: projectImage,
      technologies: ["React", "Express.js", "PostgreSQL", "Socket.io", "JWT"],
      features: ["Real-time Collaboration", "Team Management", "File Uploads", "Advanced Filtering"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and automated reporting features.",
      image: projectImage,
      technologies: ["Next.js", "Node.js", "MongoDB", "Chart.js", "TailwindCSS"],
      features: ["Data Visualization", "Automated Reports", "Multi-platform Integration", "Custom Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Forecast App",
      description: "Modern weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: projectImage,
      technologies: ["React", "OpenWeather API", "Mapbox", "TypeScript"],
      features: ["Geolocation", "Interactive Maps", "Weather Alerts", "7-day Forecast"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Blog CMS Platform",
      description: "Content management system for bloggers with rich text editor, SEO optimization, and analytics integration.",
      image: projectImage,
      technologies: ["React", "Node.js", "MongoDB", "Quill.js", "Google Analytics"],
      features: ["Rich Text Editor", "SEO Optimization", "Analytics Integration", "Comment System"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and mortgage calculator features.",
      image: projectImage,
      technologies: ["Next.js", "Express.js", "PostgreSQL", "Cloudinary", "Stripe"],
      features: ["Advanced Search", "Virtual Tours", "Mortgage Calculator", "Agent Portal"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to build them
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-elegant group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.githubUrl} aria-label="View on GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.liveUrl} aria-label="View live project">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))
                    }
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))
                    }
                  </ul>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button variant="gradient" size="sm" asChild>
                    <a href={project.liveUrl} className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} className="flex items-center">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
          }
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="card-elegant group animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.githubUrl} aria-label="View on GitHub">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.liveUrl} aria-label="View live project">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))
                    }
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
            }
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub profile for more projects and contributions
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="#" className="flex items-center">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

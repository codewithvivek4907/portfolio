import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Layers, 
  Database, 
  Server, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Layers,
      title: "Frontend Development",
      color: "text-blue-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Authentication", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Database & Storage",
      color: "text-purple-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 75 },
        { name: "Prisma ORM", level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Tools",
      color: "text-orange-500",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Responsive Design", icon: Smartphone },
    { name: "UI/UX Design", icon: Palette },
    { name: "Performance Optimization", icon: Zap },
    { name: "Version Control", icon: GitBranch }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-elegant animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="text-center">Additional Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {additionalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted/50 transition-smooth animate-fade-in-up"
                    style={{ animationDelay: `${0.05 * index}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Certifications & Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AWS Certified Developer",
              "MongoDB Certified Developer",
              "React Professional",
              "Node.js Expert",
              "Full Stack Developer"
            ].map((cert) => (
              <Badge key={cert} variant="outline" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
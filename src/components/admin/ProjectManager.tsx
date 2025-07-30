import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  ExternalLink,
  Calendar,
  Tag,
  Briefcase
} from "lucide-react";

const mockProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/api/placeholder/300/200",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "Published",
    createdAt: "2024-01-15",
    views: 245,
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "/api/placeholder/300/200",
    technologies: ["React", "Firebase", "Material-UI"],
    status: "Draft",
    createdAt: "2024-01-10",
    views: 123,
    githubUrl: "https://github.com/username/taskapp",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design and animations",
    image: "/api/placeholder/300/200",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    status: "Published",
    createdAt: "2024-01-05",
    views: 567,
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://myportfolio.com",
  },
];

export default function ProjectManager() {
  const [projects, setProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || project.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            Manage your portfolio projects and showcase your work
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Project
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("all")}
              >
                All
              </Button>
              <Button
                variant={filterStatus === "published" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("published")}
              >
                Published
              </Button>
              <Button
                variant={filterStatus === "draft" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("draft")}
              >
                Draft
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge variant={project.status === "Published" ? "default" : "secondary"}>
                  {project.status}
                </Badge>
              </div>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Technologies */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {project.views} views
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live Demo
                  </Button>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2 border-t">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleDelete(project.id)}
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || filterStatus !== "all" 
                ? "No projects match your current filters." 
                : "Get started by adding your first project."}
            </p>
            {(!searchTerm && filterStatus === "all") && (
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Project
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
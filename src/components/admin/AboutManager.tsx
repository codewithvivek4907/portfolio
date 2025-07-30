import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Save, 
  Upload, 
  Plus, 
  Trash2, 
  User, 
  Code, 
  Award,
  Eye
} from "lucide-react";

const mockAboutData = {
  name: "John Developer",
  title: "Full Stack MERN Developer",
  bio: "Passionate full-stack developer with 5+ years of experience building modern web applications. I specialize in the MERN stack and love creating user-friendly, scalable solutions that make a real impact.",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  profileImage: "/api/placeholder/300/300",
  resumeUrl: "/resume.pdf",
  skills: [
    { id: 1, name: "React", level: "Expert", category: "Frontend" },
    { id: 2, name: "Node.js", level: "Expert", category: "Backend" },
    { id: 3, name: "MongoDB", level: "Advanced", category: "Database" },
    { id: 4, name: "Express.js", level: "Expert", category: "Backend" },
    { id: 5, name: "TypeScript", level: "Advanced", category: "Language" },
    { id: 6, name: "Tailwind CSS", level: "Expert", category: "Frontend" },
  ],
  socialLinks: {
    github: "https://github.com/johndeveloper",
    linkedin: "https://linkedin.com/in/johndeveloper",
    twitter: "https://twitter.com/johndeveloper",
  },
  experience: [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      duration: "2022 - Present",
      description: "Lead development of scalable web applications using MERN stack.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Startup Inc",
      duration: "2020 - 2022",
      description: "Developed responsive React applications and improved user experience.",
    },
  ],
};

export default function AboutManager() {
  const [aboutData, setAboutData] = useState(mockAboutData);
  const [newSkill, setNewSkill] = useState({ name: "", level: "Beginner", category: "Frontend" });
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    duration: "",
    description: "",
  });

  const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const skillCategories = ["Frontend", "Backend", "Database", "Language", "Tool", "Other"];

  const handleUpdateBasicInfo = (field: string, value: string) => {
    setAboutData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdateSocialLinks = (platform: string, url: string) => {
    setAboutData(prev => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: url }
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      const skill = {
        id: Date.now(),
        ...newSkill
      };
      setAboutData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
      setNewSkill({ name: "", level: "Beginner", category: "Frontend" });
    }
  };

  const handleRemoveSkill = (skillId: number) => {
    setAboutData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== skillId)
    }));
  };

  const handleAddExperience = () => {
    if (newExperience.title.trim() && newExperience.company.trim()) {
      const experience = {
        id: Date.now(),
        ...newExperience
      };
      setAboutData(prev => ({
        ...prev,
        experience: [...prev.experience, experience]
      }));
      setNewExperience({
        title: "",
        company: "",
        duration: "",
        description: "",
      });
    }
  };

  const handleRemoveExperience = (experienceId: number) => {
    setAboutData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== experienceId)
    }));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Advanced": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">About</h1>
          <p className="text-muted-foreground">
            Manage your personal information and professional details
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Basic Information
            </CardTitle>
            <CardDescription>
              Update your personal and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={aboutData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Photo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={aboutData.name}
                  onChange={(e) => handleUpdateBasicInfo('name', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  value={aboutData.title}
                  onChange={(e) => handleUpdateBasicInfo('title', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={aboutData.bio}
                onChange={(e) => handleUpdateBasicInfo('bio', e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={aboutData.email}
                  onChange={(e) => handleUpdateBasicInfo('email', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={aboutData.phone}
                  onChange={(e) => handleUpdateBasicInfo('phone', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={aboutData.location}
                onChange={(e) => handleUpdateBasicInfo('location', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
            <CardDescription>
              Update your social media profiles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                value={aboutData.socialLinks.github}
                onChange={(e) => handleUpdateSocialLinks('github', e.target.value)}
                placeholder="https://github.com/username"
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={aboutData.socialLinks.linkedin}
                onChange={(e) => handleUpdateSocialLinks('linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div>
              <Label htmlFor="twitter">Twitter</Label>
              <Input
                id="twitter"
                value={aboutData.socialLinks.twitter}
                onChange={(e) => handleUpdateSocialLinks('twitter', e.target.value)}
                placeholder="https://twitter.com/username"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Skills
          </CardTitle>
          <CardDescription>
            Manage your technical skills and expertise levels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add New Skill */}
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-medium mb-3">Add New Skill</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Input
                placeholder="Skill name"
                value={newSkill.name}
                onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
              />
              <select
                className="px-3 py-2 border rounded-md bg-background"
                value={newSkill.level}
                onChange={(e) => setNewSkill(prev => ({ ...prev, level: e.target.value }))}
              >
                {skillLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <select
                className="px-3 py-2 border rounded-md bg-background"
                value={newSkill.category}
                onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value }))}
              >
                {skillCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <Button onClick={handleAddSkill} disabled={!newSkill.name.trim()}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>

          {/* Skills List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aboutData.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-between p-3 border rounded-lg bg-card"
              >
                <div>
                  <p className="font-medium">{skill.name}</p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                    <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveSkill(skill.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Experience
          </CardTitle>
          <CardDescription>
            Manage your work experience and career history
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add New Experience */}
          <div className="border rounded-lg p-4 bg-muted/30">
            <h4 className="font-medium mb-3">Add New Experience</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Job title"
                value={newExperience.title}
                onChange={(e) => setNewExperience(prev => ({ ...prev, title: e.target.value }))}
              />
              <Input
                placeholder="Company name"
                value={newExperience.company}
                onChange={(e) => setNewExperience(prev => ({ ...prev, company: e.target.value }))}
              />
              <Input
                placeholder="Duration (e.g., 2020 - 2022)"
                value={newExperience.duration}
                onChange={(e) => setNewExperience(prev => ({ ...prev, duration: e.target.value }))}
              />
              <Button 
                onClick={handleAddExperience}
                disabled={!newExperience.title.trim() || !newExperience.company.trim()}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </div>
            <Textarea
              placeholder="Job description and achievements"
              value={newExperience.description}
              onChange={(e) => setNewExperience(prev => ({ ...prev, description: e.target.value }))}
              className="min-h-[80px]"
            />
          </div>

          {/* Experience List */}
          <div className="space-y-4">
            {aboutData.experience.map((exp) => (
              <div key={exp.id} className="border rounded-lg p-4 bg-card">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.duration}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveExperience(exp.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MessageSquare, 
  Eye, 
  TrendingUp,
  Calendar,
  Clock
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2 this month",
    icon: Briefcase,
    color: "text-blue-600",
  },
  {
    title: "Messages",
    value: "8",
    change: "3 unread",
    icon: MessageSquare,
    color: "text-green-600",
  },
  {
    title: "Page Views",
    value: "2,847",
    change: "+12% this week",
    icon: Eye,
    color: "text-purple-600",
  },
  {
    title: "Profile Views",
    value: "1,234",
    change: "+8% this month",
    icon: TrendingUp,
    color: "text-orange-600",
  },
];

const recentProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    status: "Published",
    lastUpdated: "2 days ago",
    views: 245,
  },
  {
    id: 2,
    title: "Task Management App",
    status: "Draft",
    lastUpdated: "1 week ago",
    views: 123,
  },
  {
    id: 3,
    title: "Portfolio Website",
    status: "Published",
    lastUpdated: "3 days ago",
    views: 567,
  },
];

const recentMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Project Inquiry",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@company.com",
    subject: "Collaboration Opportunity",
    time: "1 day ago",
    read: true,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@startup.com",
    subject: "Freelance Work",
    time: "3 days ago",
    read: true,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your portfolio.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Recent Projects
            </CardTitle>
            <CardDescription>
              Your latest project updates and performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="space-y-1">
                  <p className="font-medium">{project.title}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {project.lastUpdated}
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <Badge 
                    variant={project.status === "Published" ? "default" : "secondary"}
                  >
                    {project.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    {project.views} views
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Recent Messages
            </CardTitle>
            <CardDescription>
              Latest inquiries and contact form submissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMessages.map((message) => (
              <div
                key={message.id}
                className="flex items-start justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{message.name}</p>
                    {!message.read && (
                      <div className="h-2 w-2 bg-blue-600 rounded-full" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {message.subject}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {message.email}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  {message.time}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>
            Common tasks to manage your portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border rounded-lg hover:bg-muted/50 transition-colors text-left">
              <Briefcase className="h-6 w-6 text-blue-600 mb-2" />
              <h3 className="font-medium">Add New Project</h3>
              <p className="text-sm text-muted-foreground">
                Showcase your latest work
              </p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-muted/50 transition-colors text-left">
              <MessageSquare className="h-6 w-6 text-green-600 mb-2" />
              <h3 className="font-medium">View Messages</h3>
              <p className="text-sm text-muted-foreground">
                Respond to inquiries
              </p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-muted/50 transition-colors text-left">
              <Eye className="h-6 w-6 text-purple-600 mb-2" />
              <h3 className="font-medium">Preview Portfolio</h3>
              <p className="text-sm text-muted-foreground">
                See your public site
              </p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
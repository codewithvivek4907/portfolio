import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Mail, 
  MailOpen, 
  Reply, 
  Trash2, 
  Clock,
  User,
  MessageSquare
} from "lucide-react";

const mockMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    subject: "Project Collaboration Inquiry",
    message: "Hi! I saw your portfolio and I'm impressed with your work. I have a project that might be a good fit for your skills. Would you be interested in discussing a potential collaboration?",
    createdAt: "2024-01-15T10:30:00Z",
    read: false,
    replied: false,
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    subject: "Freelance Web Development Opportunity",
    message: "Hello, we're looking for a talented React developer for a 3-month project. Your portfolio shows exactly the kind of skills we need. Are you available for freelance work?",
    createdAt: "2024-01-14T15:45:00Z",
    read: true,
    replied: true,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@startup.com",
    subject: "Full-time Position Offer",
    message: "We're a growing startup and we'd love to have someone with your expertise join our team. Would you be open to discussing a full-time senior developer position?",
    createdAt: "2024-01-12T09:15:00Z",
    read: true,
    replied: false,
  },
  {
    id: 4,
    name: "Emily Chen",
    email: "emily.chen@design.com",
    subject: "Design & Development Partnership",
    message: "I'm a UI/UX designer looking for a development partner for client projects. Your work looks amazing! Would you be interested in forming a partnership?",
    createdAt: "2024-01-10T14:20:00Z",
    read: false,
    replied: false,
  },
];

export default function MessagesManager() {
  const [messages, setMessages] = useState(mockMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<typeof mockMessages[0] | null>(null);
  const [replyText, setReplyText] = useState("");

  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      filterStatus === "all" ||
      (filterStatus === "unread" && !message.read) ||
      (filterStatus === "read" && message.read) ||
      (filterStatus === "replied" && message.replied);
    
    return matchesSearch && matchesStatus;
  });

  const handleMarkAsRead = (id: number) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter(msg => msg.id !== id));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  const handleReply = (id: number) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, replied: true } : msg
    ));
    setReplyText("");
    setSelectedMessage(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground">
            Manage contact form submissions and inquiries
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            {unreadCount} unread
          </Badge>
          <Badge variant="outline">
            {messages.length} total
          </Badge>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
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
                variant={filterStatus === "unread" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("unread")}
              >
                Unread
              </Button>
              <Button
                variant={filterStatus === "read" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("read")}
              >
                Read
              </Button>
              <Button
                variant={filterStatus === "replied" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("replied")}
              >
                Replied
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1 space-y-4">
          {filteredMessages.map((message) => (
            <Card 
              key={message.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedMessage?.id === message.id ? 'ring-2 ring-primary' : ''
              } ${!message.read ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''}`}
              onClick={() => {
                setSelectedMessage(message);
                if (!message.read) {
                  handleMarkAsRead(message.id);
                }
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">{message.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{message.email}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {!message.read && (
                      <Mail className="h-4 w-4 text-blue-600" />
                    )}
                    {message.replied && (
                      <Badge variant="outline" className="text-xs">
                        Replied
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium text-sm mb-2 line-clamp-1">{message.subject}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {message.message}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {formatDate(message.createdAt)}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Empty State */}
          {filteredMessages.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <h3 className="font-medium mb-1">No messages found</h3>
                <p className="text-sm text-muted-foreground">
                  {searchTerm || filterStatus !== "all" 
                    ? "No messages match your current filters." 
                    : "You don't have any messages yet."}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {selectedMessage.name}
                      {!selectedMessage.read && (
                        <Badge variant="secondary" className="text-xs">New</Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{selectedMessage.email}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDelete(selectedMessage.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">{selectedMessage.subject}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {formatDate(selectedMessage.createdAt)}
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                </div>

                {/* Reply Section */}
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Reply className="h-4 w-4" />
                    Reply to {selectedMessage.name}
                  </h4>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Type your reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="min-h-[120px]"
                    />
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleReply(selectedMessage.id)}
                        disabled={!replyText.trim()}
                      >
                        <Reply className="h-4 w-4 mr-2" />
                        Send Reply
                      </Button>
                      <Button variant="outline" onClick={() => setReplyText("")}>
                        Clear
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Select a message</h3>
                <p className="text-muted-foreground">
                  Choose a message from the list to view its details and reply.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
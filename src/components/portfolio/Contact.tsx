import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.johnson@email.com",
      link: "mailto:alex.johnson@email.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      handle: "@alexjohnson"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
      handle: "Alex Johnson"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      handle: "@alex_codes"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project over coffee
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="card-elegant mb-8">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
                <CardDescription>
                  I'm always excited to discuss new opportunities and interesting projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.link}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
                <CardDescription>
                  Stay updated with my latest projects and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                      >
                        <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Discussion" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="gradient" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>

                {/* Alternative CTA */}
                <div className="pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Prefer to schedule a call instead?
                    </p>
                    <Button variant="outline" size="sm" className="group">
                      <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Schedule a Meeting
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="card-elegant bg-gradient-primary text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6 opacity-90">
                Let's turn your vision into reality. Get in touch today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="mailto:alex.johnson@email.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, Users, Briefcase, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface JobOpening {
  id: string;
  title: string;
  experience: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const CareersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    coverLetter: ""
  });
  const { toast } = useToast();

  const jobOpenings: JobOpening[] = [
    {
      id: "1",
      title: "Full Stack Developer",
      experience: "2-3 Years",
      location: "Noida, India",
      type: "Full-time",
      department: "Engineering",
      description: "We are looking for a passionate Full Stack Developer to join our dynamic team and help build innovative web applications for our SME clients.",
      requirements: [
        "2-3 years of experience in React.js and Node.js",
        "Strong knowledge of JavaScript, TypeScript, and modern web technologies",
        "Experience with databases (MySQL, PostgreSQL, MongoDB)",
        "Familiarity with cloud platforms (AWS, Azure, or GCP)",
        "Understanding of RESTful APIs and GraphQL",
        "Knowledge of version control systems (Git)",
        "Good problem-solving and communication skills"
      ],
      responsibilities: [
        "Develop and maintain web applications using React.js and Node.js",
        "Collaborate with cross-functional teams to deliver high-quality solutions",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and technical discussions",
        "Debug and troubleshoot application issues",
        "Stay updated with latest technology trends and best practices"
      ]
    },
    {
      id: "2",
      title: "UX Designer",
      experience: "Fresher",
      location: "Noida, India",
      type: "Full-time",
      department: "Design",
      description: "Join our design team as a UX Designer and help create intuitive and user-friendly interfaces for our digital transformation projects.",
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        "Strong portfolio showcasing UX/UI design projects",
        "Proficiency in design tools (Figma, Sketch, Adobe XD)",
        "Understanding of user-centered design principles",
        "Knowledge of wireframing and prototyping",
        "Basic understanding of HTML/CSS is a plus",
        "Excellent communication and presentation skills"
      ],
      responsibilities: [
        "Create user personas, journey maps, and wireframes",
        "Design intuitive user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Collaborate with developers to ensure design implementation",
        "Create and maintain design systems and style guides",
        "Present design concepts to stakeholders and clients"
      ]
    }
  ];

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setShowThankYou(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setShowThankYou(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        coverLetter: ""
      });
    }, 1000);
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setShowThankYou(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      portfolio: "",
      coverLetter: ""
    });
  };
  const culture = [
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, conferences, and certification programs.",
      icon: "📚"
    },
    {
      title: "Work-Life Balance", 
      description: "We believe in maintaining a healthy balance between professional excellence and personal well-being.",
      icon: "⚖️"
    },
    {
      title: "Innovation Time",
      description: "Team members dedicate time to explore new technologies and contribute to open-source projects.",
      icon: "💡"
    },
    {
      title: "Collaborative Environment",
      description: "We foster an inclusive culture where every voice is heard and diverse perspectives are valued.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                Consais
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Be part of a dynamic team that's transforming how SMEs leverage technology. 
              We're looking for passionate individuals to help us build the future of digital solutions.
              </p>
            
            </div>
          </div>
        </section>
   

      {/* Company Culture Section */}
      <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Culture</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Makes Us Different
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We've built a culture that attracts top talent and fosters innovation, collaboration, and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culture.map((item, index) => (
                <Card key={item.title} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

         
        {/* Leadership Philosophy */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Leadership Philosophy</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Leading by Example, Growing Together
              </h2>
              <div className="bg-card/50 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                <blockquote className="text-xl text-muted-foreground italic leading-relaxed mb-6">
                  "Our success is measured not just by the solutions we deliver, but by the growth and 
                  satisfaction of our team members. We believe that when our people thrive, our clients 
                  receive the best possible service and innovation."
                </blockquote>
                <div className="text-foreground font-semibold">— Consais Leadership Team</div>
              </div>
            </div>
          </div>
        </section>



      {/* Job Openings Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore exciting opportunities to grow your career with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-foreground">{job.title}</CardTitle>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => handleApplyClick(job)}
                    className="w-full"
                    variant="default"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={resetModal}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {showThankYou ? "Application Submitted!" : `Apply for ${selectedJob?.title}`}
            </DialogTitle>
            <DialogDescription>
              {showThankYou 
                ? "Thank you for your interest! We'll review your application and get back to you soon."
                : "Fill out the form below to apply for this position."
              }
            </DialogDescription>
          </DialogHeader>

          {showThankYou ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Application Received</h3>
              <p className="text-muted-foreground mb-6">
                We appreciate your interest in joining our team. Our HR team will review your application and contact you within 3-5 business days.
              </p>
              <Button onClick={resetModal} className="w-full">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="e.g., 2 years"
                />
              </div>
              
              <div>
                <Label htmlFor="portfolio">Portfolio/LinkedIn URL</Label>
                <Input
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://"
                />
              </div>
              
              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us why you're interested in this position..."
                  rows={4}
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={resetModal} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Submit Application
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CareersPage;
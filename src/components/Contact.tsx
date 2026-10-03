import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  Globe,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_bwkgclx'; 
      const templateId = 'template_zvup4n4'; 
      const publicKey = 'q7c2H8K4fNVaKG7BH';
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'support@consais.com'
      };
      
      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Show thank you modal
      setShowThankYou(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 9910815132",
      action: "tel:+919910815132"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "support@consais.com",
      action: "mailto:support@consais.com"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      details: "Chat with us instantly",
      action: "https://wa.me/919910815132"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM IST",
      action: null
    }
  ];

  const services = [
    "Fintech Engineering",
    "Lending Platforms (LOS / LMS)",
    "Cloud Infrastructure (AWS)",
    "DevSecOps, CI/CD & Terraform",
    "Secure Financial Integrations",
    "Reliability, BCP & Disaster Recovery",
    "Bespoke Workflow Automation (n8n / APIs)",
    "Containerized Infrastructure (Docker / Kubernetes)",
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building or modernizing a critical system?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your financial application, cloud infrastructure, integration or reliability challenge. We will discuss the requirements and engineering approach with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Reach out to us through any of these channels. Our team is ready to discuss 
                  your project and provide expert guidance.
                </p>
              </div>

              {contactInfo.map((item, index) => (
                <Card key={item.title} className="group hover:shadow-card transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.details}</p>
                      </div>
                      {item.action && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(item.action, '_blank')}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Contact */}
              <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground">
                <h4 className="text-lg font-semibold mb-2">Need Immediate Assistance?</h4>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  For urgent queries, call us directly or send a WhatsApp message.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                  onClick={() => window.open('https://wa.me/919910815132', '_blank')}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp Now
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@company.com"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll only use your information to respond to your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-foreground">
              Thank You! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-muted-foreground">
              We've received your query and will reach out to you shortly.
            </p>
            <p className="text-sm text-muted-foreground">
              Our team typically responds within 24 hours during business days.
            </p>
            <Button 
              onClick={() => setShowThankYou(false)}
              className="w-full mt-6"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
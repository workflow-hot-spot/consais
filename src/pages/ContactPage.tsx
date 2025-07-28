import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Globe, 
  HeadphonesIcon, 
  Mail, 
  MapPin, 
  Phone, 
  MessageSquare,
  Calendar,
  FileText,
  Video
} from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Call",
      description: "Speak directly with our experts",
      detail: "+91 9910815132",
      action: "tel:+919910815132",
      availability: "Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Detailed inquiries and documentation",
      detail: "info@workflowcatalyst.com",
      action: "mailto:info@workflowcatalyst.com",
      availability: "24/7 - Response within 4 hours"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "WhatsApp Chat",
      description: "Instant messaging for quick queries",
      detail: "Chat with us now",
      action: "https://wa.me/919910815132",
      availability: "Real-time responses"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Consultation",
      description: "Face-to-face project discussions",
      detail: "Schedule a meeting",
      action: "https://calendly.com/workflowcatalyst",
      availability: "By appointment"
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Headquarters",
      details: ["India", "Remote-first operations", "Global client coverage"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM IST", "Saturday: 10:00 AM - 4:00 PM IST", "Emergency support: 24/7"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Time Zones",
      details: ["Primary: IST (UTC+5:30)", "Coverage: Global", "Flexible scheduling available"]
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Support Levels",
      details: ["Basic: Email support", "Premium: Priority phone/chat", "Enterprise: Dedicated manager"]
    }
  ];

  const inquiryTypes = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Project Inquiry",
      description: "New project discussions and requirements",
      topics: ["Custom development", "Digital transformation", "System integration", "Platform migration"]
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Technical Support",
      description: "Existing client support and maintenance",
      topics: ["Bug fixes", "Performance issues", "Feature requests", "Training needs"]
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Consultation",
      description: "Strategic guidance and technology consulting",
      topics: ["Technology roadmap", "Architecture review", "Best practices", "Cost optimization"]
    }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Most projects are completed within 2-8 weeks, depending on complexity and scope. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive maintenance and support packages with SLA-backed response times to ensure your solutions continue to perform optimally."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in system integration and can seamlessly connect new solutions with your existing infrastructure and workflows."
    },
    {
      question: "What industries do you serve?",
      answer: "We work across multiple industries including finance, healthcare, e-commerce, manufacturing, education, and more. Our solutions are tailored to industry-specific requirements."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                Contact Us
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Let's Transform Your Business Together
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Ready to start your digital transformation journey? Our experts are here to discuss 
                your project requirements and provide customized solutions that drive real results.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project Now
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">How to Reach Us</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the communication method that works best for you. We're committed to responding quickly and providing the support you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                    <p className="text-primary font-medium mb-3">{method.detail}</p>
                    <p className="text-xs text-muted-foreground mb-4">{method.availability}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => window.open(method.action, '_blank')}
                      className="w-full"
                    >
                      {method.title === "Video Consultation" ? "Schedule" : "Contact"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {officeInfo.map((info, index) => (
                <Card key={info.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm">{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Component */}
        <div id="contact-form">
          <Contact />
        </div>

        {/* Inquiry Types */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Inquiry Types</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Can We Help You With?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're starting a new project, need technical support, or want strategic guidance, 
                we have the expertise to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {inquiryTypes.map((type, index) => (
                <Card key={type.title} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {type.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{type.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Common topics:</p>
                      <ul className="grid grid-cols-2 gap-1">
                        {type.topics.map((topic, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground">• {topic}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Frequently Asked Questions</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Quick Answers to Common Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find answers to some of the most common questions we receive from our clients.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/919910815132', '_blank')}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask on WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { 
  Cloud, 
  Database, 
  Code, 
  Shield, 
  Smartphone, 
  Palette,
  TestTube,
  Workflow,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const serviceCategories = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Platform Solutions",
      description: "End-to-end infrastructure and cloud solutions for modern businesses",
      color: "bg-blue-500",
      services: [
        "Cloud & Data Infrastructure Services - AWS, Azure, GCP setup and optimization",
        "Storage Management - SAN/NAS configuration, backups, storage optimization",
        "Migration & Upgradation - Legacy system modernization with minimal downtime",
        "Infrastructure Assessment & Optimization - Performance audits and tuning",
        "IT Strategy & Roadmap Consulting - Customized technology roadmaps",
        "Business Continuity & Disaster Recovery - Backup strategies and failover systems"
      ]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Comprehensive digital solutions to modernize your business operations",
      color: "bg-purple-500",
      services: [
        "CRM Solutions - SuiteCRM, VTiger, Odoo, EspoCRM implementation with customization",
        "ERP Solutions - Odoo, ERPNext, Dolibarr setup with workflow automation",
        "CMS Platforms - WordPress, Joomla, Drupal setup with theming and SEO",
        "eCommerce Platforms - WooCommerce, Magento, OpenCart with custom integrations",
        "Custom Module Development - Tailored features and business logic enhancements",
        "Third-Party Integration - Seamless API connectivity with finance and SMS tools"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Web Development",
      description: "Full-stack development services from concept to deployment",
      color: "bg-green-500",
      services: [
        "Website Maintenance & Support - Regular updates and performance enhancements",
        "Web Applications - End-to-end development from database to design",
        "E-Commerce Websites - Custom online stores with secure payments and tracking",
        "CMS Customizations - WordPress and Joomla tailored to business needs",
        "API Development & Integration - Custom APIs and third-party integrations",
        "Progressive Web Apps (PWA) - Mobile-app-like web experiences"
      ]
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Software Testing",
      description: "Comprehensive testing services to ensure quality and reliability",
      color: "bg-orange-500",
      services: [
        "Automation Testing - Selenium, Cypress, Appium with CI/CD integration",
        "Manual Testing - In-depth human interaction and exploratory testing",
        "Performance Testing - Load, stress, and endurance testing using JMeter",
        "Compatibility Testing - Cross-browser, device, and OS compatibility",
        "Mobile App Testing - iOS and Android functional and device testing",
        "API Testing - Backend API validation using Postman and automation frameworks"
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UX/UI Design",
      description: "User-centered design solutions for exceptional digital experiences",
      color: "bg-pink-500",
      services: [
        "Information Architecture - Sitemap planning and navigation structure",
        "Wireframing & Prototyping - Low and high-fidelity interactive prototypes",
        "Usability Testing - Real-user testing and A/B test feedback loops",
        "Visual Design & Branding - Design systems, color palettes, and typography",
        "Responsive Design - Mobile-first layouts for all device types",
        "Design Systems - Centralized reusable components with design tools"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Optimization",
      description: "Advanced security measures and performance optimization",
      color: "bg-red-500",
      services: [
        "Security Hardening - Role management, SSL, and firewall integration",
        "Performance Tuning - Database optimization, caching, and plugin audits",
        "Ongoing Maintenance & Support - SLA-backed bug fixes and health checks",
        "Open Source Consulting - Platform selection and scalability planning",
        "Training & Documentation - Admin and end-user training programs",
        "Accessibility Design (A11y) - WCAG compliant inclusive designs"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
  

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {category.services.slice(0, 4).map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{service.split(' - ')[0]}</span>
                    </li>
                  ))}
                
                  <Dialog>
                  <DialogTrigger asChild>
                  {category.services.length > 4 && (
                    <li className="text-sm text-primary font-medium" onClick={() => setSelectedService(category)}>
                      <a className="service-link">+{category.services.length - 4} more services</a>
                    </li>
                  )}
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${category.color} text-white`}>
                          {category.icon}
                        </div>
                        <div>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {category.title}
                          </DialogTitle>
                          <p className="text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Complete Service List:
                      </h3>
                      <div className="space-y-3">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start space-x-3 p-3 bg-gradient-section rounded-lg border border-border/50">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground text-sm">
                                {service.split(' - ')[0]}
                              </h4>
                              {service.includes(' - ') && (
                                <p className="text-muted-foreground text-xs mt-1">
                                  {service.split(' - ')[1]}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-6">
                        <h4 className="font-semibold text-foreground mb-2">Ready to get started?</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          Contact us to discuss how these services can transform your business.
                        </p>
                        <Link to="/contact">
                        <Button variant="hero" size="sm" className="w-full">
                        
                          Contact Us
                          <ArrowRight className="ml-2 h-4 w-4" />
                      
                        </Button>
                        </Link>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                </ul>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experts can design and develop tailored solutions that perfectly match your unique business requirements.
            </p>
            <Button variant="hero" size="lg">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
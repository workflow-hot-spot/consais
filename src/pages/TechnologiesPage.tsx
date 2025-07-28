import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const TechnologiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              Our Core Technologies
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Cutting-Edge Technology Stack
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We leverage a diverse and robust set of technologies to build scalable, 
                efficient, and innovative web-based solutions for our clients.
              </p>
              
            </div>
          </div>
        </section>
     

        {/* Technologies Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  category: "Frontend Technologies",
                  technologies: [
                    { name: "React", color: "bg-blue-500", icon: "⚛️", description: "Modern UI development" },
                    { name: "Angular", color: "bg-red-600", icon: "🅰️", description: "Enterprise web apps" },
                    { name: "HTML/CSS", color: "bg-orange-500", icon: "🎨", description: "Web fundamentals" },
                    { name: "Tailwind CSS", color: "bg-cyan-500", icon: "💨", description: "Utility-first CSS" },
                    { name: "JavaScript", color: "bg-yellow-500", icon: "📜", description: "Dynamic web behavior" },
                    { name: "TypeScript", color: "bg-blue-600", icon: "📘", description: "Type-safe development" }
                  ]
                },
                {
                  category: "Backend Technologies",
                  technologies: [
                    { name: "Java", color: "bg-orange-600", icon: "☕", description: "Enterprise-grade applications" },
                    { name: "Python", color: "bg-blue-500", icon: "🐍", description: "AI/ML and data processing" },
                    { name: "FastAPI", color: "bg-cyan-600", icon: "🚀", description: "High-performance APIs" },
                    { name: "PHP", color: "bg-purple-600", icon: "🔧", description: "Web development solutions" },
                    { name: "Node.js", color: "bg-green-600", icon: "🟢", description: "Server-side JavaScript" }
                  ]
                },
                {
                  category: "Database Solutions",
                  technologies: [
                    { name: "MongoDB", color: "bg-green-600", icon: "🍃", description: "NoSQL document database" },
                    { name: "MySQL", color: "bg-orange-500", icon: "🗃️", description: "Relational database system" },
                    { name: "PostgreSQL", color: "bg-blue-700", icon: "🐘", description: "Advanced relational database" },
                    { name: "Redis", color: "bg-red-600", icon: "💾", description: "In-memory data store" }
                  ]
                },
                {
                  category: "Infrastructure & Tools",
                  technologies: [
                    { name: "Nginx", color: "bg-green-700", icon: "⚡", description: "High-performance web server" },
                    { name: "Camunda", color: "bg-orange-600", icon: "⚙️", description: "Business process automation" },
                    { name: "Docker", color: "bg-blue-600", icon: "🐳", description: "Application containerization" },
                    { name: "AWS", color: "bg-orange-500", icon: "☁️", description: "Cloud infrastructure" }
                  ]
                }
              ].map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <Card key={techIndex} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 ${tech.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                              {tech.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
                              <p className="text-sm text-muted-foreground">{tech.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Technologies */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why We Choose These Technologies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our technology choices are driven by performance, scalability, maintainability, and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Performance",
                  description: "Technologies optimized for speed and efficiency in high-load environments.",
                  icon: "🚀"
                },
                {
                  title: "Scalability",
                  description: "Solutions that grow with your business and handle increasing demands.",
                  icon: "📈"
                },
                {
                  title: "Security",
                  description: "Enterprise-grade security features to protect your data and users.",
                  icon: "🔒"
                },
                {
                  title: "Maintainability",
                  description: "Clean, well-documented code that's easy to update and extend.",
                  icon: "🔧"
                },
                {
                  title: "Innovation",
                  description: "Cutting-edge technologies that keep you ahead of the competition.",
                  icon: "💡"
                },
                {
                  title: "Community",
                  description: "Strong community support and continuous improvement ecosystem.",
                  icon: "🤝"
                }
              ].map((benefit, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologiesPage;
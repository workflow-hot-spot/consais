import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { getSectors, getReportsBySector } from "@/data/equityResearch";

const EquityResearchPage = () => {
  const sectors = getSectors();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative bg-gradient-section py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4">
              Indian Equity Research
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Research Reports
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sector-wise equity research and market intelligence covering
              Indian-listed companies and their global operations.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <Accordion type="single" collapsible defaultValue={sectors[0]} className="w-full">
              {sectors.map((sector) => (
                <AccordionItem key={sector} value={sector}>
                  <AccordionTrigger className="text-xl font-semibold text-foreground">
                    {sector}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3">
                      {getReportsBySector(sector).map((report) => (
                        <li key={report.slug}>
                          <Link
                            to={`/blog/equityresearch/${report.slug}`}
                            className="group flex items-start gap-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300"
                          >
                            <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                            <div className="flex-1">
                              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {report.company}
                              </p>
                              <p className="text-sm text-muted-foreground mt-1">
                                {report.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {report.date}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EquityResearchPage;

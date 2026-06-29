import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import reportUrl from "@/equity/reports/speciality_chemicals/fineotex_chemicals.html?url";

const BackLink = () => (
  <Link
    to="/blog/equityresearch"
    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
  >
    <ArrowLeft className="mr-2 h-4 w-4" />
    Back to Research Reports
  </Link>
);

const CrudeChemTechnologyReport = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1200);

  const handleLoad = () => {
    const doc = iframeRef.current?.contentWindow?.document;
    if (doc) {
      setHeight(doc.documentElement.scrollHeight + 40);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
            <BackLink />

            <div className="rounded-lg border border-border/50 overflow-hidden bg-white">
              <iframe
                ref={iframeRef}
                src={reportUrl}
                title="CrudeChem Technology Market Intelligence Report"
                onLoad={handleLoad}
                style={{ height, width: "100%", border: "none", display: "block" }}
              />
            </div>

            <p className="text-xs text-muted-foreground">
              This report is for informational and educational purposes only
              and does not constitute investment advice or a recommendation
              to buy or sell any security.
            </p>

            <BackLink />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CrudeChemTechnologyReport;

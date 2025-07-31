import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Legal Information</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These terms govern your use of our services and establish the legal 
                framework for our business relationship.
              </p>
              <div className="mt-6 text-sm text-muted-foreground">
                Last updated: January 2025
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using Workflow Catalyst's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services. We reserve the right to modify these terms at any time without prior notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
                  <p className="text-muted-foreground mb-4">
                    Workflow Catalyst provides comprehensive IT services including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Custom software development and application design</li>
                    <li>Digital transformation consulting and implementation</li>
                    <li>Platform evolution and optimization services</li>
                    <li>Software testing, quality assurance, and security audits</li>
                    <li>UX/UI design and user experience optimization</li>
                    <li>Technical support and maintenance services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    As our client, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Provide accurate and complete information necessary for project execution</li>
                    <li>Respond promptly to requests for feedback, approvals, and clarifications</li>
                    <li>Ensure timely payment according to agreed-upon terms and schedules</li>
                    <li>Respect intellectual property rights and confidentiality agreements</li>
                    <li>Use our services in compliance with applicable laws and regulations</li>
                    <li>Provide necessary access to systems, data, and resources as required</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    Payment terms are established in individual service agreements. General conditions include:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Project fees and payment schedules are defined in signed contracts</li>
                    <li>Invoices are typically due within 30 days of issuance</li>
                    <li>Late payments may incur additional charges as specified in agreements</li>
                    <li>Work may be suspended for accounts in arrears beyond agreed terms</li>
                    <li>All prices are quoted in Indian Rupees unless otherwise specified</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground mb-4">
                    Intellectual property rights are handled as follows:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Client-Specific Deliverables:</strong> Custom developments become client property upon full payment</li>
                    <li><strong>Pre-existing IP:</strong> Workflow Catalyst retains rights to pre-existing tools and methodologies</li>
                    <li><strong>Third-party Components:</strong> Subject to original licensing terms and conditions</li>
                    <li><strong>Derivative Works:</strong> Rights determined by specific contract terms</li>
                    <li><strong>Open Source:</strong> Components remain subject to their respective licenses</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
                  <p className="text-muted-foreground">
                    We maintain strict confidentiality regarding all client information, business processes, and proprietary data. This obligation extends to all team members and subcontractors involved in your project. We implement appropriate technical and organizational measures to protect confidential information and will not disclose such information to third parties without explicit written consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Service Level Agreements</h2>
                  <p className="text-muted-foreground mb-4">
                    Our service commitments include:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Response time commitments as defined in individual service agreements</li>
                    <li>Quality standards and deliverable acceptance criteria</li>
                    <li>Support and maintenance terms for delivered solutions</li>
                    <li>Escalation procedures for issue resolution</li>
                    <li>Performance metrics and reporting obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, Workflow Catalyst's liability for any claims arising from our services shall not exceed the total amount paid for the specific services giving rise to the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Force Majeure</h2>
                  <p className="text-muted-foreground">
                    Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, pandemics, or other unforeseeable events. In such cases, affected obligations will be suspended until the force majeure condition ceases.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Termination</h2>
                  <p className="text-muted-foreground mb-4">
                    Either party may terminate services under the following conditions:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Written notice as specified in individual service agreements</li>
                    <li>Immediate termination for material breach of contract</li>
                    <li>Termination for convenience with appropriate notice period</li>
                    <li>Automatic termination upon completion of contracted services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms of Service are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India. We encourage resolution of disputes through good faith negotiation before pursuing legal remedies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    For questions regarding these Terms of Service, please contact us:
                  </p>
                  <div className="bg-muted p-6 rounded-lg">
                    <p className="text-foreground font-medium mb-2">Workflow Catalyst</p>
                    <p className="text-muted-foreground">Email: legal@workflowcatalyst.com</p>
                    <p className="text-muted-foreground">Phone: +91 9910815132</p>
                    <p className="text-muted-foreground">
                      Address: #11, 13 Floor, Wave One, Sector 18, Noida, UP, India - 201301
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
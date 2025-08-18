import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, AlertTriangle } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | DegenRewards</title>
        <meta name="description" content="Contact DegenRewards with questions or feedback." />
        <meta name="keywords" content="contact, support, questions, feedback, help" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl font-heading font-bold mb-4">
              Contact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question about a guide or found an issue? Reach out and we'll get back to you.
            </p>
          </div>

          {/* Contact Info */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <a 
                    href="mailto:degenrewards@gmail.com" 
                    className="text-2xl font-semibold text-primary hover:underline"
                  >
                    degenrewards@gmail.com
                  </a>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Response Time</h3>
                      <p className="text-muted-foreground">
                        We aim to reply within 48 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Important Note</h3>
                      <p className="text-muted-foreground">
                        18+ only. We can't provide personalised betting advice.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
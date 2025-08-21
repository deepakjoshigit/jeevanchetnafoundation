import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          We'd love to hear from you. Reach out with any questions or to get involved.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">Haldwani, Uttarakhand, India</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:8958521254" className="text-muted-foreground hover:underline">8958521254</a>
              <br />
              <a href="tel:9012146420" className="text-muted-foreground hover:underline">9012146420</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:info@jeevanchetnafoundation.org" className="text-muted-foreground hover:underline">
                info@jeevanchetnafoundation.org
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
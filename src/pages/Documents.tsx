import React from 'react';
import SEO from "@/components/SEO";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const documents = [
  { src: "/documents/form-10ac-part1.jpeg", alt: "FORM NO. 10AC Part 1", title: "FORM NO. 10AC (Part 1)" },
  { src: "/documents/form-10ac-part2.jpeg", alt: "FORM NO. 10AC Part 2", title: "FORM NO. 10AC (Part 2)" },
  { src: "/documents/form-10ac-part3.jpeg", alt: "FORM NO. 10AC Part 3", title: "FORM NO. 10AC (Part 3)" },
  { src: "/documents/certificate-of-incorporation.jpeg", alt: "Certificate of Incorporation", title: "Certificate of Incorporation" },
  { src: "/documents/csr-registration-approval.jpeg", alt: "CSR Registration Approval", title: "CSR Registration Approval" },
  { src: "/documents/companies-act-license.jpeg", alt: "Companies Act License", title: "Companies Act License" },
  { src: "/documents/npo-details-darpan.jpeg", alt: "NPO Details DARPAN", title: "NPO Details (DARPAN)" },
  { src: "/documents/moa-activities-page2.jpeg", alt: "MOA Activities Page 2", title: "MOA Activities (Page 2)" },
  { src: "/documents/moa-activities-page3.jpeg", alt: "MOA Activities Page 3", title: "MOA Activities (Page 3)" },
  { src: "/documents/moa-activities-page4.jpeg", alt: "MOA Activities Page 4", title: "MOA Activities (Page 4)" },
  { src: "/documents/moa-objects-page1.jpeg", alt: "MOA Objects Page 1", title: "MOA Objects (Page 1)" },
  { src: "/documents/startup-india-recognition.jpeg", alt: "Startup India Recognition", title: "Startup India Recognition" },
  { src: "/documents/income-tax-tan.jpeg", alt: "Income Tax TAN Allotment", title: "Income Tax TAN Allotment" },
  { src: "/documents/income-tax-pan.jpeg", alt: "Income Tax PAN Card", title: "Income Tax PAN Card" },
  { src: "/documents/npo-contact-details.jpeg", alt: "NPO Contact Details", title: "NPO Contact Details" },
];

const Documents: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Documents | Jeevan Chetna Foundation"
        description="View important legal and registration documents of Jeevan Chetna Foundation, including certificates, MOA, and tax details."
      />
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Important Documents</h1>
          <p className="text-lg text-muted-foreground">
            Transparency and accountability are at our core. Here you can find our official documents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={doc.src}
                      alt={doc.alt}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-center text-sm">{doc.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-screen-xl h-[90vh] p-0">
                <img
                  src={doc.src}
                  alt={doc.alt}
                  className="w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </>
  );
};

export default Documents;
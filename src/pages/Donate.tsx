import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useConfetti } from "@/components/ConfettiProvider";
import SEO from "@/components/SEO";
import { QRCode } from "qrcode.react"; // Corrected import: named export

const Donate = () => {
  const upiId = "jeevanchetna@sbi";
  const { triggerConfetti } = useConfetti();

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    toast.success("UPI ID copied to clipboard!");
    triggerConfetti();
  };

  const handleCopyBankDetail = (detail: string) => {
    navigator.clipboard.writeText(detail);
    toast.success("Bank detail copied to clipboard!");
    triggerConfetti();
  };

  const generateUpiLink = () => {
    return `upi://pay?pa=${upiId}&pn=Jeevan%20Chetna%20Foundation&cu=INR`;
  };

  return (
    <>
      <SEO
        title="Donate to Jeevan Chetna Foundation | Support Our Cause"
        description="Make a difference by donating to Jeevan Chetna Foundation. Support our initiatives in education, healthcare, and community development through UPI or bank transfer."
      />
      <div className="container mx-auto max-w-2xl py-12 px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Support Our Cause</h1>
          <p className="text-lg text-muted-foreground">
            Your contribution helps us make a real difference in the lives of many.
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-primary text-3xl">Donate via BHIM UPI</CardTitle>
            <CardDescription className="text-lg">Scan the QR code or use our UPI ID to donate instantly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 flex flex-col items-center">
            {/* Dynamically generated QR Code */}
            <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200 block cursor-pointer">
              <QRCode
                value={generateUpiLink()}
                size={256} // Set a fixed size for the QR code
                level="H" // High error correction level
                renderAs="svg" // Render as SVG for better scalability
                imageSettings={{
                  src: "/jeevanchetna-logo.png", // Use the new logo in the center of the QR code
                  x: null,
                  y: null,
                  height: 60,
                  width: 60,
                  excavate: true,
                }}
              />
            </div>

            {/* UPI ID with Copy Button */}
            <div className="w-full max-w-sm space-y-2 text-center">
              <Label className="text-lg font-semibold text-foreground">Our UPI ID</Label>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-muted-foreground font-mono text-xl">{upiId}</p>
                <Button variant="ghost" size="icon" onClick={handleCopyUpi} className="text-primary hover:text-primary/80">
                  <Copy className="h-5 w-5" />
                  <span className="sr-only">Copy Jeevan Chetna Foundation UPI ID</span>
                </Button>
              </div>
            </div>

            {/* Direct Pay Button */}
            <Button asChild className="w-full max-w-sm bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
              <a href={generateUpiLink()} onClick={triggerConfetti}>Pay with BHIM UPI App</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-primary">Bank Transfer</CardTitle>
            <CardDescription>Direct bank transfer details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Account Name</h3>
              <div className="flex items-center space-x-2">
                <p className="text-muted-foreground">Jeevan Chetna Foundation</p>
                <Button variant="ghost" size="icon" onClick={() => handleCopyBankDetail("Jeevan Chetna Foundation")}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy Account Name</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Account Number</h3>
              <div className="flex items-center space-x-2">
                <p className="text-muted-foreground">44208565753</p>
                <Button variant="ghost" size="icon" onClick={() => handleCopyBankDetail("44208565753")}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy Account Number</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">IFSC Code</h3>
              <div className="flex items-center space-x-2">
                <p className="text-muted-foreground">SBIN0000646</p>
                <Button variant="ghost" size="icon" onClick={() => handleCopyBankDetail("SBIN0000646")}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy IFSC Code</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Bank Name</h3>
              <div className="flex items-center space-x-2">
                <p className="text-muted-foreground">State Bank of India</p>
                <Button variant="ghost" size="icon" onClick={() => handleCopyBankDetail("State Bank of India")}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy Bank Name</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Branch</h3>
              <div className="flex items-center space-x-2">
                <p className="text-muted-foreground">Haldwani Main Branch</p>
                <Button variant="ghost" size="icon" onClick={() => handleCopyBankDetail("Haldwani Main Branch")}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy Branch</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Donate;
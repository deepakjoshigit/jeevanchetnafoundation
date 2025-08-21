import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { useState, useCallback } from "react";
import { toast } from "sonner";
import { useConfetti } from "@/components/ConfettiProvider";
import SEO from "@/components/SEO";
import { QRCode } from "qrcode.react"; // Changed to named import

const Donate = () => {
  const upiId = "jeevanchetna@sbi";
  const [amount, setAmount] = useState<string>("");
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

  // Use useCallback to memoize the UPI link generation
  const getUpiLink = useCallback(() => {
    if (!amount || parseFloat(amount) <= 0) {
      return ""; // Return empty string if amount is invalid
    }
    // Construct the UPI deep link
    return `upi://pay?pa=${upiId}&pn=Jeevan%20Chetna%20Foundation&am=${amount}&cu=INR`;
  }, [amount, upiId]);

  const handleUpiPayment = () => {
    const link = getUpiLink();
    if (link) {
      triggerConfetti();
      toast.success("Opening UPI app...");
      window.location.href = link; // Attempt to open UPI app
    } else {
      toast.error("Please enter a valid amount to donate.");
    }
  };

  const isValidAmount = parseFloat(amount) > 0;

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

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Donate via UPI</CardTitle>
            <CardDescription>Scan the QR code or use the UPI ID to donate instantly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              {/* Dynamic QR code */}
              {isValidAmount ? (
                <div className="p-2 border border-gray-200 rounded-lg">
                  <QRCode value={getUpiLink()} size={192} level="H" />
                </div>
              ) : (
                <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg text-muted-foreground text-center">
                  Enter amount to generate QR
                </div>
              )}

              <div className="w-full max-w-sm space-y-2">
                <Label htmlFor="amount">Donation Amount (INR)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="e.g., 500"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                />
              </div>
              <Button
                className="w-full max-w-sm bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleUpiPayment}
                disabled={!isValidAmount}
              >
                Pay with UPI App
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Our UPI ID</h3>
              <div className="flex items-center space-x-2">
                <p className="text-muted-foreground font-mono">{upiId}</p>
                <Button variant="ghost" size="icon" onClick={handleCopyUpi}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy UPI ID</span>
                </Button>
              </div>
            </div>
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
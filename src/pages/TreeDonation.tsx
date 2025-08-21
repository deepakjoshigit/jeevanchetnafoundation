import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const treePackages = [
  {
    title: "Plant a Single Tree",
    price: "₹500",
    description: "Your donation will plant one tree, contributing to a greener environment and supporting local communities.",
    trees: 1,
  },
  {
    title: "Grow a Small Grove",
    price: "₹2,000",
    description: "Help us plant 5 trees, creating a small grove that provides shade, improves air quality, and supports biodiversity.",
    trees: 5,
  },
  {
    title: "Establish a Mini Forest",
    price: "₹4,500",
    description: "Donate for 10 trees and help establish a mini forest, making a significant impact on local ecosystems and climate resilience.",
    trees: 10,
  },
  {
    title: "Sponsor a Community Orchard",
    price: "₹10,000+",
    description: "Support a larger-scale plantation project, contributing to community orchards or reforestation efforts in critical areas.",
    trees: "20+",
  },
];

const TreeDonation = () => {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Plant a Tree, Grow a Future</h1>
        <p className="text-lg text-muted-foreground">
          Your contribution helps us expand our green initiatives and combat climate change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {treePackages.map((pkg, index) => (
          <Card key={index} className="flex flex-col justify-between hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
              <CardDescription className="text-lg text-primary">{pkg.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-muted-foreground text-center">{pkg.description}</p>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Estimated Trees Planted: {pkg.trees}
                </p>
              </div>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center space-y-4">
        <h2 className="text-2xl font-bold text-primary">How Your Donation Helps</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Every tree planted contributes to a healthier planet by absorbing carbon dioxide, providing oxygen, supporting wildlife, and preventing soil erosion. Your support also helps us engage local communities in sustainable environmental practices.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          All donations for tree plantation are channeled directly into purchasing saplings, preparing land, planting, and nurturing the trees, as well as community engagement and awareness programs.
        </p>
      </div>
    </div>
  );
};

export default TreeDonation;
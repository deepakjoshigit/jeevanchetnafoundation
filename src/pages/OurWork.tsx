import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SEO from "@/components/SEO"; // New import

const projects = [
  {
    title: "Educational Support Program",
    description: "Providing free tuition, school supplies, and mentorship to over 500 children in rural areas.",
    image: "https://images.unsplash.com/photo-1546410531-bb45ec967689?q=80&w=1200&auto=format&fit=crop", // Children in a classroom
  },
  {
    title: "Community Health Camps",
    description: "Organizing monthly health check-up camps, providing free medical consultations and medicines.",
    image: "https://images.unsplash.com/photo-1532938911079-cd88517ba765?q=80&w=1200&auto=format&fit=crop", // Medical camp/checkup
  },
  {
    title: "Women Empowerment Initiative",
    description: "Skill development workshops and financial literacy programs for women to foster entrepreneurship.",
    image: "https://images.unsplash.com/photo-1524508762098-fd9f6a6b2777?q=80&w=1200&auto=format&fit=crop", // Women learning/working together
  },
  {
    title: "Clean Water Project",
    description: "Installation of water purification systems in villages facing water scarcity and contamination issues.",
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1200&auto=format&fit=crop", // Person collecting water from a clean source
  },
];

const OurWork = () => {
  return (
    <>
      <SEO
        title="Our Work | Jeevan Chetna Foundation"
        description="Explore the impactful projects and initiatives of Jeevan Chetna Foundation, including educational support, health camps, women empowerment, and clean water projects."
      />
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Work</h1>
          <p className="text-lg text-muted-foreground">
            A glimpse into the initiatives that are making a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurWork;
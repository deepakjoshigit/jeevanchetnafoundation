import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects"; // Import projects from the new data file

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
            A glimpse into the initiatives that are making a difference. Click on any project to learn more!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link to={`/our-work/${project.id}`} key={project.id} className="block">
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurWork;
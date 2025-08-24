import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects"; // Import projects from the data file
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6 text-center">
        <SEO title="Project Not Found | Jeevan Chetna Foundation" description="The requested project could not be found." />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">Project Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We couldn't find a project with that ID. Please check the URL or go back to Our Work.
        </p>
        <Link to="/our-work">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Our Work
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} | Jeevan Chetna Foundation`}
        description={project.description}
      />
      <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
        <div className="mb-8">
          <Link to="/our-work">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Our Work
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-lg mb-8 shadow-md"
        />
        <div className="prose prose-lg max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: project.fullContent }} />
      </div>
    </>
  );
};

export default ProjectDetail;
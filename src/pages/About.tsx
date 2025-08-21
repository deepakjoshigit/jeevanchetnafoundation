import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, HandHeart, Leaf, Code, Brain, Lightbulb } from "lucide-react";

const teamMembers = [
  { name: "Deepak Joshi", role: "Director", avatar: "https://github.com/shadcn.png", fallback: "DJ" },
  { name: "Pravin Kumar Pandey", role: "Director", avatar: "https://github.com/shadcn.png", fallback: "PKP" },
  { name: "Dipesh Joshi", role: "Core Team Member", avatar: "https://github.com/shadcn.png", fallback: "DJ" },
  { name: "Kamal Tiwari", role: "Core Team Member", avatar: "https://github.com/shadcn.png", fallback: "KT" },
  { name: "Abhay Joshi", role: "Core Team Member", avatar: "https://github.com/shadcn.png", fallback: "AJ" },
  { name: "Bhasker Rawat", role: "Core Team Member", avatar: "https://github.com/shadcn.png", fallback: "BR" },
  { name: "Sanjay Pandey", role: "Core Team Member", avatar: "https://github.com/shadcn.png", fallback: "SP" },
  { name: "Kavita Joshi", role: "Core Team Member", avatar: "https://github.com/shadcn.png", fallback: "KJ" },
  { name: "Hema Joshi", role: "Core Team Member", avatar: "https://github.com/shadcn.png", fallback: "HJ" },
];

const About = () => {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">About Jeevan Chetna Foundation</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission, vision, values, and the dedicated team driving our initiatives.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Our Mission & Vision</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              <strong>Mission:</strong> To empower marginalized communities through comprehensive initiatives in education, healthcare, and sustainable livelihoods. We strive to create a society where every individual has the opportunity to live a life of dignity and self-reliance.
            </p>
            <p>
              <strong>Vision:</strong> We envision a world where equitable opportunities lead to a just and sustainable society. Our goal is to be a catalyst for positive change, fostering an environment of growth, learning, and well-being for all.
            </p>
          </CardContent>
        </Card>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">Our Core Initiatives</h2>
          <p className="mt-3 text-md text-muted-foreground">
            Driving change through focused programs in key areas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Leaf className="h-6 w-6" />
              </div>
              <CardTitle>Environmental Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our tree plantation projects aim to combat deforestation, improve air quality, and restore ecological balance. We engage local communities in planting and nurturing trees, fostering a sense of ownership and environmental stewardship.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle>Computer & Digital Literacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide free computer coaching and digital literacy programs to equip individuals with essential skills for the modern world. This includes basic computer operations, internet usage, and software proficiency, opening doors to new opportunities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <Code className="h-6 w-6" />
              </div>
              <CardTitle>AI & Coding Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Recognizing the future of technology, we offer advanced training in Artificial Intelligence and coding. These programs are designed to empower youth with in-demand skills, preparing them for careers in the tech industry and fostering innovation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                <HandHeart className="h-6 w-6" />
              </div>
              <CardTitle>Healthcare Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We organize regular health camps, provide free medical consultations, and distribute essential medicines in underserved areas. Our focus is on preventive care, health education, and ensuring basic healthcare is accessible to all.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <Lightbulb className="h-6 w-6" />
              </div>
              <CardTitle>Women Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Through skill development workshops, vocational training, and financial literacy programs, we empower women to become self-reliant. We support them in starting small businesses and becoming active contributors to their families and communities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">Our Values</h2>
          <p className="mt-3 text-md text-muted-foreground">
            The principles that guide our work and interactions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Integrity</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">We operate with transparency, honesty, and accountability in all our endeavors.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Compassion</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">We approach our work with empathy and a deep understanding of the needs of the communities we serve.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Empowerment</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">We believe in equipping individuals with the tools and knowledge to uplift themselves and their communities.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Sustainability</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">Our solutions are designed for long-term impact, ensuring lasting positive change.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Collaboration</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">We foster partnerships with individuals, organizations, and government bodies to amplify our reach.</p></CardContent>
          </Card>
        </div>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">Our Dedicated Team</h2>
          <p className="mt-3 text-md text-muted-foreground">
            Guided by passionate individuals committed to our cause.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <Avatar className="mx-auto h-24 w-24">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HandHeart, BookOpen, Users, HeartHandshake, Leaf, ShieldCheck, Calendar, Award, Globe, School, Activity } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import SEO from "@/components/SEO";
import SocialMediaPopup from "@/components/SocialMediaPopup"; // New import

const slides = [
  {
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
    title: "Bringing Smiles to Children",
    description: "Our events focus on creating a happy and healthy environment for kids.",
    bgColor: "bg-rose-100"
  },
  {
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop",
    title: "Community Engagement",
    description: "Working together with communities to build a brighter future.",
    bgColor: "bg-teal-100"
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    title: "Empowering Through Education",
    description: "Providing quality education and resources to underprivileged children.",
    bgColor: "bg-blue-100"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=1200&auto=format&fit=crop",
    title: "Accessible Healthcare for Communities",
    description: "Organizing health camps and awareness programs in remote areas.",
    bgColor: "bg-green-100"
  },
  {
    image: "https://images.unsplash.com/photo-15217375f902?q=80&w=1200&auto=format&fit=crop",
    title: "Fostering Women's Independence",
    description: "Skill development and financial literacy for women.",
    bgColor: "bg-purple-100"
  },
  {
    image: "https://images.unsplash.com/photo-1518837695005-2083393ee3b7?q=80&w=1200&auto=format&fit=crop",
    title: "A Greener Tomorrow",
    description: "Planting trees and promoting environmental sustainability.",
    bgColor: "bg-emerald-100"
  },
  {
    image: "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?q=80&w=1200&auto=format&fit=crop",
    title: "Clean Water for All",
    description: "Ensuring access to safe and clean drinking water in remote villages.",
    bgColor: "bg-cyan-100"
  },
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    title: "Strength in Unity",
    description: "Collaborating with volunteers and partners to maximize our impact.",
    bgColor: "bg-amber-100"
  }
];

const impactStats = [
  { value: "500+", label: "Children Educated", icon: BookOpen, color: "text-blue-600" },
  { value: "50+", label: "Health Camps", icon: HandHeart, color: "text-red-600" },
  { value: "200+", label: "Women Empowered", icon: Users, color: "text-purple-600" },
  { value: "10+", label: "Villages Impacted", icon: HeartHandshake, color: "text-green-600" },
  { value: "1000+", label: "Trees Planted", icon: Leaf, color: "text-emerald-600" },
  { value: "5+", label: "Years of Service", icon: Calendar, color: "text-amber-600" },
];

const initiatives = [
  {
    title: "Education for All",
    description: "Scholarships, school supplies, and digital learning programs for underprivileged children.",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Health Awareness",
    description: "Regular medical camps focusing on preventive healthcare and nutrition.",
    icon: HandHeart,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Environmental Sustainability",
    description: "Tree plantation drives and waste management initiatives.",
    icon: Leaf,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Women Empowerment",
    description: "Vocational training and self-help group formations.",
    icon: Users,
    color: "bg-purple-100 text-purple-600"
  },
];

const testimonials = [
  {
    quote: "Jeevan Chetna gave my daughter the opportunity to continue her education when we couldn't afford it.",
    author: "Ramesh Kumar, Parent"
  },
  {
    quote: "The health camp detected my diabetes early. I'm grateful for their free check-ups.",
    author: "Sunita Devi, Beneficiary"
  },
  {
    quote: "The tailoring course helped me start my own small business and support my family.",
    author: "Meena Sharma, Women's Program Participant"
  }
];

const upcomingEvents = [
  {
    title: "Annual Health Camp",
    date: "June 15, 2024",
    description: "Free medical checkups and medicines for 500+ villagers",
    icon: Activity
  },
  {
    title: "Education Fair",
    date: "July 20, 2024",
    description: "Scholarship distribution and career counseling session",
    icon: School
  },
  {
    title: "Environment Day Celebration",
    date: "August 5, 2024",
    description: "Tree plantation drive across 5 villages",
    icon: Globe
  }
];

const achievements = [
  {
    title: "Best NGO Award 2023",
    description: "Recognized by Uttarakhand Government for outstanding social work",
    icon: Award
  },
  {
    title: "100% Transparency Certification",
    description: "Awarded by GiveIndia for financial transparency",
    icon: ShieldCheck
  },
  {
    title: "5000+ Lives Impacted",
    description: "Direct beneficiaries across our programs",
    icon: HeartHandshake
  }
];

const Home = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [showSocialMediaPopup, setShowSocialMediaPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenSocialMediaPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowSocialMediaPopup(true);
      }, 2000); // Show popup after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseSocialMediaPopup = () => {
    setShowSocialMediaPopup(false);
    localStorage.setItem("hasSeenSocialMediaPopup", "true");
  };

  return (
    <>
      <SEO
        title="Jeevan Chetna Foundation | Empowering Communities for a Better Future"
        description="Jeevan Chetna Foundation is a non-profit organization dedicated to empowering marginalized communities through education, healthcare, and sustainable livelihood initiatives in India. Donate or volunteer today!"
      />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {/* Hero Carousel */}
          <section className="w-full relative">
            <Carousel
              className="w-full"
              opts={{ loop: true }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className={`relative h-[60vh] md:h-[80vh] ${slide.bgColor}`}>
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
                        <div className="text-center text-white p-4 space-y-4 max-w-3xl">
                          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            {slide.title}
                          </h1>
                          <p className="text-lg md:text-xl">
                            {slide.description}
                          </p>
                          <div className="space-x-4 mt-6">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                              <Link to="/donate">Donate Now</Link>
                            </Button>
                            <Button variant="secondary" asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                              <Link to="/about">Learn More</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            </Carousel>
          </section>

          {/* Mission Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Mission & Vision</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    To undertake and promote programs that bring about qualitative improvement in the lives of people through education, health, and sustainable livelihood opportunities. We envision a society where every individual has access to basic necessities and opportunities for growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stats */}
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-4 md:px-6">
              {impactStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <stat.icon className={`h-12 w-12 mb-4 ${stat.color}`} />
                  <h3 className="text-4xl font-bold">{stat.value}</h3>
                  <p className="text-lg text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Initiatives */}
          <section className="w-full py-12 md:py-24 bg-secondary/10">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Key Initiatives</h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground mt-4">
                  We focus on multiple areas to create holistic development in communities
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {initiatives.map((initiative, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className={`p-3 rounded-full ${initiative.color}`}>
                        <initiative.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{initiative.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{initiative.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Approach</h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground mt-4">
                  How we create sustainable impact in communities
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Community-Centric</h3>
                  <p className="text-muted-foreground">
                    We work closely with local communities to understand their needs and develop tailored solutions that address their specific challenges.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Sustainable Solutions</h3>
                  <p className="text-muted-foreground">
                    Our programs are designed to create long-term impact through capacity building and empowerment rather than short-term relief.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Collaborative Model</h3>
                  <p className="text-muted-foreground">
                    We partner with government agencies, corporations, and other NGOs to maximize our reach and effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="w-full py-12 md:py-24 bg-gradient-to-r from-secondary/20 to-primary/10">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Upcoming Events</h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground mt-4">
                  Join us in our upcoming initiatives and make a difference
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <event.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>{event.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                      <Button variant="link" className="mt-4 px-0 text-primary hover:text-primary/80">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Achievements</h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground mt-4">
                  Recognition for our commitment to social change
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="w-full py-12 md:py-24 bg-gradient-to-r from-secondary/30 to-accent/20">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Stories of Change</h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground mt-4">
                  Hear from those whose lives we've touched
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <blockquote className="space-y-4">
                        <p className="text-lg italic text-foreground">"{testimonial.quote}"</p>
                        <footer className="font-medium text-muted-foreground">{testimonial.author}</footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="w-full py-12 md:py-24 bg-primary">
            <div className="container px-4 md:px-6 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Join Us in Making a Difference</h2>
              <p className="max-w-[700px] mx-auto text-lg mb-8">
                Your support can help us reach more lives and create lasting change
              </p>
              <div className="space-x-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/donate">Donate Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Volunteer</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/our-work">See Our Work</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <SocialMediaPopup isOpen={showSocialMediaPopup} onClose={handleCloseSocialMediaPopup} />
    </>
  );
};

export default Home;
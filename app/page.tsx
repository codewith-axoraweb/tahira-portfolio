"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Download,
  Youtube,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const handleDownloadResume = async () => {
    const response = await fetch("/tahira.pdf");
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "Tahira-Resume.pdf");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="w-fit max-w-full text-left whitespace-normal border-primary text-primary"
                >
                  Available for freelance design projects
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight break-words">
                  Hi, I'm{" "}
                  <span className="text-primary">TAHIRA BATOOL</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                  Creative Graphic Designer
                </p>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
                  I design bold visuals that tell stories and build brands.
                  Specializing in brand identity, logo design, and social media
                  graphics that make a lasting impression.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/portfolio">
                    View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={handleDownloadResume}
                  className="w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>

              <div className="flex gap-4">
                <Button size="icon" variant="ghost" asChild>
                  <Link href="https://Youtube.com" target="_blank">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <Link
                    href="https://www.linkedin.com/in/tahira-batool-b47b60402?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <Link href="mailto:baatooltahira786@gmail.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-3xl opacity-20 animate-pulse" />
                <Image
                  src="/contentwriterhomepage.jpeg?height=400&width=400"
                  alt="TAHIRA BATOOL"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-primary/30 shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Featured Project
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-1">
              A showcase of my recent design work blending creativity with
              purposeful visual communication
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-48 sm:h-64 lg:h-auto min-h-[200px]">
                <Image
                  src="/worldwideartical.jpg?height=400&width=600"
                  alt="Featured Design Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Brand Identity
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-bold break-words">
                    Complete Brand Identity: Visual Design & Logo System
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    A full brand identity project covering logo design, color
                    palette, typography, and brand guidelines to create a
                    cohesive and memorable visual presence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Logo Design</Badge>
                    <Badge variant="outline">Brand Guidelines</Badge>
                    <Badge variant="outline">Typography</Badge>
                    <Badge variant="outline">Color Theory</Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
                    <Button asChild className="w-full sm:w-auto">
                      <Link
                        href="https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT"
                        target="_blank"
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link href="/portfolio">All Projects</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Skills & Tools
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Design tools and skills I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              "Canva",
              "Adobe Illustrator",
              "Photoshop",
              "Figma",
              "Logo Design",
              "Brand Identity",
              "Typography",
              "Color Theory",
              "Social Media",
              "Print Design",
              "UI Design",
              "Packaging",
            ].map((skill) => (
              <Card
                key={skill}
                className="p-3 sm:p-4 text-center hover:shadow-lg hover:border-primary/40 transition-all"
              >
                <CardContent className="p-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-base sm:text-lg">
                      {skill.charAt(0)}
                    </span>
                  </div>
                  <p className="font-medium text-xs sm:text-sm leading-tight break-words">
                    {skill}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/about">
                Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

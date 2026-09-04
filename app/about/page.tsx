import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next"
import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {
  title: "About TAHIRA BATOOL | Graphic Designer & Social Media Manager",
  description:
    "Learn about TAHIRA BATOOL, a Creative Graphic Designer & Social Media Manager from Multan, Punjab Pakistan. specializing in brand identity, social media management, marketing creatives, and visual communication.",
  keywords: [
    "TAHIRA BATOOL",
    "Graphic Designer",
    "Social Media Manager",
    "branding specialist",
    "logo designer",
    "social media designer",
    "graphic designer Pakistan",
    "freelance graphic designer",
    "Canva designer",
    "Adobe Illustrator",
    "Meta Ads",
    "digital marketing",
  ],
  authors: [{ name: "TAHIRA BATOOL" }],
  openGraph: {
    title: "About TAHIRA BATOOL | Graphic Designer & Social Media Manager",
    description:
      "Discover TAHIRA BATOOL's experience in graphic design, branding, social media management, and digital marketing.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/about-dpp.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "TAHIRA BATOOL - Graphic Designer & Social Media Manager",
      },
    ],
    siteName: "TAHIRA BATOOL Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About TAHIRA BATOOL | Graphic Designer & Social Media Manager",
    description:
      "Learn about TAHIRA BATOOL's experience in branding, social media management, and visual communication.",
    images: ["/about-dpp.jpg.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "TAHIRA BATOOL",
      jobTitle: "Graphic Designer | Branding Specialist | Social Media Manager",
      url: "https://storycup.vercel.app/about",
      email: "baatooltahira786@gmail.com",
      telephone: "+92 344-4091634",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bahawalpur",
        addressCountry: "Pakistan",
      },
      description:
        "TAHIRA BATOOL is a creative and detail-oriented Graphic Designer & Social Media Manager from Multan, Punjab Pakistan. with 2+ years of experience creating high-impact visual content and managing social media for businesses across the US, UAE, and international markets.",
      sameAs: [
        "https://www.linkedin.com/in/tahira-batool-b47b60402?utm_source=share_via&utm_content=profile&utm_medium=member_android/",
      ],
    }),
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <Image
              src="/alina-dp.jpeg"
              alt="TAHIRA BATOOL"
              fill
              className="rounded-full border-4 border-primary/30 object-cover object-top"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-2">
            TAHIRA BATOOL
          </h1>
          <p className="text-lg text-primary font-medium mb-4">
            Graphic Designer | Branding Specialist | Social Media Manager
          </p>
          <p className="text-muted-foreground mb-6">
            Multan, Punjab Pakistan. · +92 344-4091634 · baatooltahira786@gmail.com
          </p>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creative and detail-oriented Graphic Designer & Social Media Manager with 2+ years of experience creating high-impact visual content, managing social media, and supporting digital marketing campaigns for businesses across the US, UAE, and international markets. Skilled in branding, social media design, content creation, Meta Ads, marketing creatives, and business profiles, with a strong focus on visual consistency and audience engagement.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Experience
          </h2>

          <div className="space-y-8">

            {/* The Brand Bucks */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Graphic Design Specialist & Social Media Manager</CardTitle>
                    <p className="text-muted-foreground">The Brand Bucks</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Design high-converting marketing creatives, branding assets, and social media content for businesses across the UAE and US.</li>
                  <li>Develop brand identities, promotional materials, ad creatives, brochures, and digital marketing assets that strengthen brand recognition.</li>
                  <li>Manage social media strategy, content planning, and visual campaigns to improve audience engagement and online presence.</li>
                  <li>Collaborate directly with clients and cross-functional teams to deliver creative solutions aligned with business objectives.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Brand Identity</Badge>
                  <Badge variant="secondary">Marketing Creatives</Badge>
                  <Badge variant="secondary">Social Media</Badge>
                  <Badge variant="secondary">Client Collaboration</Badge>
                </div>
              </CardContent>
            </Card>

            {/* HomeFix Professionals LLC */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Senior Graphic Designer</CardTitle>
                    <p className="text-muted-foreground">HomeFix Professionals LLC</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Design branding materials, promotional graphics, and marketing assets for a home improvement company serving the U.S. market.</li>
                  <li>Create engaging social media campaigns, advertisements, and digital content to support lead generation and customer engagement.</li>
                  <li>Develop visually consistent branding across websites, social media platforms, and marketing materials.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Branding</Badge>
                  <Badge variant="secondary">Social Media Campaigns</Badge>
                  <Badge variant="secondary">Marketing Assets</Badge>
                </div>
              </CardContent>
            </Card>

            {/* The Evolvers International School */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Social Media Marketing Manager</CardTitle>
                    <p className="text-muted-foreground">The Evolvers International School</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Managed the school's social media presence by developing content strategies and maintaining a consistent brand identity across digital platforms.</li>
                  <li>Designed promotional graphics, admission campaigns, brochures, and educational marketing materials to increase engagement and brand awareness.</li>
                  <li>Collaborated with the management team to execute creative marketing initiatives and strengthen the school's online presence.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Content Strategy</Badge>
                  <Badge variant="secondary">Educational Marketing</Badge>
                  <Badge variant="secondary">Brand Identity</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Monix BPO */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Social Media Manager</CardTitle>
                    <p className="text-muted-foreground">Monix BPO Pvt Ltd</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Led graphic design projects, creating branding materials, social media creatives, promotional campaigns, and marketing assets for multiple brands.</li>
                  <li>Managed social media content planning, scheduling, and visual strategy to improve audience engagement and brand visibility.</li>
                  <li>Collaborated with marketing teams to deliver creative campaigns that aligned with business objectives and strengthened brand identity.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Social Media Strategy</Badge>
                  <Badge variant="secondary">Campaign Design</Badge>
                  <Badge variant="secondary">Brand Visibility</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Genoa Designs */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Social Media Designer & Marketing Support</CardTitle>
                    <p className="text-muted-foreground">Genoa Designs</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Designed engaging and on-brand social media creatives to strengthen the company’s digital presence and brand identity.</li>
                  <li>Developed a professional Business Profile / Company Profile, organizing services, brand information, and visual content into a polished presentation.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Social Media Design</Badge>
                  <Badge variant="secondary">Company Profile</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Orac Digital */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Social Media Manager</CardTitle>
                    <p className="text-muted-foreground">Orac Digital</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Managed the company’s Instagram presence, including content planning, creative direction, posting, and overall page presentation.</li>
                  <li>Designed engaging social media posts and marketing creatives to maintain a consistent and professional brand identity.</li>
                  <li>Developed content around digital marketing services to improve audience engagement, brand visibility, and online presence.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Instagram Management</Badge>
                  <Badge variant="secondary">Content Planning</Badge>
                  <Badge variant="secondary">Digital Marketing</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Mirqat International Quran Academy */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Digital Marketing & Social Media Specialist</CardTitle>
                    <p className="text-muted-foreground">Mirqat International Quran Academy</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Managed and executed Meta Ads campaigns to promote online academic programs and reach relevant target audiences.</li>
                  <li>Created marketing creatives, promotional posts, and educational content for Facebook and other digital platforms.</li>
                  <li>Managed the Facebook page and supported overall digital marketing activities, including content planning, audience engagement, and brand promotion.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Meta Ads</Badge>
                  <Badge variant="secondary">Educational Content</Badge>
                  <Badge variant="secondary">Facebook Management</Badge>
                </div>
              </CardContent>
            </Card>

            {/* The Central Public School */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>English Teacher</CardTitle>
                    <p className="text-muted-foreground">The Central Public School</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Delivered English language instruction while creating engaging lesson plans and educational materials to enhance student learning.</li>
                  <li>Designed presentations, classroom resources, certificates, and promotional materials to support academic activities and school events.</li>
                  <li>Fostered strong communication, creativity, and organizational skills through classroom management and student mentoring.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Educational Materials</Badge>
                  <Badge variant="secondary">Presentation Design</Badge>
                  <Badge variant="secondary">Communication</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Design & Branding
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Logo & Brand Identity</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Social Media Graphics</span>
                    <span>96%</span>
                  </div>
                  <Progress value={96} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Marketing Creatives</span>
                    <span>93%</span>
                  </div>
                  <Progress value={93} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Design Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Canva</span>
                    <span>98%</span>
                  </div>
                  <Progress value={98} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Adobe Photoshop</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Adobe Illustrator</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Digital Marketing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Social Media Management</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Meta Ads / Business Suite</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Content Planning</span>
                    <span>93%</span>
                  </div>
                  <Progress value={93} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>BS Applied Linguistics</CardTitle>
                    <p className="text-muted-foreground">Virtual University · In Progress</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Currently pursuing a Bachelor of Science in Applied Linguistics, strengthening communication, language, and analytical skills that support professional content creation and brand messaging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Bachelor of Arts (BA)</CardTitle>
                    <p className="text-muted-foreground">University of the Punjab</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed Bachelor of Arts degree providing a strong foundation in communication, critical thinking, and academic skills.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Core Competencies
          </h2>

          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Graphic Design",
                  "Branding & Identity Design",
                  "Social Media Management",
                  "Visual Content Creation",
                  "Marketing Design",
                  "Print & Digital Media",
                  "Content Planning",
                  "Brand Strategy",
                  "Creative Problem Solving",
                  "Client Communication",
                  "Team Collaboration",
                  "Time Management",
                  "Presentation Design",
                  "Advertising Creatives",
                  "Campaign Design",
                  "Meta Ads",
                  "Canva",
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Figma",
                  "Adobe InDesign",
                ].map((specialty) => (
                  <Badge
                    key={specialty}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Languages
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-4 text-center">
                <div>
                  <p className="font-medium">English</p>
                  <p className="text-sm text-muted-foreground">Professional Working Proficiency</p>
                </div>
                <div>
                  <p className="font-medium">Urdu</p>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
                <div>
                  <p className="font-medium">Punjabi</p>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
                <div>
                  <p className="font-medium">Persian</p>
                  <p className="text-sm text-muted-foreground">Basic</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}
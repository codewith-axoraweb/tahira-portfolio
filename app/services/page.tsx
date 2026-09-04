import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Layers, Palette, Monitor, Printer, MessageCircle, Sparkles } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TAHIRA BATOOL's Services - Graphic Design & Brand Identity",
  description:
    "Hire TAHIRA BATOOL for professional graphic design services including brand identity, logo design, social media graphics, and print design in Pakistan.",
  keywords: [
    "graphic design services",
    "logo design Pakistan",
    "brand identity designer",
    "social media graphic design",
    "print design services",
    "freelance graphic designer Pakistan",
    "Canva designer",
    "visual design services",
    "professional graphic designer",
    "creative design services",
  ],
  authors: [{ name: "TAHIRA BATOOL" }],
  openGraph: {
    title: "TAHIRA BATOOL's Services - Graphic Design & Brand Identity",
    description:
      "TAHIRA BATOOL offers expert graphic design services including brand identity, logo design, social media graphics, and print design for businesses worldwide.",
    type: "website",
    url: "https://storycup.vercel.app/services",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TAHIRA BATOOL Graphic Design Services",
      },
    ],
    siteName: "TAHIRA BATOOL Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAHIRA BATOOL's Services - Graphic Design & Brand Identity",
    description:
      "Hire TAHIRA BATOOL for professional graphic design, logo design, and brand identity services.",
    images: ["/services-og-image.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/services",
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
      "@type": "Service",
      serviceType: "Graphic Design",
      provider: {
        "@type": "Person",
        name: "TAHIRA BATOOL",
      },
      url: "https://storycup.vercel.app/services",
      description:
        "TAHIRA BATOOL provides professional graphic design services including brand identity, logo design, social media graphics, and print design for businesses globally.",
      areaServed: ["Pakistan", "USA", "Dubai", "Australia", "UK"],
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        description: "Professional graphic design services including logo design, brand identity, and social media graphics",
      },
    }),
  },
}

const services = [
  {
    icon: Sparkles,
    title: "Logo & Brand Identity",
    description:
      "A complete brand identity system — logo, color palette, typography, and brand guidelines that tell your story consistently across every touchpoint.",
    features: [
      "Custom Logo Design",
      "Color Palette & Typography",
      "Brand Guidelines Document",
      "Multiple Format Deliverables",
    ],
    price: "Starting at $50",
  },
  {
    icon: Monitor,
    title: "Social Media Graphics",
    description:
      "Scroll-stopping visuals for Instagram, Facebook, LinkedIn, and more. Templates and custom graphics that keep your brand looking polished and consistent.",
    features: [
      "Post & Story Templates",
      "On-Brand Visual Style",
      "Multiple Platform Sizes",
      "Editable Canva Files",
    ],
    price: "Starting at $30",
  },
  {
    icon: Printer,
    title: "Print & Marketing Design",
    description:
      "Print-ready marketing materials that make a strong offline impression — from business cards to banners, brochures to flyers.",
    features: [
      "Flyers & Brochures",
      "Business Cards & Stationery",
      "Banners & Posters",
      "Print-Ready File Delivery",
    ],
    price: "Starting at $20",
  },
  {
    icon: Layers,
    title: "Packaging & Product Design",
    description:
      "Product packaging that communicates your brand values at the point of purchase and creates a memorable experience for your customers.",
    features: [
      "Label & Packaging Design",
      "Product Mockups",
      "Brand-Aligned Aesthetics",
      "Production-Ready Files",
    ],
    price: "Starting at $40",
  },
]

const packages = [
  {
    name: "Starter",
    price: "$20",
    description: "Perfect for small businesses and personal brands",
    features: [
      "Logo design (2 concepts)",
      "3 social media post designs",
      "1 flyer or business card",
      "PNG & PDF deliverables",
      "Email support",
    ],
    popular: false,
    discount: "25% OFF",
  },
  {
    name: "Professional",
    price: "$75",
    description: "Ideal for growing brands and entrepreneurs",
    features: [
      "Full brand identity (logo + palette + fonts)",
      "10 social media graphics",
      "Print collateral (flyer, card, brochure)",
      "Brand guidelines document",
      "Priority support",
    ],
    popular: true,
    discount: "30% OFF",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description: "For brands with comprehensive design needs",
    features: [
      "Complete brand overhaul",
      "Unlimited design revisions",
      "Full social media kit",
      "Packaging & product design",
      "Dedicated design support",
    ],
    popular: false,
    discount: "",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Graphic Design Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bold, purposeful design that builds brands, attracts audiences, and makes every visual count.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing Packages</h2>
            <p className="text-lg text-muted-foreground">Flexible design solutions for every stage of your brand</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-primary shadow-lg" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                {pkg.discount && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded z-10 shadow">
                    {pkg.discount}
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Design Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your brand, goals, and target audience" },
              { step: "02", title: "Concept", description: "Sketching ideas and developing initial design directions" },
              { step: "03", title: "Design", description: "Crafting polished visuals with precision and creativity" },
              { step: "04", title: "Delivery", description: "Final revisions, approval, and all file formats handed over" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What design tools do you use?",
                answer:
                  "I primarily work with Canva Pro, Adobe Illustrator, and Adobe Photoshop to deliver professional, high-quality designs.",
              },
              {
                question: "How many revisions are included?",
                answer:
                  "All packages include 2 rounds of revisions. Additional revision rounds can be arranged at a small extra fee.",
              },
              {
                question: "What file formats will I receive?",
                answer:
                  "You'll receive all files in PNG, JPG, PDF, and where applicable, editable source files (AI, SVG, or Canva).",
              },
              {
                question: "What is your turnaround time?",
                answer:
                  "Most projects are delivered within 3–5 business days. Rush delivery is available on request.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
              <p className="text-muted-foreground mb-6">
                Let's create something visually powerful together. Share your idea and I'll bring it to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/portfolio">View Design Work</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}

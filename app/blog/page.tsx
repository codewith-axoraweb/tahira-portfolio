import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Search, ArrowRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TAHIRA BATOOL's Blog | Graphic Design Tips & Inspiration",
  description:
    "Explore TAHIRA BATOOL's blog for practical insights on graphic design, brand identity, color theory, typography, Canva tips, and visual design trends.",
  keywords: [
    "graphic design blog",
    "design tips",
    "brand identity tips",
    "color theory",
    "typography tips",
    "Canva tips",
    "logo design tips",
    "social media design",
    "visual design trends",
    "design inspiration",
    "freelance designer blog",
    "designer Pakistan",
  ],
  authors: [{ name: "TAHIRA BATOOL" }],
  openGraph: {
    title: "TAHIRA BATOOL's Blog | Graphic Design Tips & Inspiration",
    description:
      "Read TAHIRA BATOOL's latest articles covering graphic design, branding, color theory, typography, Canva, and design trends.",
    type: "website",
    url: "https://storycup.vercel.app/blog",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TAHIRA BATOOL Blog - Graphic Design Tips and Inspiration",
      },
    ],
    siteName: "TAHIRA BATOOL Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAHIRA BATOOL's Blog | Graphic Design Tips & Inspiration",
    description:
      "Discover practical graphic design, branding, color theory, and typography insights from TAHIRA BATOOL.",
    images: ["/bBiography.webp"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/blog",
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
}

const blogPosts = [
  {
    id: 1,
    title: "The Power of Color in Brand Identity",
    excerpt:
      "How to use color psychology strategically in brand design — from choosing a primary palette to understanding emotional associations that shape how audiences perceive your brand.",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
    category: "Color Theory",
    date: "2024-04-10",
    readTime: "6 min read",
    liveUrl: "https://medium.com",
    featured: true,
  },
  {
    id: 2,
    title: "Logo Design Rules Every Designer Should Know",
    excerpt:
      "Five fundamental principles that separate forgettable logos from iconic ones — simplicity, versatility, timelessness, relevance, and memorability explained with real examples.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    category: "Logo Design",
    date: "2024-04-05",
    readTime: "7 min read",
    liveUrl: "https://medium.com",
    featured: true,
  },
  {
    id: 3,
    title: "Typography Basics: Choosing Fonts That Work",
    excerpt:
      "A beginner-friendly guide to pairing typefaces, understanding hierarchy, and using fonts to reinforce brand personality — without overwhelming your design.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    category: "Typography",
    date: "2024-03-28",
    readTime: "8 min read",
    liveUrl: "https://medium.com",
    featured: true,
  },
  {
    id: 4,
    title: "How to Design Scroll-Stopping Instagram Posts",
    excerpt:
      "Practical techniques for creating social media graphics that grab attention in a crowded feed — layout tricks, contrast, and visual hierarchy tips using Canva.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    category: "Social Media Design",
    date: "2024-03-20",
    readTime: "7 min read",
    liveUrl: "https://medium.com",
    featured: false,
  },
  {
    id: 5,
    title: "Canva Pro vs Adobe Illustrator: Which Should You Use?",
    excerpt:
      "A straightforward comparison of Canva Pro and Adobe Illustrator for freelance graphic designers — when to use each tool based on project type, budget, and skill level.",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1200&q=80",
    category: "Design Tools",
    date: "2024-03-15",
    readTime: "7 min read",
    liveUrl: "https://medium.com",
    featured: false,
  },
  {
    id: 6,
    title: "What Makes a Brand Identity Feel Premium?",
    excerpt:
      "Breaking down the visual and strategic elements that give certain brands a premium, high-end feel — spacing, contrast, restraint, and consistency explained.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    category: "Brand Identity",
    date: "2024-03-10",
    readTime: "6 min read",
    liveUrl: "https://medium.com",
    featured: false,
  },
  {
    id: 7,
    title: "Print Design vs Digital Design: Key Differences",
    excerpt:
      "Everything you need to know about designing for print — color profiles, resolution, bleed, and why print files need different treatment than digital graphics.",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=1200&q=80",
    category: "Print Design",
    date: "2024-03-05",
    readTime: "7 min read",
    liveUrl: "https://medium.com",
    featured: false,
  },
  {
    id: 8,
    title: "Top Graphic Design Trends to Watch",
    excerpt:
      "A look at the design trends shaping brand visuals — from bold typography and maximalism to minimal gradients and retro revivals — and how to use them wisely.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    category: "Design Trends",
    date: "2024-02-28",
    readTime: "6 min read",
    liveUrl: "https://medium.com",
    featured: false,
  },
]

const categories = [
  "All",
  "Color Theory",
  "Logo Design",
  "Typography",
  "Brand Identity",
  "Social Media Design",
  "Design Tools",
  "Design Trends",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Design Insights & Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical articles on graphic design, branding, color theory,
            typography, and visual storytelling to help you design with intention.
          </p>
        </section>

        {/* Search and Categories */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 border-primary/30 focus:border-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary border-primary/30"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <a href={post.liveUrl} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                    <a href={post.liveUrl} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    <a href={post.liveUrl} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80"
                      asChild
                    >
                      <a href={post.liveUrl} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}

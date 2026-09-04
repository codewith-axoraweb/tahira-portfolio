import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TAHIRA BATOOL Portfolio | Graphic Design Work",
  description:
    "Explore TAHIRA BATOOL graphic design portfolio featuring brand identities, logo designs, social media graphics, print materials, and packaging design.",
  keywords: [
    "TAHIRA BATOOL portfolio",
    "graphic design portfolio",
    "logo design portfolio",
    "brand identity design",
    "social media graphic design",
    "print design portfolio",
    "packaging design",
    "freelance graphic designer",
    "visual design portfolio",
    "Canva designer portfolio",
    "designer Pakistan",
  ],
  authors: [{ name: "TAHIRA BATOOL" }],
  openGraph: {
    title: "TAHIRA BATOOL Portfolio | Graphic Design Work",
    description:
      "A curated selection of graphic design projects including brand identities, logos, social media graphics, print materials, and packaging.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [{ url: "/work1.png", width: 1200, height: 630, alt: "TAHIRA BATOOL Graphic Design Portfolio" }],
    siteName: "TAHIRA BATOOL Portfolio",
  },
  alternates: { canonical: "https://storycup.vercel.app/portfolio" },
  robots: { index: true, follow: true },
}

type Project = {
  id: number
  title: string
  image: string
  category: string
  liveUrl: string
  featured: boolean
}

function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {project.featured && (
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          Featured
        </Badge>
      )}
    </div>
  )
}

const projects: Project[] = [
  {
    id: 1,
    title: "Design Work 1",
    image: "/work1.png",
    category: "Brand Identity",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: true,
  },
  {
    id: 2,
    title: "Design Work 2",
    image: "/work2.png",
    category: "Logo Design",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: true,
  },
  {
    id: 3,
    title: "Design Work 3",
    image: "/work3.png",
    category: "Social Media",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: true,
  },
  {
    id: 4,
    title: "Design Work 4",
    image: "/work4.png",
    category: "Print Design",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 5,
    title: "Design Work 5",
    image: "/work5.png",
    category: "Print Design",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 6,
    title: "Design Work 6",
    image: "/work6.png",
    category: "Packaging",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 7,
    title: "Design Work 7",
    image: "/work7.png",
    category: "Social Media",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 8,
    title: "Design Work 8",
    image: "/work8.png",
    category: "Print Design",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 9,
    title: "Design Work 9",
    image: "/work9.png",
    category: "Brand Identity",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 10,
    title: "Design Work 10",
    image: "/work10.png",
    category: "Logo Design",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 11,
    title: "Design Work 11",
    image: "/work11.png",
    category: "Social Media",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 12,
    title: "Design Work 12",
    image: "/work12.jpg",
    category: "Print Design",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 13,
    title: "Design Work 13",
    image: "/work13.png",
    category: "Packaging",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 14,
    title: "Design Work 14",
    image: "/work14.jpg",
    category: "Brand Identity",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 15,
    title: "Design Work 15",
    image: "/work15.png",
    category: "Logo Design",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 16,
    title: "Design Work 16",
    image: "/work16.jpg",
    category: "Social Media",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 17,
    title: "Design Work 17",
    image: "/work17.jpg",
    category: "Print Design",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 18,
    title: "Design Work 18",
    image: "/work18.png",
    category: "Packaging",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 19,
    title: "Design Work 19",
    image: "/work19.jpg",
    category: "Brand Identity",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
  {
    id: 20,
    title: "Design Work 20",
    image: "/work20.jpg",
    category: "Social Media",
    liveUrl: "https://drive.google.com/drive/folders/1XZvc_n83lo1wqJCfop4mwqhZWU8Ip8PT",
    featured: false,
  },
]

const categories = ["All", "Brand Identity", "Logo Design", "Social Media", "Print Design", "Packaging"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">My Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of graphic design projects — brand identities, logos,
            social media graphics, print materials, and packaging design.
          </p>
        </section>

        {/* Tabs */}
        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex flex-wrap h-auto gap-1 w-full max-w-4xl mx-auto justify-center">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => cat === "All" || p.category === cat)
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all group"
                    >
                      <ProjectMedia project={project} />

                      <CardContent className="p-4 flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {project.category}
                        </Badge>
                        <Button
                          size="sm"
                          asChild
                          className="bg-primary hover:bg-primary/90 h-8 text-xs"
                        >
                          {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            View Work
                          </a> */}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <section className="text-center py-16">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Have a Design Project in Mind?</h2>
              <p className="text-muted-foreground mb-6">
                Whether you need a logo, brand identity, social media graphics,
                or print materials — let's create something beautiful together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/services">View Services</Link>
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
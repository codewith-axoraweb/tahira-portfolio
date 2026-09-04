import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
  <img
    src="/logo.png"
    alt="TAHIRA BATOOL   Logo"
    className="h-auto w-[150px] max-w-full object-contain sm:w-[200px] md:w-[220px] lg:w-[240px]"
  />
</div>
            <p className="text-muted-foreground">Designed with passion by your dedicated Graphic Designer</p>

            <div className="flex space-x-2">
              {/* <Button size="icon" variant="ghost" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button> */}
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.linkedin.com/in/tahira-batool-b47b60402?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="mailto: baatooltahira786@gmail.com  ">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-blue">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-blue">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-blue">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Logo & Brand Identity</span>
              </li>
              <li>
                <span className="text-muted-foreground">Social Media Graphics</span>
              </li>
              <li>
                <span className="text-muted-foreground">Print & Marketing Design</span>
              </li>
              <li>
                <span className="text-muted-foreground">Packaging & Product Design</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground"> baatooltahira786@gmail.com  </span>
              </li>
              <li>
                <span className="text-muted-foreground">+92 344-4091634</span>
              </li>
              <li>
                <span className="text-muted-foreground">Multan, Punjab Pakistan. </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TAHIRA BATOOL  . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

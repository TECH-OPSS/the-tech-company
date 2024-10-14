'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Code, GraduationCap, Layers, Users, Menu, X } from "lucide-react"
import Link from "next/link"

export function EnhancedLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-black text-white z-50">
        <Link className="flex items-center justify-center" href="#">
          <Layers className="h-6 w-6 text-gold" />
          <span className="ml-2 text-xl font-bold text-gold">TechOps Apex</span>
        </Link>
        <nav className={`ml-auto flex gap-4 sm:gap-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-black md:bg-transparent p-4 md:p-0`}>
          <Link className="text-sm font-medium hover:text-gold" href="#about">About</Link>
          <Link className="text-sm font-medium hover:text-gold" href="#services">Services</Link>
          <Link className="text-sm font-medium hover:text-gold" href="#partners">Partners</Link>
          <Link className="text-sm font-medium hover:text-gold" href="#contact">Contact</Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden text-white hover:text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-900 to-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gold">
                  Empowering Africa Through Technology
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  TechOps Apex Limited: Your partner in digital transformation and tech education
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gold text-black hover:bg-gold/90" size="lg">Get Started</Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-blue-900">About Us</h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <p className="text-black md:text-lg">
                  TechOps Apex Limited was founded with the vision of leveraging technology to build scalable and resilient
                  software solutions that address community challenges while empowering individuals through education.
                </p>
              </div>
              <Card className="bg-blue-900 text-white">
                <CardHeader>
                  <CardTitle className="text-gold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Empower individuals and organizations through technology education</li>
                    <li>Deliver scalable and innovative software solutions</li>
                    <li>Educate on building secure and simplified systems</li>
                    <li>Create opportunities for lifelong learning and technical upskilling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-blue-900">Our Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border border-gold">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <Code className="h-6 w-6 mr-2 text-gold" />
                    Software Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">Custom software solutions for web, mobile, and cloud platforms.</p>
                  <Button variant="link" className="mt-4 text-blue-900 hover:text-gold">Learn More</Button>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gold">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <GraduationCap className="h-6 w-6 mr-2 text-gold" />
                    EdTech Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">Coding bootcamps, technical communication courses, and corporate training.</p>
                  <Button variant="link" className="mt-4 text-blue-900 hover:text-gold">Explore Programs</Button>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gold">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <Layers className="h-6 w-6 mr-2 text-gold" />
                    Digital Transformation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">Helping organizations navigate the complexities of digital transformation.</p>
                  <Button variant="link" className="mt-4 text-blue-900 hover:text-gold">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-blue-900">Our Partners</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gray-100">
                <CardContent className="flex items-center justify-center p-6">
                  <Users className="h-12 w-12 text-gold" />
                </CardContent>
              </Card>
              <Card className="bg-gray-100">
                <CardContent className="flex items-center justify-center p-6">
                  <Users className="h-12 w-12 text-gold" />
                </CardContent>
              </Card>
              <Card className="bg-gray-100">
                <CardContent className="flex items-center justify-center p-6">
                  <Users className="h-12 w-12 text-gold" />
                </CardContent>
              </Card>
              <Card className="bg-gray-100">
                <CardContent className="flex items-center justify-center p-6">
                  <Users className="h-12 w-12 text-gold" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gold">Contact Us</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-white text-black">
                <CardHeader>
                  <CardTitle className="text-blue-900">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name">Name</label>
                      <Input id="name" placeholder="Your name" required className="border-gold" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <Input id="email" placeholder="Your email" type="email" required className="border-gold" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message">Message</label>
                      <Textarea id="message" placeholder="Your message" required className="border-gold" />
                    </div>
                    <Button type="submit" className="bg-gold text-black hover:bg-gold/90">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="bg-white text-black">
                <CardHeader>
                  <CardTitle className="text-blue-900">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>123 Tech Street, Innovation City</p>
                  <p>Nairobi, Kenya</p>
                  <p className="mt-4">Email: info@techopsapex.com</p>
                  <p>Phone: +254 123 456 789</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 TechOps Apex Limited. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link className="text-sm hover:text-gold" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-gold" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:text-gold" href="#">
              Careers
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
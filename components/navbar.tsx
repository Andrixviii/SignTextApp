"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-all-300 hover-scale">
          <Image 
              src="/images/logo.png" 
              alt="SignText Logo" 
              width={32} 
              height={32} 
              priority 
            />
            <span className="hidden font-bold sm:inline-block">SignText</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-all-300 hover-scale">
            Home
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-all-300 hover-scale">
            How It Works
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-all-300 hover-scale">
            About
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-all-300 hover-scale">
            Benefits
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-all-300 hover-scale">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="outline" className="hidden md:flex transition-all-300 hover-scale">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="hidden md:flex transition-all-300 hover-scale">
            <Link href="/signup">Sign up</Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden transition-all-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "container md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-64" : "max-h-0"
      )}>
        <nav className="flex flex-col space-y-3 pb-4">
          <Link 
            href="#testimonials" 
            className="text-sm font-medium hover:text-primary transition-all-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-sm font-medium hover:text-primary transition-all-300"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="#about" 
            className="text-sm font-medium hover:text-primary transition-all-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#benefits" 
            className="text-sm font-medium hover:text-primary transition-all-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link 
            href="#faq" 
            className="text-sm font-medium hover:text-primary transition-all-300"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Button asChild variant="outline" className="transition-all-300 hover-scale">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="transition-all-300 hover-scale">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
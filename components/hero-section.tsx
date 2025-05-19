import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(var(--chart-1),0.1),transparent)] animate-gradient" />
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm animate-fade-in">
              Welcome to SignText
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-slide-up stagger-1">
              Translate Sign Language into Clear Text Instantly
            </h1>
            <p className="text-muted-foreground md:text-xl animate-slide-up stagger-2">
              SignText helps you break communication barriers by converting hand gestures into written words — easy, fast, and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up stagger-3">
              <Button asChild size="lg" className="font-medium hover-scale">
                <Link href="/signup">Try SignText for Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground animate-fade-in stagger-4">
              Start translating sign language today. No credit card needed!
            </div>
          </div>
          <div className="relative animate-fade-in stagger-2">
            <div className="relative rounded-lg border bg-background p-2 shadow-lg transition-all-500 hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop"
                alt="SignText app demo"
                width={600}
                height={400}
                className="rounded-md object-cover w-full aspect-[4/3]"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -left-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-xl animate-float" />
            <div className="absolute -z-10 -right-8 -bottom-8 h-24 w-24 rounded-full bg-primary/20 blur-xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
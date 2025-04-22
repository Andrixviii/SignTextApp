import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground animate-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
              Real-Time Sign Language Translation
            </h2>
            <p className="max-w-[900px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center animate-slide-up stagger-1">
              SignText enables real-time translation of sign language into text, making communication with the deaf and hard-of-hearing community seamless and inclusive.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
            <Button asChild size="lg" variant="secondary" className="font-medium hover-scale">
              <Link href="/signup">
                Try SignText for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover-scale">
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
          <p className="text-sm opacity-80 animate-fade-in stagger-3">
            No credit card required. Start your journey with SignText today.
          </p>
        </div>
      </div>
    </section>
  );
}

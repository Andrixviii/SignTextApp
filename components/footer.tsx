import Link from "next/link";
import Image from "next/image";
import { Hand } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background mt-12">
      <div className="container px-4 py-12 md:py-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in">
        {/* Logo & Deskripsi */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 transition-all-300 hover-scale">
            <Image src="/images/logo.png" alt="SignText Logo" width={32} height={32} />
            <span className="font-bold text-lg">SignText</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            SignText helps bridge communication by translating sign language into text in real-time — empowering accessibility for all.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-all-300">Home</Link></li>
            <li><Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-all-300">How It Works</Link></li>
            <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-all-300">About</Link></li>
            <li><Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-all-300">Benefits</Link></li>
            <li><Link href="#faq" className="text-muted-foreground hover:text-foreground transition-all-300">FAQ</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/login" className="text-muted-foreground hover:text-foreground transition-all-300">Log in</Link></li>
            <li><Link href="/signup" className="text-muted-foreground hover:text-foreground transition-all-300">Sign up</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-all-300">Accessibility Guide</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-all-300">Blog</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-all-300">Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} SignText. Built with care to make communication accessible.
          </p>
        </div>
      </div>
    </footer>
  );
}

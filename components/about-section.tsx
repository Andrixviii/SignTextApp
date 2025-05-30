import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-background">
      {/* Decorative background bubbles */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container grid gap-16 md:grid-cols-2 items-center">
        {/* Visual Showcase */}
        <div className="relative animate-fade-in">
          <div className="rounded-2xl border bg-background p-3 shadow-2xl overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEOKAMU"
              title="SignText Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-5xl font-extrabold tracking-tight text-primary">
            SignText — A Bridge Between Signs and Words
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SignText makes communication across sign languages and text easier with AI-powered gesture recognition. We’re here to remove language barriers in the digital age.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Real-time Sign-to-Text & Text-to-Sign Translation.</li>
            <li>AI adaptive gesture detection, with more precise movement recognition.</li>
            <li>Designed for Accessibility — Simple, Friendly, Inclusive.</li>
            <li>Interactive guides to learn sign language from the app.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

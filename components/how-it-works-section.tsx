import {
  ClipboardCheck,
  PencilLine,
  UploadCloud,
  ShieldCheck,
} from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-fade-in">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
              How SignText Translates Sign Language
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up stagger-1">
              SignText uses smart camera input and AI to detect hand gestures and convert them into readable text in real time. Here's how it works.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<UploadCloud className="h-10 w-10" />}
            title="Start Camera"
            description="Open the app and allow access to your camera to begin gesture detection."
            delay="stagger-1"
          />
          <FeatureCard
            icon={<PencilLine className="h-10 w-10" />}
            title="Track Gestures"
            description="The system tracks your hand movements and identifies signs in real time."
            delay="stagger-2"
          />
          <FeatureCard
            icon={<ClipboardCheck className="h-10 w-10" />}
            title="Translate to Text"
            description="Each gesture is matched with a word or letter and displayed as text instantly."
            delay="stagger-3"
          />
          <FeatureCard
            icon={<ShieldCheck className="h-10 w-10" />}
            title="Secure & Private"
            description="Your video input stays on-device and is never stored or shared."
            delay="stagger-4"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div
      className={`flex flex-col items-center space-y-4 rounded-2xl border bg-background p-6
                  shadow-sm transition-transform duration-300 ease-in-out transform
                  hover:scale-105 hover:-translate-y-2 hover:shadow-xl
                  animate-scale-up ${delay}`}
    >
      <div className="rounded-full bg-primary/10 p-4 text-primary transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
}

import { Sparkles, Hand, Languages, Accessibility } from "lucide-react";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-24 bg-muted/50 relative overflow-hidden"
    >
      {/* Decorative Bubble */}
      <div className="absolute -top-20 -left-20 h-72 w-72 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div
        className="absolute -bottom-20 -right-20 h-72 w-72 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary animate-slide-up">
            Why Choose SignText?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
            The main advantages of SignText in connecting the world of sign language and text in real-time.
          </p>
        </div>

        <div className="flex flex-col space-y-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-4 w-full md:w-[90%] lg:w-[75%] mx-auto rounded-2xl bg-background shadow-md border border-border transition-all duration-500 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "both" }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4 md:mb-0 ml-4 mt-2">
                {benefit.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: <Hand className="w-6 h-6" />,
    title: "Real-time Sign Recognition",
    description:
      "Detect sign language directly with high accuracy using AI-powered gesture technology.",
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Text-to-Sign Translation",
    description:
      "Automatically convert text into sign language visualizations for inclusive two-way communication.",
  },
  {
    icon: <Accessibility className="w-6 h-6" />,
    title: "Inclusive Design",
    description:
      "Simple and user-friendly interface suitable for both deaf and hearing users.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Learning Mode",
    description:
      "Interactive learning features to easily understand and study sign language.",
  },
];

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="gradient-hero py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--genarch-charcoal))] mb-6 leading-tight">
          User Experience
          <span className="text-[hsl(var(--genarch-primary))] block">Testing Labs</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering startups and solo developers with comprehensive UX testing environments to explore user experiences, discover app limitations, and unlock your product's true potential.
        </p>

      </div>
    </section>
  );
}

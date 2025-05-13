
import { HeroSection } from "@/components/ui/hero-section-dark"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Welcome to XTech Solutions"
      subtitle={{
        regular: "Transform your business with ",
        gradient: "powerful technology solutions",
      }}
      description="Accelerate your digital transformation journey with our comprehensive suite of innovative technology services tailored to your unique business needs."
      ctaText="Explore Our Services"
      ctaHref="/services"
      bottomImage={{
        light: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        dark: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      }}
      gridOptions={{
        angle: 60,
        opacity: 0.4,
        cellSize: 40,
        lightLineColor: "rgba(111,86,232,0.3)",
        darkLineColor: "rgba(0,207,255,0.2)",
      }}
    />
  )
}
export { HeroSectionDemo }

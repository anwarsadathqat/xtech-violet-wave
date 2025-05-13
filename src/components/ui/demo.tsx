
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
      ctaText="Get Started"
      ctaHref="/contact"
      bottomImage={{
        light: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        dark: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  )
}
export { HeroSectionDemo }

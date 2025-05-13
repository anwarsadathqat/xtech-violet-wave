
import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-xtech-dark to-transparent to-90% dark:from-xtech-dark" />
    </div>
  )
}

// Modern floating elements for tech theme
const FloatingElements = () => {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-xl">
      {/* Central glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-xtech-purple to-xtech-blue rounded-full blur-md opacity-70 animate-pulse"></div>
      
      {/* Tech circuit lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-xtech-purple/40 to-transparent animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-xtech-blue/40 to-transparent animate-[pulse_4s_ease-in-out_infinite_0.5s]"></div>
        
        {/* Vertical lines */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-xtech-purple/40 to-transparent animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-xtech-blue/40 to-transparent animate-[pulse_4s_ease-in-out_infinite_1.5s]"></div>
      </div>
      
      {/* Floating particles/dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div 
          key={i}
          className={`absolute w-1.5 h-1.5 rounded-full bg-xtech-${i % 2 ? 'purple' : 'blue'}/70`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite alternate`
          }}
        ></div>
      ))}
      
      {/* Abstract tech shapes */}
      <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-xtech-purple/30 rounded-lg rotate-45 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-10 right-1/4 w-12 h-12 border border-xtech-blue/30 rounded-full animate-[float_7s_ease-in-out_infinite_0.5s]"></div>
      <div className="absolute top-1/2 right-16 w-10 h-10 border-2 border-xtech-purple/40 rounded-md animate-[float_5s_ease-in-out_infinite_1s]"></div>
      <div className="absolute bottom-1/3 left-16 w-8 h-8 border-2 border-xtech-blue/40 rounded-md rotate-12 animate-[float_8s_ease-in-out_infinite_1.5s]"></div>
      
      {/* Digital code/data visualization suggestion */}
      <div className="absolute bottom-8 left-1/3 right-1/3 h-4 flex items-center justify-center space-x-1 animate-[float_4s_ease-in-out_infinite]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className={`h-${1 + Math.floor(Math.random() * 3)} w-1 bg-xtech-${i % 2 ? 'purple' : 'blue'}/60 rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-xtech-purple/10 dark:bg-xtech-purple/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(111,86,232,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(111,86,232,0.3),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <h1 className="text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-xtech-purple/20 via-gray-400/20 to-transparent border-[2px] border-xtech-purple/20 rounded-3xl w-fit">
                {title}
                <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-xtech-light mx-auto md:text-6xl">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-xtech-purple to-xtech-blue animate-glow">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-xtech-light">
                {description}
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6F56E8_0%,#00CFFF_50%,#6F56E8_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-xtech-dark text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-xtech-purple/20 via-xtech-blue/30 to-transparent text-white border-xtech-purple/30 border-[1px] hover:bg-gradient-to-tr hover:from-xtech-purple/30 hover:via-xtech-blue/40 hover:to-transparent hover:border-xtech-purple/50 transition-all sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </span>
              </div>
            </div>
            <div className="mt-24 relative z-10 mx-auto max-w-4xl">
              <FloatingElements />
            </div>
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }


import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  tag?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = "left",
  tag,
}: SectionTitleProps) => {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`mb-12 ${alignClass}`}>
      {tag && (
        <span className="text-xs md:text-sm text-xtech-blue uppercase tracking-widest mb-3 block font-medium">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-xtech-purple to-xtech-blue bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-xtech-light text-lg mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;


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
    <div className={`mb-10 ${alignClass}`}>
      {tag && (
        <span className="text-xs text-xtech-blue uppercase tracking-wider mb-2 block">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-xtech-purple to-xtech-blue bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-xtech-light-gray text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

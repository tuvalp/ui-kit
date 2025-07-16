import React from "react";
import "./Text.css";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "bold";
  align?: "left" | "center" | "right";
  color?: string;
}

export  function Text({
  children,
  size = "md",
  weight = "normal",
  align = "left",
  color,
  style,
  className = "",
  ...rest
}: TextProps) {

  return (
    <span
      className={`text text-${size} text-${weight} text-align-${align} ${className}`}
      style={{ color, ...style }}
      {...rest}
    >
      {children}
    </span>
  );
}

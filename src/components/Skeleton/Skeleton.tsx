import React from "react";
import "./Skeleton.css";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  variant?: "rect" | "circle" | "text";
  animated?: boolean;
}

export default function Skeleton({
  width = "100%",
  height = "16px",
  variant = "rect",
  animated = true,
  style,
  className = "",
  ...rest
}: SkeletonProps) {
  const borderRadius = variant === "circle" ? "50%" : variant === "text" ? "4px" : "8px";

  return (
    <div
      className={`skeleton ${animated ? "skeleton-animated" : ""} ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
      {...rest}
    />
  );
}

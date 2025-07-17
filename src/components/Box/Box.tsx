import type { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  position?: "absolute" | "relative" | "fixed | sticky | static | initial | inherit" | "unset";
  wihth?: string;
  height?: string;
  background?: string;
  elvated?: boolean;
  padding?: string;
  margin?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  style?: React.CSSProperties;
}

export default function Box({
  children,
  position = "unset",
  wihth,
  height,
  background = "var(--color-surface)",
  elvated = false,
  padding,
  margin,
  top,
  left,
  right,
  bottom,
  zIndex,
  style,
  ...rest
}: BoxProps) {
  return (
    <div
      {...rest}
      style={{
        position: "absolute",
        display: "flex",
        boxShadow: elvated ? "var(--shadow-md)" : "none",
        width: wihth,
        height,
        background,
        padding,
        margin,
        top,
        left,
        right,
        bottom,
        zIndex,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

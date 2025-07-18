import type { ReactNode, HTMLAttributes } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  position?: "absolute" | "relative" | "fixed | sticky | static | initial | inherit" | "unset";
  width?: string;
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
  rest: any;
}

export default function Box({
  children,
  position = "unset",
  width,
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
        width: width,
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

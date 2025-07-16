import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string; // e.g. "fa-solid fa-user"
  size?: number; // optional size in px
  color?: string;
  type?: "solid" | "regular" | "light";
  spin?: boolean
}

export function Icon({
  name,
  size = 16,
  color = "#333",
  type = "solid",
  spin = false,
  style,
  ...rest
}: IconProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <i
        className={`fa-${type} fa-${name} ${spin ? "fa-spin" : ""}`}
        style={{
          fontSize: size,
          color,
          display: "inline-block",
          ...style,
        }}
        {...rest}
      />
    </>
  );
}

import React from "react";
import "./list.css";

interface ListProps {
  children: React.ReactNode;
  flex?: number;
  gap?: number;
  scrollable?: boolean;
  style?: React.CSSProperties;
}

export function List({
  children,
  flex = 1,
  gap = 0,
  scrollable = false,
  style,
  ...rest
}: ListProps) {
  return (
    <div
      className="list"
      {...rest}
      style={{
        flex,
        gap: `${gap}px`,
        overflowY: scrollable ? "auto" : "unset",
        ...style,
      }}
    >
      {React.Children.toArray(children)}
    </div>
  );
}

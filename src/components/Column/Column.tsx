import React from "react";

interface ColumnProps {
  children: React.ReactNode;
  alignItem?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justifyItem?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: number;
  style?: React.CSSProperties;
}

export function Column({
  children,
  style,
  alignItem,
  justifyItem,
  gap = 0,
  ...rest
}: ColumnProps) {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        alignItems: alignItem,
        justifyContent: justifyItem,
        flexDirection: "column",
        gap: `${gap}px`,
        ...style,
      }}
    >
      {React.Children.toArray(children)}
    </div>
  );
}

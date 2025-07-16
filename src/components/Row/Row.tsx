import React from "react";

interface RowProps {
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

export function Row({
  children,
  style,
  alignItem,
  justifyItem,
  gap = 0,
  ...rest
}: RowProps) {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flex: 1,
        alignItems: alignItem,
        justifyContent: justifyItem,
        flexDirection: "row",
        gap: `${gap}px`,
        ...style,
      }}
    >
      {React.Children.toArray(children)}
    </div>
  );
}

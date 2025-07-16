import React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: number;
  wrap?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export  function Grid({
  columns = 2,
  gap = 12,
  wrap = false,
  children,
  style,
  ...rest
}: GridProps) {
  const baseStyle: React.CSSProperties = wrap
    ? {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: `${gap}px`,
      }
    : {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      };

  return (
    <div className="grid" style={{ ...baseStyle, ...style }} {...rest}>
      {React.Children.toArray(children)}
    </div>
  );
}

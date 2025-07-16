import React from "react";

interface CenterProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Center({
  children,
  style,
  ...rest
}: CenterProps) {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {React.Children.toArray(children)}
    </div>
  );
}

import React from "react";

interface FlexProps {
  children?: React.ReactNode;
  alignItem?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  flex?: number;
  justifyItem?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  style?: React.CSSProperties;
}

export function Flex({
  children,
  style,
  alignItem,
  justifyItem,
  flex = 1,
  ...rest
}: FlexProps) {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flex: flex,
        alignItems: alignItem,
        justifyContent: justifyItem,
        flexDirection: "column",
        ...style,
      }}
    >
      {React.Children.toArray(children)}
    </div>
  );
}

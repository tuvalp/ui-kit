import React from "react";

interface PaddingProps {
  children: React.ReactNode;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  style?: React.CSSProperties;
}

export function Padding({
  children,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  style = {},
}: PaddingProps) {
  const paddingStyle: React.CSSProperties = {
    padding,
    ...(paddingTop !== undefined && { paddingTop }),
    ...(paddingBottom !== undefined && { paddingBottom }),
    ...(paddingLeft !== undefined && { paddingLeft }),
    ...(paddingRight !== undefined && { paddingRight }),
    ...style,
  };

  return <div style={paddingStyle}>{children}</div>;
}

import React from "react";
import "./Divider.css";

interface DividerProps {
  vertical?: boolean;
  dashed?: boolean;
  color?: string;
  thickness?: string;
  length?: string;
  spacing?: string; // margin
}

export  function Divider({
  vertical = false,
  dashed = false,
  color = "var(--color-border)",
  thickness = "1px",
  length = "100%",
  spacing = "12px 0",
}: DividerProps) {
  const style: React.CSSProperties = vertical
    ? {
        width: thickness,
        height: length,
        margin: `0 ${spacing}`,
        borderLeft: dashed ? `1px dashed ${color}` : `1px solid ${color}`,
      }
    : {
        height: thickness,
        width: length,
        margin: spacing,
        borderBottom: dashed ? `1px dashed ${color}` : `1px solid ${color}`,
      };

  return <div className="divider" style={style} />;
}

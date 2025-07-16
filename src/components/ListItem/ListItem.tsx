import React from "react";
import "./ListItem.css";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  alignItem?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justifyItem?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  padding?: string;
  gap?: number;
}

export  function ListItem({
  children,
  alignItem,
  justifyItem,
  padding = "8px 16px",
  gap = 8,
  style,
  ...rest
}: ListItemProps) {


  return (
      <div
        className="list-item"
        style={{
          alignItems: alignItem,
          justifyContent: justifyItem,
          padding,
          gap: `${gap}px`,
          ...style,
        }}
        {...rest}
      >
        {React.Children.toArray(children)}
      </div>
  );
}

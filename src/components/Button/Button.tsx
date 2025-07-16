import React from "react";
import "./Button.css";

import { Icon } from "../Icon/Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "primary" | "secondary" | "ghost" | "column" | "outline" | "icon" | "text" | "transparent";
  size?: "small" | "medium" | "large";
  active?: boolean;
  loading?: boolean;
  icon?: string;
  iconColor?: string;
}

export  function Button({
  label,
  children,
  variant = "secondary",
  size = "medium",
  className = "",
  active = false,
  loading = false,
  icon,
  iconColor,
  style,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${
        active ? "btn-active" : ""
      } ${className}`}
      style={style}
      {...rest}
    >
      {loading ? (
        <Icon name="circle-notch" spin />
      ) : (
        label ?? React.Children.toArray(children)
      )}
      {icon && <Icon name={icon} size={
        size === "small" ? 12 :
        size === "medium" ? 16 :
        size === "large" ? 20 : 16} 
        color={iconColor}
        />}

    </button>
  );
}

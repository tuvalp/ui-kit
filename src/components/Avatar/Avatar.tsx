import React from "react";
import "./Avatar.css";

import { Icon } from "../Icon/Icon";

interface AvatarProps {
  src?: string;
  alt?: string;
  label?: string;
  icon?: string;
  size?:  "xs" | "sm" | "md" | "lg";
  color?: string;
  round?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export  function Avatar({
  src,
  alt = "avatar",
  label,
  icon,
  color,
  size = "md",
  round = true,
  onClick,
  style,
  ...rest
}: AvatarProps) {
  return (
    <div
      {...rest}
      className={`avatar avatar-${size} ${round ? "avatar-round" : "avatar-square"}`}
      onClick={onClick}
      style={{...style, background: color || "#ccc"}}
    >
      {icon ? (
        <Icon name={icon} size={size === "sm" ? 12 : 16} />
      ) : src ? (
        <img src={src} alt={alt} className="avatar-image" />
      ) : label ? (
        <span className="avatar-label">{label}</span>
      ) : (
        <span className="avatar-label">?</span>
      )}
    </div>
  );
}

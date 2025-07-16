import React from "react";
import "./Avatar.css";
interface AvatarProps {
    src?: string;
    alt?: string;
    label?: string;
    icon?: string;
    size?: "xs" | "sm" | "md" | "lg";
    color?: string;
    round?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
}
export declare function Avatar({ src, alt, label, icon, color, size, round, onClick, style, ...rest }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export {};

import React from "react";
import "./Button.css";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "primary" | "secondary" | "ghost" | "column" | "outline" | "icon" | "text" | "transparent";
    size?: "small" | "medium" | "large";
    active?: boolean;
    loading?: boolean;
    icon?: string;
    iconColor?: string;
}
export declare function Button({ label, children, variant, size, className, active, loading, icon, iconColor, style, ...rest }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};

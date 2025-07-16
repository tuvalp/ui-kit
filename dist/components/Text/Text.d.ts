import React from "react";
import "./Text.css";
interface TextProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    weight?: "light" | "normal" | "medium" | "bold";
    align?: "left" | "center" | "right";
    color?: string;
}
export declare function Text({ children, size, weight, align, color, style, className, ...rest }: TextProps): import("react/jsx-runtime").JSX.Element;
export {};

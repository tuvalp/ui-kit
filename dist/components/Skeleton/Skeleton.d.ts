import React from "react";
import "./Skeleton.css";
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number;
    height?: string | number;
    variant?: "rect" | "circle" | "text";
    animated?: boolean;
}
export default function Skeleton({ width, height, variant, animated, style, className, ...rest }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
export {};

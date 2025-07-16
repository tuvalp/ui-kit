import React from "react";
interface CollapseProps {
    isOpen: boolean;
    children: React.ReactNode;
    duration?: number;
    style?: React.CSSProperties;
}
export declare function Collapse({ isOpen, children, duration, style, }: CollapseProps): import("react/jsx-runtime").JSX.Element;
export {};

import React from "react";
import "./list.css";
interface ListProps {
    children: React.ReactNode;
    flex?: number;
    gap?: number;
    scrollable?: boolean;
    style?: React.CSSProperties;
}
export declare function List({ children, flex, gap, scrollable, style, ...rest }: ListProps): import("react/jsx-runtime").JSX.Element;
export {};

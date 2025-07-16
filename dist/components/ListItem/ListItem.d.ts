import React from "react";
import "./ListItem.css";
interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    alignItem?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    justifyItem?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    padding?: string;
    gap?: number;
}
export declare function ListItem({ children, alignItem, justifyItem, padding, gap, style, ...rest }: ListItemProps): import("react/jsx-runtime").JSX.Element;
export {};

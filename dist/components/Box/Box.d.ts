import type { ReactNode } from "react";
interface BoxProps {
    children: ReactNode;
    position?: "absolute" | "relative" | "fixed | sticky | static | initial | inherit" | "unset";
    wihth?: string;
    height?: string;
    background?: string;
    elvated?: boolean;
    padding?: string;
    margin?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    style?: React.CSSProperties;
}
export default function Box({ children, position, wihth, height, background, elvated, padding, margin, top, left, right, bottom, style, ...rest }: BoxProps): import("react/jsx-runtime").JSX.Element;
export {};

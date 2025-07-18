import type { ReactNode, HTMLAttributes } from "react";
interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    position?: "absolute" | "relative" | "fixed | sticky | static | initial | inherit" | "unset";
    width?: string;
    height?: string;
    background?: string;
    elvated?: boolean;
    padding?: string;
    margin?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    zIndex?: number;
    style?: React.CSSProperties;
}
export default function Box({ children, position, width, height, background, elvated, padding, margin, top, left, right, bottom, zIndex, style, ...rest }: BoxProps): import("react/jsx-runtime").JSX.Element;
export {};

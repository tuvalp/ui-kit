import type { ReactNode } from "react";
import "./Card.css";
export interface CardProps {
    header?: ReactNode;
    headerBackground?: string;
    footer?: ReactNode;
    center?: ReactNode;
    children: ReactNode;
    elevted?: boolean;
    padding?: string;
    background?: string;
    style?: React.CSSProperties;
}
export declare const Card: React.FC<CardProps>;

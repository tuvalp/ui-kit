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

export const Card: React.FC<CardProps> = ({
  header,
  headerBackground,
  footer,
  center,
  elevted = false,
  padding = "8px",
  background,
  children,
  style,

  ...rest
}) => (
  <div
    className={`card ${elevted ? "card-elevated" : ""}`}
    {...rest}
    style={{
      background: background || undefined,
      ...(style || {}),
    }}
  >
    {header && (
      <div className="card-header" style={{ padding, background: headerBackground  }}>
        {header}
      </div>
    )}

    {center && <div className="card-center">{center}</div>}

    {children}

    {footer && <div className="card-footer">{footer}</div>}
  </div>
);

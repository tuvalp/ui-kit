import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Card.css";
export const Card = ({ header, headerBackground, footer, center, elevted = false, padding = "8px", background, children, style, ...rest }) => (_jsxs("div", { className: `card ${elevted ? "card-elevated" : ""}`, ...rest, style: {
        background: background || undefined,
        ...(style || {}),
    }, children: [header && (_jsx("div", { className: "card-header", style: { padding, background: headerBackground }, children: header })), center && _jsx("div", { className: "card-center", children: center }), children, footer && _jsx("div", { className: "card-footer", children: footer })] }));

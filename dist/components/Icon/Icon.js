import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export function Icon({ name, size = 16, color = "#333", type = "solid", spin = false, style, ...rest }) {
    return (_jsxs(_Fragment, { children: [_jsx("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }), _jsx("i", { className: `fa-${type} fa-${name} ${spin ? "fa-spin" : ""}`, style: {
                    fontSize: size,
                    color,
                    display: "inline-block",
                    ...style,
                }, ...rest })] }));
}

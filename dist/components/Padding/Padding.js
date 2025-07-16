import { jsx as _jsx } from "react/jsx-runtime";
export function Padding({ children, padding, paddingTop, paddingBottom, paddingLeft, paddingRight, style = {}, }) {
    const paddingStyle = {
        padding,
        ...(paddingTop !== undefined && { paddingTop }),
        ...(paddingBottom !== undefined && { paddingBottom }),
        ...(paddingLeft !== undefined && { paddingLeft }),
        ...(paddingRight !== undefined && { paddingRight }),
        ...style,
    };
    return _jsx("div", { style: paddingStyle, children: children });
}

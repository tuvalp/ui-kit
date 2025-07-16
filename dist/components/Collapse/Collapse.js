import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
export function Collapse({ isOpen, children, duration = 300, style, }) {
    const ref = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        if (isOpen) {
            const scrollHeight = el.scrollHeight;
            setMaxHeight(`${scrollHeight}px`);
        }
        else {
            setMaxHeight("0px");
        }
    }, [isOpen, children]);
    return (_jsx("div", { ref: ref, className: "collapse-container", style: {
            maxHeight,
            transition: `max-height ${duration}ms ease`,
            overflow: "hidden",
            ...style,
        }, children: _jsx("div", { className: "collapse-content", children: children }) }));
}

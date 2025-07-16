import React, { useRef, useEffect, useState } from "react";

interface CollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
  duration?: number; 
  style?: React.CSSProperties;
}

export function Collapse({
  isOpen,
  children,
  duration = 300,
  style,
}: CollapseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isOpen) {
      const scrollHeight = el.scrollHeight;
      setMaxHeight(`${scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen, children]);

  return (
    <div
      ref={ref}
      className="collapse-container"
      style={{
        maxHeight,
        transition: `max-height ${duration}ms ease`,
        overflow: "hidden",
        ...style,
      }}
    >
      <div className="collapse-content">{children}</div>
    </div>
  );
}

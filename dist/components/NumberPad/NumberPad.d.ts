import "./NumberPad.css";
export interface NumberPadProps {
    onInput: (value: string) => void;
    onDelete?: () => void;
    onEnter?: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
}
export declare const NumberPad: React.FC<NumberPadProps>;

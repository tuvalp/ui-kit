import "./Backdrop.css"

interface BackdropProps {
    children: React.ReactNode
    show?: boolean
    onClick: () => void
}
export default function Backdrop({ children, show = false, onClick}: BackdropProps) {
  return (
    <div className={`backdrop${show ? " show" : ""}`} onClick={onClick}>
      {children}
    </div>
  )
}

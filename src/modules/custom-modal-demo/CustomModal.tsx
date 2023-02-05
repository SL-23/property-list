import { useEffect } from "react"
import CustomPortal from "./CustomPortal"
import "./index.css"

interface CustomModalProps {
  open: boolean
  handleClose: () => void
}

const CustomModal = (props: CustomModalProps) => {
  const { open, handleClose } = props

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => e.key === "Escape" ? handleClose() : null
    document.body.addEventListener("keydown", closeOnEscape)
    return () => document.body.removeEventListener("keydown", closeOnEscape)
  }, [handleClose])
  
  if(!open) return null

  return (
    <CustomPortal wrapperId="modal-wrapper">
      <div className="modal">
        <h2 className="modal-content">Hello Modal!</h2>
        <button className="modal-close-button" onClick={handleClose}>close</button>
      </div>
    </CustomPortal>
  )
}

export default CustomModal
import { Button, Container } from "@mui/material"
import CustomModal from "./custom-modal-demo/CustomModal"
import React, { useState } from "react"

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container
      maxWidth="md"
    ><Button
      onClick={() => setIsOpen(true)}
    >Open modal</Button><CustomModal open={isOpen} handleClose={() => setIsOpen(false)} /></Container>)
}

export default ModalPage
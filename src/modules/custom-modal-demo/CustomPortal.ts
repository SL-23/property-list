import { useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div")
  wrapperElement.setAttribute("id", wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

interface PortalProps {
  children: React.ReactNode
  wrapperId: string
}

const CustomPortal = (props: PortalProps) => {
  const { children, wrapperId }= props
  console.log(wrapperId)
  const [wrapprElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    if(!element) {
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)
  }, [wrapprElement])

  if(!wrapprElement) return null
  return createPortal(children, wrapprElement)
}

export default CustomPortal
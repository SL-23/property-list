import { useContext } from "react"
import { RequiredResponsiveObject } from "./breakpoint"
import { BreakpointContext } from "./BreakpointContext"
import { resolveResponsiveObject } from "./resolveResponsiveObject"

export const useReponsiveValue = () => {
  const breakpointName = useContext(BreakpointContext)

  return function responsiveValue<Value>(
    value: RequiredResponsiveObject<Value>
  ): Value | null {
    return breakpointName ? resolveResponsiveObject(breakpointName, value) : null
  }
}
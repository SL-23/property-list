import {
  Breakpoint, defaultBreakpointNames, RequiredResponsiveObject
} from "./breakpoint";

export function resolveResponsiveObject<Value>(breakpointName: Breakpoint, value: RequiredResponsiveObject<Value>): Value | null {
  let resolvedValue = null

  for (let i = 0; i < defaultBreakpointNames.length; ++i) {
    const currentBreakpointName = defaultBreakpointNames[i]
    const inputBreakpointValue = value[currentBreakpointName]

    if (inputBreakpointValue !== undefined) resolvedValue = inputBreakpointValue
    if (breakpointName === currentBreakpointName) return resolvedValue
  }

  return resolvedValue
}

export const defaultBreakpointNames = ["small", "medium", "tablet", "large"]

export const defaultBreakpoints = {
  small: 0,
  medium: 500,
  tablet: 768,
  large: 1000
}

export type Breakpoint = keyof typeof defaultBreakpoints

export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> & Record<typeof defaultBreakpointNames[0], Value>


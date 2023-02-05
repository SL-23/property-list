import { createContext, ReactNode, useEffect, useState } from "react"
import { Breakpoint, defaultBreakpoints } from "./breakpoint"

const minWidthQuery = (breakpoint: number) => window.matchMedia(`(min-width: ${breakpoint}px)`)

const getCurrentBreakpoint = (
  mediumQuery: MediaQueryList,
  taletQuery: MediaQueryList,
  largeQuery: MediaQueryList,
) => {
  if (mediumQuery.matches) return "medium"
  if (taletQuery.matches) return "tablet"
  if (largeQuery.matches) return "large"
  return "small"
}

export const BreakpointContext = createContext<Breakpoint | null>(null)

interface BreakpointProviderProps {
  children: ReactNode
}

export const BreakpointProvider = ({ children }: BreakpointProviderProps) => {
  const { medium, tablet, large } = defaultBreakpoints;

  const [state, setState] = useState<Breakpoint | null>(null)

  useEffect(() => {
    let mounted = true

    const mediumQuery = minWidthQuery(medium)
    const tabletQuery = minWidthQuery(tablet)
    const largeQuery = minWidthQuery(large)

    const onChange = () => {
      if (!mounted) return

      const newBreakpoint = getCurrentBreakpoint(mediumQuery, tabletQuery, largeQuery)

      if (newBreakpoint !== state) setState(newBreakpoint)

    }

    mediumQuery.addEventListener("change", onChange)
    tabletQuery.addEventListener("change", onChange)
    largeQuery.addEventListener("change", onChange)


    onChange()

    return () => {
      mounted = false
      mediumQuery.removeEventListener("change", onChange)
      tabletQuery.removeEventListener("change", onChange)
      largeQuery.removeEventListener("change", onChange)
    };

  }, [medium, tablet, large, state])


  return (
    <BreakpointContext.Provider value={state}>
      {children}
    </BreakpointContext.Provider>
  )

}
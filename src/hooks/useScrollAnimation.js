import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null)
  const [inView, setInView] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const element = elementRef.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (options.once !== false) {
          observer.unobserve(entry.target)
        }
      } else if (options.once === false) {
        setInView(false)
      }
    }, {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px',
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options.once, options.threshold, options.rootMargin, prefersReducedMotion])

  const isVisible = prefersReducedMotion || inView

  return [elementRef, isVisible]
}

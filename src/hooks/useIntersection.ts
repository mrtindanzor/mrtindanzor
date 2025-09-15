"use client"
import React, { useEffect, useState } from "react"

export default function useIntersection<T>({
  ref,
  threshold = 0.5,
  rootMargin = "0px",
}: {
  ref: React.RefObject<T>
  threshold?: number
  rootMargin?: string
}) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef || !(currentRef instanceof HTMLElement)) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(currentRef)

    return () => observer.disconnect()
  }, [ref, threshold, rootMargin])

  return isIntersecting
}

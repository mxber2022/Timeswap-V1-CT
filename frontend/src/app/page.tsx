'use client'

import { DynamicWidget } from '../../lib/dynamic'
import { useEffect, useState } from 'react'

const checkIsDarkSchemePreferred = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false
  }
  return false
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(checkIsDarkSchemePreferred)

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setIsDarkMode(checkIsDarkSchemePreferred())

    darkModeMediaQuery.addEventListener('change', handleChange)
    return () => darkModeMediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <>
      <div className="modal">
        <DynamicWidget />
      </div>
    </>
  )
}

"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("[v0] Theme toggle mounted, current theme:", theme, "resolved:", resolvedTheme)
  }, [theme, resolvedTheme])

  const handleToggle = () => {
    console.log("[v0] Toggle clicked, current theme:", theme, "switching to:", theme === "light" ? "dark" : "light")
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    console.log("[v0] Theme set to:", newTheme)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-accent transition-all duration-200">
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  console.log("[v0] Rendering toggle, theme:", theme, "resolved:", resolvedTheme)

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className="h-8 w-8 p-0 hover:bg-accent transition-all duration-200"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

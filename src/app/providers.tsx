'use client'
import { ThemeProvider } from '@/components.old/Theme'

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

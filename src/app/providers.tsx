'use client'
import { ThemeProvider } from '../components/Theme/context'

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

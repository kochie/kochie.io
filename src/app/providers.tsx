'use client'
import { ThemeProvider } from './src/components/Theme'

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

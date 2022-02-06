import React from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const ThemeToggleProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)
  const toggleTheme = () => setIsDarkTheme(prevTheme => !prevTheme)

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
export const useThemeUpdate = () => React.useContext(ThemeUpdateContext)

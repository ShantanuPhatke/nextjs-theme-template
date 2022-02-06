import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import GlobalStyles from '@styles/GlobalStyles'
import { useTheme } from '@contexts/ThemeContext'
import Footer from '@components/Footer'

const MainLayout = ({ children }) => {
  const isDarkTheme = useTheme()
  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyles />
      <Head>
        <title>NextJS Theme Template</title>
        <meta
          name="description"
          content="template project with setup for theme switching"
        />
      </Head>

      {children}

      <Footer />
    </ThemeProvider>
  )
}

export default MainLayout

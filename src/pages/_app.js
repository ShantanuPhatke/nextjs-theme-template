import '@styles/fonts.css'
import { ThemeToggleProvider } from '@contexts/ThemeContext'
import MainLayout from '@layouts/MainLayout'

function App({ Component, pageProps }) {
  return (
    <ThemeToggleProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeToggleProvider>
  )
}

export default App

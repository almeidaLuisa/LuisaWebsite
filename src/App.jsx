import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatImUpTo from './components/WhatImUpTo'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <WhatImUpTo />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App

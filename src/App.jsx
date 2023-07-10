

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Portifolio from './components/Portifolio'
import Services from './components/Services'
import ToastProvider from './providers/toast'

function App() {


  return (
    <>
      <ToastProvider>
        <Header />
        <Home />
        <About />
        <Services />
        <Portifolio />
        <Contact />
        <Footer />
      </ToastProvider>
    </>
  )
}

export default App

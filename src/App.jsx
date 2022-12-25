import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Timeline from './components/experience/Timeline'
// import Experience from './components/experience/Experience'
// import Education from './components/education/Education'
import Publications from './components/publications/Publications'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {

  ReactGA.initialize('UA-180159529-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [window.location]);

  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Timeline />
        {/* <Education /> */}
        <Publications />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
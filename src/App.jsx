import Header  from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import GlobalStyles from './components/styles/Global'

import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
      <Router>

        <GlobalStyles></GlobalStyles>
        <Header />
        <Hero />

      </Router>


    </>
  )
}

export default App

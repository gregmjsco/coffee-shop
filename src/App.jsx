
import Home from './components/Home';
import GlobalStyles from './components/styles/Global'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/styles/Navbar';
import Shop from './components/Shop';

function App() {

  return (
    <Router>
    <GlobalStyles></GlobalStyles>
    <Navbar></Navbar>
      <Routes>
          <Route path = '/' element={<Home />}></Route>
          <Route path = '/shop' element={<Shop />}></Route>
      </Routes>


    </Router>
  )
}

export default App

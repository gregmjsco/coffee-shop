
import Home from './components/Home';
import GlobalStyles from './components/styles/Global'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/styles/Navbar';
import Shop from './components/Shop';

function App() {

  return (
    <>
    <GlobalStyles></GlobalStyles>
    <Navbar></Navbar>
      <Routes>
          <Route exact path = '/' element={<Home />}></Route>
          <Route path = '/shop' element={<Shop />}></Route>
      </Routes>


    </>
  )
}

export default App


import Home from './components/Home';
import GlobalStyles from './components/styles/Global'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/styles/Navbar';
import Shop from './components/Shop';

function App() {

  return (
    <>
    <GlobalStyles></GlobalStyles>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '/shop'>
            <Shop></Shop>
          </Route>
        </Switch>

        <Home></Home>

      </Router>


    </>
  )
}

export default App

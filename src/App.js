import React from 'react'
import Nav from './component/pages/Nav'
import Home from './component/pages/Home'
import Book from './component/pages/Book'
import About from './component/pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './scss/app.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch >
          <Route exact path={['/book','/']} > <Book /> </Route>
          <Route exact path='/home' > <Home /> </Route>
          <Route exact path='/about' > <About /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

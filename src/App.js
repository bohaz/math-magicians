import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './components/styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <h1 className="nav-title">Math Magicians</h1>
          <ul className="navbar-ul">
            <li className="navbar-li">
              <Link className="links" to="/">Home</Link>
            </li>
            <li className="navbar-li">
              <Link className="links" to="/calculator">Calculator</Link>
            </li>
            <li className="navbar-li">
              <Link className="links" to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>

        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;

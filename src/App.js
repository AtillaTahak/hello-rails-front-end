import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';

import Greeting from './components/Greeting';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greeting">greeting</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div id="wrap">
        <Route path="/" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
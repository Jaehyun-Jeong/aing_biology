import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from "./routes/Home";
import type_01 from "./routes/type_01/type_01";
import type_02 from "./routes/type_02/type_02";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div id="wrap">
        <Route path="/" component={Home} />
        <Route path="/type_01" component={type_01} />
        <Route path="/type_02" component={type_02} />
      </div>
    </HashRouter>
  );
}

export default App;

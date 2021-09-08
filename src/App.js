import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from "./routes/Home";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/express_backend")
      .then((res) => res.json())
      .then((data) => setData(data.express));
  }, []);

  console.log(data);
  
  return (
    <HashRouter>
      <div id="wrap">
        <Navigation />
        <Route path="/" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;

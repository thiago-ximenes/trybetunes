import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;

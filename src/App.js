import React from 'react';
import './App.css';
import './css/general.css';
import './css/pTech.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { parallaxBk } from './js/lib';
import Footer from './components/Footer';


class App extends React.Component {
  componentDidMount() {
    parallaxBk.init();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <MainContent />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

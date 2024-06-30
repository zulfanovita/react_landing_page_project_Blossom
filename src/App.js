import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
// import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
}

export default App;

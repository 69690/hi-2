import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Header2 from './components/Header2';
import Main from './components/Main';
import Basket from './components/Basket';


function App() {
  return (

    <div className="App">

      <header>

        <Header></Header>
        
      
      </header>
      <div>
        <Header2></Header2>
      </div>
      <div>
          <Main></Main>
          <Basket></Basket>
        </div>
    </div>
  );
}

export default App;

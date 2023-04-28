import { Home } from "./components/Home";
import { About } from "./components/About";
import { Info } from './components/Info';
import { Detail } from "./components/Detail";
import { Partner } from "./components/Partner";
import { Action } from "./components/Action";
import { Footer } from "./components/Footer";
import React from 'react'
import './index.css';

function App() {
  return (
    <>
      <Home />
      <About />
      <Info />
      <Detail />
      <Partner />
      <Action />
      <Footer />
    </>
  );
}

export default App;
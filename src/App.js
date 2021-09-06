import React, {useState} from 'react'
import Dropdown from "./components/Dropdown";
import Infosection from './components/Infosection';
import { InfoData } from './data/InfoData';
import Navbar from "./components/Navbar";
import GlobalStyle from './globalStyles';
import PricingModel from './components/PricingModel';
import Portfolio from './components/Portfolio';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
     <GlobalStyle />
     <Navbar toggle={toggle}/> 
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Infosection {...InfoData} />
      <PricingModel />
      <Portfolio />
    </>
  );
}

export default App;

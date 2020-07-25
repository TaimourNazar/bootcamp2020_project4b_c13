import React from 'react';
import './App.css';
import Header from './components/Header';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import SectionD from './components/SectionD';

function App() {
  return (
    <div>
      <Header></Header>
      <SectionA></SectionA>
      <SectionB></SectionB>
      <SectionC></SectionC>
      <SectionD></SectionD>
    </div>
  );
}

export default App;

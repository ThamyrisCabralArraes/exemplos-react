import { useState } from 'react';
import React from 'react';
import './App.css';
import { Div } from './components/DivH1';

export const globalContext = React.createContext();

const countNumbers = {
  count: 0,
};

function App() {
  const [context, setContext] = useState(countNumbers);
  return (
    <globalContext.Provider value={{ context, setContext }}>
      <div className='App'>
        <Div />
      </div>
    </globalContext.Provider>
  );
}

export default App;

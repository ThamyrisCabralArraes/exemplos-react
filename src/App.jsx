import { useEffect, useReducer, useState } from 'react';
import React from 'react';
import './App.css';
import { Div } from './components/DivH1';

export const globalContext = React.createContext();

const countNumbers = {
  count: 0,
  title: 'Meu contador:',
  payLoad: '',
};

export const reducer = (state, action) => {
  const { count } = state;
  console.log(state);
  switch (action.type) {
    case 'decrementar':
      return { ...state, count: count - 1 };
  }
  return { ...state };
};

function App() {
  const [context, setContext] = useState(countNumbers);
  const [state, dispatch] = useReducer(reducer, countNumbers);

  return (
    <globalContext.Provider value={{ context, setContext, state, dispatch }}>
      <div className='App'>
        <Div />
      </div>
    </globalContext.Provider>
  );
}

export default App;

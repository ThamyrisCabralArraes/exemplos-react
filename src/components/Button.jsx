import React, { useContext } from 'react';
import { globalContext } from '../App';

export const Button = () => {
  const theContext = useContext(globalContext);
  const { count } = theContext.context;
  return <button onClick={() => theContext.setContext({ count: count + 1 })}>incrementar</button>;
};

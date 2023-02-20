import React, { useContext } from 'react';
import { globalContext } from '../App';

export const Button = () => {
  const theContext = useContext(globalContext);
  const {
    context: { count },
  } = theContext;
  return (
    <button
      onClick={() =>
        theContext.setContext({
          ...theContext.context,
          count: count + 1,
          payLoad: new Date().toLocaleDateStringString('pt-BR'),
        })
      }
    >
      incrementar
    </button>
  );
};

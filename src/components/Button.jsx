import React, { useContext } from 'react';
import { globalContext } from '../App';

export const Button = () => {
  const theContext = useContext(globalContext);

  const {
    context: { count },
  } = theContext;
  return (
    <div>
      <button
        onClick={() =>
          theContext.setContext({
            ...theContext.context,
            count: count + 1,
            payLoad: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        incrementar
      </button>
      <button onClick={(e) => theContext.dispatch({ type: 'decrementar' })}>Decrementar</button>
    </div>
  );
};

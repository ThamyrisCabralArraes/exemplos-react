import React, { useContext } from 'react';
import { globalContext } from '../App';
import { Button } from './Button';

export const Div = () => {
  const theContext = useContext(globalContext);
  const { count } = theContext.context;
  console.log(theContext);
  return (
    <div>
      <p>{count}</p>
      <Button />
    </div>
  );
};

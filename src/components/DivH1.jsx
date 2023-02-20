import React, { useContext } from 'react';
import { globalContext } from '../App';
import { Button } from './Button';

export const Div = () => {
  const theContext = useContext(globalContext);
  const {
    context: { count, title, payLoad },
  } = theContext;
  console.log(theContext);
  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
      <p>{payLoad}</p>
      <Button />
    </div>
  );
};

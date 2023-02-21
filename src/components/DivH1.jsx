import React, { useContext, useRef } from 'react';
import { globalContext } from '../App';
import { Button } from './Button';
import { Input } from './Input';

export const Div = () => {
  const theContext = useContext(globalContext);
  const {
    context: { count, title, payLoad },
  } = theContext;

  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
      <p>{payLoad}</p>
      <Button />
      <p>{}</p>
      <Input value={''} />
    </div>
  );
};

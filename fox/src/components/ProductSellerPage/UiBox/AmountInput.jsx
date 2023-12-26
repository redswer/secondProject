import React from 'react';

import './AmountInput.css';

const AmountInput = React.forwardRef((props, ref) => {
  return (
    <div className='amountinput_box'>
      <label htmlFor={props.input.id}>구매 수량 : </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default AmountInput;

//{props.label}
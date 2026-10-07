import React from 'react';

export function QuantityStepper({value=1,min=0,max=99,onChange,tone='outline',className='',...rest}){
  const set=v=>onChange&&onChange(Math.min(max,Math.max(min,v)));
  return (
    <div className={['bc-qty',tone==='solid'&&'bc-qty--solid',className].filter(Boolean).join(' ')} {...rest}>
      <button className="bc-qty__btn" onClick={()=>set(value-1)} disabled={value<=min} aria-label="One fewer">−</button>
      <span className="bc-qty__val">{value}</span>
      <button className="bc-qty__btn" onClick={()=>set(value+1)} disabled={value>=max} aria-label="One more">+</button>
    </div>
  );
}

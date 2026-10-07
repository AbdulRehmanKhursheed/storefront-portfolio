import React from 'react';

export function CartLine({name,options,price,qty,onQty,trailing,className='',...rest}){
  return (
    <div className={['bc-cartline',className].filter(Boolean).join(' ')} {...rest}>
      <div className="bc-cartline__main">
        <div className="bc-cartline__name">{qty?qty+'× ':''}{name}</div>
        {options?<div className="bc-cartline__opts">{options}</div>:null}
      </div>
      {trailing}
      <div className="bc-cartline__price">{price}</div>
    </div>
  );
}

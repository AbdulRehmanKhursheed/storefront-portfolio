import React from 'react';

export function OrderSummary({rows=[],total,totalLabel='Total',className='',...rest}){
  return (
    <div className={['bc-summary',className].filter(Boolean).join(' ')} {...rest}>
      {rows.map(r=>(
        <div className="bc-summary__row" key={r.label}><span>{r.label}</span><span>{r.value}</span></div>
      ))}
      {total!=null?(
        <div className="bc-summary__row bc-summary__row--total"><span>{totalLabel}</span><span>{total}</span></div>
      ):null}
    </div>
  );
}

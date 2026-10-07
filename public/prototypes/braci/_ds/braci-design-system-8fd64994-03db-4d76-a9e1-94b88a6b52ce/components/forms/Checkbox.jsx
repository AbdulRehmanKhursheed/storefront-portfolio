import React from 'react';

export function Checkbox({checked=false,onChange,label,description,disabled=false,className='',...rest}){
  const cls=['bc-check',checked&&'bc-check--checked',disabled&&'bc-check--disabled',className].filter(Boolean).join(' ');
  return (
    <label className={cls} {...rest}>
      <span className="bc-check__box" aria-hidden="true">✓</span>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{position:'absolute',opacity:0,width:0,height:0}} />
      <span className="bc-check__label">{label}{description?<small>{description}</small>:null}</span>
    </label>
  );
}

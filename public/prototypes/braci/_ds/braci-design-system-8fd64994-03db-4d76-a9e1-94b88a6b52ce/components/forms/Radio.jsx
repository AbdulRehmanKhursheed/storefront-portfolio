import React from 'react';

export function Radio({checked=false,onChange,label,description,name,value,disabled=false,className='',...rest}){
  const cls=['bc-check',checked&&'bc-check--checked',disabled&&'bc-check--disabled',className].filter(Boolean).join(' ');
  return (
    <label className={cls} {...rest}>
      <span className="bc-check__box bc-check__box--radio" aria-hidden="true">●</span>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} style={{position:'absolute',opacity:0,width:0,height:0}} />
      <span className="bc-check__label">{label}{description?<small>{description}</small>:null}</span>
    </label>
  );
}

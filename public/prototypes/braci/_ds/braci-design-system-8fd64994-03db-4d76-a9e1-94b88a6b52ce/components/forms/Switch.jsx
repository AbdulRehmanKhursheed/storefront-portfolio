import React from 'react';

export function Switch({checked=false,onChange,label,disabled=false,className='',...rest}){
  const cls=['bc-switch',checked&&'bc-switch--on',disabled&&'bc-switch--disabled',className].filter(Boolean).join(' ');
  return (
    <label className={cls} {...rest}>
      <span className="bc-switch__track"><span className="bc-switch__knob" /></span>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} style={{position:'absolute',opacity:0,width:0,height:0}} />
      {label?<span>{label}</span>:null}
    </label>
  );
}

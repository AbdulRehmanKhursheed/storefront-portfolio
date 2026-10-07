import React from 'react';

export function Tooltip({label,placement='top',children,className='',...rest}){
  const [on,setOn]=React.useState(false);
  return (
    <span className={['bc-tooltip',className].filter(Boolean).join(' ')} onMouseEnter={()=>setOn(true)} onMouseLeave={()=>setOn(false)} onFocus={()=>setOn(true)} onBlur={()=>setOn(false)} {...rest}>
      {children}
      {on?<span className={['bc-tooltip__bubble',placement==='bottom'&&'bc-tooltip__bubble--bottom'].filter(Boolean).join(' ')}>{label}</span>:null}
    </span>
  );
}

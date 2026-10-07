import React from 'react';

export function Tag({selected=false,interactive=true,onRemove,children,className='',...rest}){
  const cls=['bc-tag',selected&&'bc-tag--selected',!interactive&&'bc-tag--static',className].filter(Boolean).join(' ');
  const Tag_=interactive?'button':'span';
  return (
    <Tag_ className={cls} aria-pressed={interactive?selected:undefined} {...rest}>
      {children}
      {onRemove?<span className="bc-tag__x" onClick={e=>{e.stopPropagation();onRemove(e);}}>✕</span>:null}
    </Tag_>
  );
}

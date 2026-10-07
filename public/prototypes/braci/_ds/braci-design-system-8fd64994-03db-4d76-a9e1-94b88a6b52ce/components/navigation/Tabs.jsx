import React from 'react';

export function Tabs({items=[],value,onChange,variant='underline',className='',...rest}){
  return (
    <div className={['bc-tabs',variant==='pill'&&'bc-tabs--pill',className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {items.map(it=>{const v=typeof it==='string'?it:it.value;const l=typeof it==='string'?it:it.label;
        return <button key={v} role="tab" aria-selected={v===value} className={['bc-tab',v===value&&'bc-tab--active'].filter(Boolean).join(' ')} onClick={()=>onChange&&onChange(v)}>{l}</button>;})}
    </div>
  );
}

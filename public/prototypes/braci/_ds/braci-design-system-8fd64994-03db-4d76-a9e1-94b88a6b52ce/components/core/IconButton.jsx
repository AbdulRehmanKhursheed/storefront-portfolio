import React from 'react';

export function IconButton({icon,label,size='md',variant='plain',disabled=false,className='',...rest}){
  const cls=['bc-iconbtn','bc-iconbtn--'+size,variant!=='plain'&&'bc-iconbtn--'+variant,className].filter(Boolean).join(' ');
  return <button className={cls} aria-label={label} title={label} disabled={disabled} {...rest}>{icon}</button>;
}

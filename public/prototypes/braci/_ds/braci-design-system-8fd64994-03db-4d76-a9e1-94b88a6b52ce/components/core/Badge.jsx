import React from 'react';

export function Badge({tone='soft',icon,children,className='',...rest}){
  return <span className={['bc-badge','bc-badge--'+tone,className].filter(Boolean).join(' ')} {...rest}>{icon}{children}</span>;
}

import React from 'react';

export function Toast({tone='neutral',title,children,onClose,className='',...rest}){
  return (
    <div className={['bc-toast','bc-toast--'+tone,className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="bc-toast__dot" />
      <div>
        <div className="bc-toast__title">{title}</div>
        {children?<div className="bc-toast__text">{children}</div>:null}
      </div>
      {onClose?<button className="bc-toast__close" onClick={onClose} aria-label="Dismiss">✕</button>:null}
    </div>
  );
}

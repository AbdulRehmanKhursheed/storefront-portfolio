import React from 'react';
import {IconButton} from '../core/IconButton.jsx';

export function Dialog({open=true,title,children,footer,onClose,className='',...rest}){
  if(!open) return null;
  return (
    <div className="bc-dialog__scrim" onClick={onClose}>
      <div className={['bc-dialog',className].filter(Boolean).join(' ')} role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()} {...rest}>
        <div className="bc-dialog__head">
          <h3 className="bc-dialog__title">{title}</h3>
          {onClose?<IconButton size="sm" label="Close" icon={<i className="ph ph-x" />} onClick={onClose} />:null}
        </div>
        <div className="bc-dialog__body">{children}</div>
        {footer?<div className="bc-dialog__foot">{footer}</div>:null}
      </div>
    </div>
  );
}

import React from 'react';

export function Input({label,hint,error,multiline=false,className='',id,...rest}){
  const fid=id||('bc-'+(label||'field').toString().toLowerCase().replace(/\W+/g,'-'));
  const Tag=multiline?'textarea':'input';
  const cls=['bc-input',multiline&&'bc-input--textarea',error&&'bc-input--invalid',className].filter(Boolean).join(' ');
  return (
    <div className="bc-field">
      {label?<label className="bc-field__label" htmlFor={fid}>{label}</label>:null}
      <Tag id={fid} className={cls} aria-invalid={!!error||undefined} {...rest} />
      {error?<span className="bc-field__hint bc-field__hint--error">{error}</span>:hint?<span className="bc-field__hint">{hint}</span>:null}
    </div>
  );
}

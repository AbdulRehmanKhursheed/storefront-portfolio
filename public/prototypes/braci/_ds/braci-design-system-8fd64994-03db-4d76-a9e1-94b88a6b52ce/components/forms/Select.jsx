import React from 'react';

export function Select({label,hint,error,options=[],placeholder,className='',id,children,...rest}){
  const fid=id||('bc-'+(label||'select').toString().toLowerCase().replace(/\W+/g,'-'));
  return (
    <div className="bc-field">
      {label?<label className="bc-field__label" htmlFor={fid}>{label}</label>:null}
      <select id={fid} className={['bc-select',error&&'bc-select--invalid',className].filter(Boolean).join(' ')} {...rest}>
        {placeholder?<option value="">{placeholder}</option>:null}
        {options.map(o=>{const v=typeof o==='string'?o:o.value;const l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>;})}
        {children}
      </select>
      {error?<span className="bc-field__hint bc-field__hint--error">{error}</span>:hint?<span className="bc-field__hint">{hint}</span>:null}
    </div>
  );
}

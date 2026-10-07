import React from 'react';

export function SectionHeading({eyebrow,title,aside,align='split',className='',...rest}){
  return (
    <div className={['bc-sechead',align==='center'&&'bc-sechead--center',className].filter(Boolean).join(' ')} {...rest}>
      <div>
        {eyebrow?<div className="bc-sechead__eyebrow">{eyebrow}</div>:null}
        <h2 className="bc-sechead__title">{title}</h2>
      </div>
      {aside?<div className="bc-sechead__aside">{aside}</div>:null}
    </div>
  );
}

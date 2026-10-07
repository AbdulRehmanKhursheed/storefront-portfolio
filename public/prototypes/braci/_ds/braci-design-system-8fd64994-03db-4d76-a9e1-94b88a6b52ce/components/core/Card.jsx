import React from 'react';

export function Card({elevation='card',strip=false,interactive=false,padded=true,title,text,children,className='',...rest}){
  const cls=['bc-card',elevation==='flat'&&'bc-card--flat',elevation==='raised'&&'bc-card--raised',strip&&'bc-card--strip',interactive&&'bc-card--interactive',className].filter(Boolean).join(' ');
  const inner=(title||text)?(
    <div className="bc-card__body">
      {title?<h4 className="bc-card__title">{title}</h4>:null}
      {text?<p className="bc-card__text">{text}</p>:null}
      {children}
    </div>
  ):(padded?<div className="bc-card__body">{children}</div>:children);
  return <div className={cls} {...rest}>{inner}</div>;
}

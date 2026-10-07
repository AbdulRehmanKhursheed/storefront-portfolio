import React from 'react';

export function Button({variant='primary',size='md',sticker=false,block=false,iconLeft,iconRight,disabled=false,as='button',href,children,className='',...rest}){
  const cls=['bc-btn','bc-btn--'+variant,'bc-btn--'+size,sticker&&'bc-btn--sticker',block&&'bc-btn--block',disabled&&'bc-btn--disabled',className].filter(Boolean).join(' ');
  const Tag=as==='a'?'a':'button';
  return (
    <Tag className={cls} href={as==='a'?href:undefined} disabled={Tag==='button'?disabled:undefined} {...rest}>
      {iconLeft?<span className="bc-btn__icon">{iconLeft}</span>:null}
      {children}
      {iconRight?<span className="bc-btn__icon">{iconRight}</span>:null}
    </Tag>
  );
}

import React from 'react';

const MARKS={primary:'assets/logo-primary.png',slice:'assets/logo-slice.png',wordmark:'assets/logo-wordmark.png','wordmark-shell':'assets/logo-wordmark-shell.png'};

export function Logo({mark='slice',tone='char',height=40,withWordmark=false,base='',href,className='',...rest}){
  const key=(mark==='wordmark'&&tone==='shell')?'wordmark-shell':mark;
  const src=(base?base.replace(/\/$/,'')+'/':'')+MARKS[key];
  const Tag=href?'a':'span';
  return (
    <Tag className={['bc-logo',className].filter(Boolean).join(' ')} href={href} style={{['--bc-logo-h']:height+'px'}} {...rest}>
      <img className="bc-logo__mark" src={src} alt="Braci" />
      {withWordmark?<span className="bc-logo__word">Braci</span>:null}
    </Tag>
  );
}

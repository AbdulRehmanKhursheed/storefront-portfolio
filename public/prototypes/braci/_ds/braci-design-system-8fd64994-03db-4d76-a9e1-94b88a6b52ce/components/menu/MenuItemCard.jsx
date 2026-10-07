import React from 'react';
import {Badge} from '../core/Badge.jsx';
import {Doodle} from './Doodle.jsx';

export function MenuItemCard({name,description,price,doodle,badges=[],soldOut=false,layout='row',action,base='',className='',...rest}){
  const cls=['bc-item',layout==='card'&&'bc-item--card',soldOut&&'bc-item--soldout',className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {doodle?<div className="bc-item__doodle"><Doodle name={doodle} size={38} base={base} /></div>:null}
      <div className="bc-item__main">
        <div className="bc-item__top">
          <h4 className="bc-item__name">{name}</h4>
          <span className="bc-item__dots" />
          <span className="bc-item__price">{price}</span>
        </div>
        {description?<p className="bc-item__desc">{description}</p>:null}
        {(badges.length||soldOut)?(
          <div className="bc-item__meta">
            {soldOut?<Badge tone="error">Sold out</Badge>:null}
            {badges.map(b=><Badge key={b} tone="soft">{b}</Badge>)}
          </div>
        ):null}
      </div>
      {action?<div className="bc-item__action">{action}</div>:null}
    </div>
  );
}

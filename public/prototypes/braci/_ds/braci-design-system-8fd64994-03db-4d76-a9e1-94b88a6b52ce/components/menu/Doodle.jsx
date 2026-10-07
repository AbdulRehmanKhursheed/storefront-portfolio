import React from 'react';

const DOODLES={pizza:'assets/doodle-pizza.png',pasta:'assets/doodle-pasta.png',cake:'assets/doodle-cake.png',drink:'assets/doodle-drink.png'};

export function Doodle({name='pizza',size=48,watermark=false,base='',className='',...rest}){
  const src=(base?base.replace(/\/$/,'')+'/':'')+DOODLES[name];
  return <img className={['bc-doodle',watermark&&'bc-doodle--watermark',className].filter(Boolean).join(' ')} src={src} width={size} height={size} alt="" style={{width:size,height:size,objectFit:'contain'}} {...rest} />;
}

import React from 'react';

export function Icon({name,size=20,weight='regular',color='currentColor',set='phosphor',className='',...rest}){
  const style={fontSize:size,lineHeight:1,color,display:'inline-flex'};
  if(set==='material'){
    return <span className={['material-symbols-outlined',className].filter(Boolean).join(' ')} style={{...style,fontVariationSettings:"'FILL' 0,'wght' 400,'GRAD' 0,'opsz' "+size}} aria-hidden="true" {...rest}>{name}</span>;
  }
  const family=weight==='regular'?'ph':'ph-'+weight;
  return <i className={[family,'ph-'+name,className].filter(Boolean).join(' ')} style={style} aria-hidden="true" {...rest} />;
}

import React from 'react';
import {Icon} from '../core/Icon.jsx';

export function LocationPicker({mode='Pick Up',modes=['Pick Up','Delivery'],place,places=[],onModeChange,onPlaceChange,tone='onOrange',block=false,className='',...rest}){
  const cls=['bc-loc',tone==='card'&&'bc-loc--onCream',block&&'bc-loc--block',className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <span className="bc-loc__pin"><Icon name="map-pin" size={16} /></span>
      <span className="bc-loc__lines">
        <span className="bc-loc__mode">
          <select value={mode} onChange={e=>onModeChange&&onModeChange(e.target.value)} aria-label="Order type" style={{width:(String(mode).length*0.62+0.4)+'em'}}>
            {modes.map(m=><option key={m} value={m}>{m}</option>)}
          </select>
        </span>
        <span className="bc-loc__rule" />
        <span className="bc-loc__place">
          <select value={place} onChange={e=>onPlaceChange&&onPlaceChange(e.target.value)} aria-label="Branch" style={{width:(String(place).length*0.47+0.4)+'em'}}>
            {places.map(p=><option key={p} value={p}>{p}</option>)}
          </select>
          <Icon name="caret-down" size={12} className="bc-loc__caret" />
        </span>
      </span>
    </div>
  );
}

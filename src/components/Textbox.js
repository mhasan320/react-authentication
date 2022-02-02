import React from 'react';

export default function Textbox({name, ...rest}) {
  return (
      <>
        <div className="mb-4 w-full flex flex-col">
            <label className="mb-2" htmlFor={name}>{name}</label>
            <input className="border border-slate-300 rounded-sm px-3 py-2" {...rest}/>
        </div>
       </>
  );
}

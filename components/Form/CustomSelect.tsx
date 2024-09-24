import { Input } from '@/types/Input'
import React from 'react'

export default function CustomSelect({ disabled=false, name, options, fullyRounded, id='', label }: Input) {
	return (<div className={`w-full flex flex-row items-center gap-8`}>
    {id && label ? <label htmlFor={id}>{label}</label> : null}
    <select disabled={disabled} name={name || id} id={id} className={`w-full custom-text bg-white p-4 custom-border ${fullyRounded ? '!rounded-full' : ''} outline-none ps-4 shadow-custom`}>
      {options?.map(({text, value}, key) => <option key={key} value={value}>{text}</option>)}
    </select>
  </div>)
}

import { Input } from '@/types/Input'
import React from 'react'

export default function CustomInput({ disabled=false, customclasses, label, id, fullyRounded, name, placeholder, min=0, max, type }: Input) {
	return (<div className='flex flex-row items-center gap-8'>
    {label && id ? <label htmlFor={id}>{label}</label> : null}
    <input
      className={`text-center custom-border ${fullyRounded ? '!rounded-full' : ''} p-4 ${customclasses}`}
      placeholder={placeholder}
      disabled={disabled}
      min={min}
      max={max}
      type={type}
      id={id}
      name={name}
    ></input>
  </div>)
}

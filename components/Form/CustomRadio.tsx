import { Input } from '@/types/Input'
import React from 'react'

export default function CustomRadio({ disabled=false, name, value, label, id }: Input) {
	return (<p className="flex flex-row items-center gap-1">
    <input disabled={disabled} type="radio" name={name || id} value={value} id={id} />
    <label htmlFor={id}>{label}</label>
  </p>)
}

import React from 'react'

type Props = {
	text: string,
  underline?: 'full' | 'partial',
  onClick?: () => void,
  color?: string,
  customClasses?: string,
  textClasses?: string,
}

export default function Heading({ text, underline='partial', onClick, color='border-custom-orange', customClasses='', textClasses='' }: Props) {
  let hr_style = ''
  switch (underline) {
    case 'full': hr_style = 'w-full';break;
    case 'partial': hr_style = 'w-12 mr-3';break;
    default: case null: hr_style = 'hidden';break;
  }
	return (
		<div onClick={onClick} className={customClasses}>
      <h3 className={`p-3 ${textClasses || 'text-base'} font-bold custom-text`}>{text}</h3>
      <hr className={`${color} border-2 rounded-lg ${hr_style}`} />
    </div>
	)
}

import React from 'react'
import Image from 'next/image'

type Props = {
  active:boolean,
  title:string,
  imgUrl:string,
  alt:string,
  onClick: ()=>void
}

export default function TabHead({ active, title, imgUrl, alt, onClick }: Props) {
	return (<div className='flex flex-col pt-5 items-center w-fit cursor-pointer' onClick={onClick}>
    <Image
      src={imgUrl}
      alt={alt}
      width={40}
      height={40}
    />
    <span className='px-5 py-2 custom-text'>{title}</span>
    <hr className={`${active ? 'border-custom-orange border-2' : 'border-0'} w-full`} />
  </div>)
}

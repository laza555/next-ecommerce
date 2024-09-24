import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {
  title: string,
  imgUrl: string,
  alt: string,
  date: string,
  link: string}

export default function ProductBox({ title, imgUrl, date, alt, link }: Props) {
	return (<Link href={link} className={`flex flex-col items-center w-fit custom-border m-auto`}>
    <Image
      src={imgUrl}
      alt={alt}
      width={300}
      height={200}
      className='rounded-t-xl'
    />

    <div className='flex flex-row py-3'>
      <h5 className='px-5 text-base custom-text'>{title}</h5>
      <span className='px-5 text-custom-orange font-semibold text-md border-custom-orange border-2 rounded-lg'>{date}</span>
    </div>
  </Link>)
}

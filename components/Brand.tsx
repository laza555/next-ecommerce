import { Brand } from '@/types/Brands'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Brand({ imgUrl, alt, link }: Brand) {
	return (
		<Link href={link} className='flex flex-col items-center'>
      <Image
        src={imgUrl}
        alt={alt}
        width={100}
        height={100}
        className='grayscale'
      />
    </Link>
	)
}

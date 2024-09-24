import Link from 'next/link'
import React from 'react'
import { FiPhone } from 'react-icons/fi' // phone icon
import { convertToEng } from '@/lib/number'
import { Member } from '@/types/Members'
import Image from 'next/image'

export default function Member({ imgUrl, alt, name, role, tel }: Member) {
	return (
		<article className="flex flex-row w-fit gap-3 custom-border p-3">
			<Image
        className='rounded-lg border-2'
        src={imgUrl}
        alt={alt}
        width={140}
        height={140}
      />
			<div className='flex flex-col gap-1'>
        <h5 className='custom-text text-xl'>{name}</h5>
        <h6 className='custom-text text-base'>{role}</h6>
        <Link className='flex flex-row custom-text border-2 border-custom-orange rounded-lg px-2 py-1 items-center' href={`tel:+98${convertToEng(tel.slice(1).replaceAll(' ', '').replaceAll('-', ''))}`}>
          <span className='text-custom-orange'>{tel}</span>
          <FiPhone className='stroke-none fill-black' />
        </Link>
      </div>
		</article>
	)
}

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Post } from '@/types/Post'

type Props = {
  post: Post,
  rowOrCol: string
}

export default function Post({ post: { title, link, imgUrl, alt, btnText }, rowOrCol='flex-col' }: Props) {
	return (
		<Link href={link} className="flex flex-col gap-2 m-auto">
      <Image
        className='rounded-lg'
        src={imgUrl}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={400}
        height={200}
      />
      <div className={`flex ${rowOrCol} gap-3`}>
        <h4 className='custom-text text-xl'>{title}</h4>
        <button className='text-custom-orange bg-white border-2 border-custom-orange px-5 rounded-lg w-fit'>{btnText}</button>
      </div>
		</Link>
	)
}

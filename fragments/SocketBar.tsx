"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  medias: SocialMedia[]
}

type SocialMedia = {
  name: string,
  alt: string,
  link: string
}

export default function SocketBar({ medias }: Props) {
  return (
    <section className="bg-white px-10 md:px-24">
      <hr className='shadow-custom' />
      <div className='flex flex-row py-5 gap-4' dir='ltr'>
        {medias.map((media, key) => (
          <Link key={key} href={media.link}>
            <Image
              src={`/icons/${media.name}.svg`}
              alt={media.alt}
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

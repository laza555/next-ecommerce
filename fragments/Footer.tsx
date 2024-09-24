import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { convertToEng } from '@/lib/number'

type Props = {
	logo_alt: string,
  tel: string,
  email: string,
  workSchedule: string,
  address: string,
  lists: List[]
}

type List = {
  head: Item,
  items: Item[]
}

type Item = {
  title: string,
  link: string,
}

export default function Footer({ logo_alt, tel, email, workSchedule, address, lists }: Props) {
	return (
    <footer className='py-3 px-10 md:px-24 flex flex-col justify-center bg-white px-10 lg:px-24 py-5 gap-4'>
      <hr className='shadow-custom' />
      <Image
        src={'/sample-banner.webp'}
        alt={logo_alt}
        width={160}
        height={20}
      />
      <div className='custom-text flex flex-col justify-between lg:flex-row w-full gap-10'>
        <ul className='w-full md:w-max flex flex-col gap-3'>
          <li>Consult: <Link href={`tel:+98${convertToEng(tel.slice(1).replaceAll(' ', '').replaceAll('-', ''))}`}>{tel}</Link></li>
          <li>Email: <Link href={`mailto:${email}`}>{email}</Link></li>
          <li>{workSchedule}</li>
          <li>Address: {address}</li>
        </ul>
        <div className='flex flex-row justify-between w-max gap-10'>
          {lists.map((list, key) => (
            <ul key={key} className='text-md custom-text'>
              <li className='text-base font-bold custom-text'><Link href={list.head.link}>{list.head.title}</Link></li>
              {list.items.map((item, key) => <li key={key}><Link href={item.link}>{item.title}</Link></li>)}
            </ul>
          ))}
        </div>
      </div>
    </footer>
	)
}

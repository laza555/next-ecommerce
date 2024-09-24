import { Breadcrumb } from '@/types/breadcrumb'
import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

export default function Breadcrumb({ items }: Breadcrumb) {
  return (
    <nav className='flex flex-row items-center my-3 custom-container-padding !py-0'>
      {items.map((item, key) => (
        // on small screen width, it will replace the last item in breadcumb with ... since it already is the current page
        // that's the least I can do due to the lack of instructions
        <div key={key} className={`flex flex-row  items-center ${key+1 == items.length ? 'sm:!flex hidden' : ''}`}>
          <Link href={item.link}>{item.title}</Link>
          <span className={`${key+1 == items.length ? 'hidden' : ''} px-3`}><FiArrowLeft className='text-sm' /></span>
        </div>
      ))}
      {/* here is the ... for small screens */}
      <div className='sm:!hidden flex'><Link href={items[items.length-1].link}>...</Link></div>
    </nav>
	)
}

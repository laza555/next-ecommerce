import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiCpu } from 'react-icons/fi';
import { MegamenuItem, MegamenuSubItem } from '@/types/megamenu';

export default function MenuItem({ icon, text, link, subcategories }: MegamenuItem) {
  
  // Function to toggle the dropdown
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (status:boolean) => setIsOpen(status || !isOpen);

  function item(text:string, link:string, subitems:MegamenuSubItem[], arrow=true, key=0) {
    return (
      <div key={key}>
        <Link href={link} className='hover:text-red-700 p-1 flex flex-row items-center w-48 justify-between custom-text'>

          {/* title */}
          <div className='flex flex-row items-center gap-2'>
            <span className='text-sm'>{text}</span>
          </div>

          {/* the arrow pointing left */}
          {arrow ? <FiChevronLeft /> : <span></span>}

        </Link>

        {/* render subitems of the list if available (the ones with no arrow icon) */}
        <div className={`overflow-hidden flex flex-col flex-wrap`}>
          {subitems.map((subitem, key) => item(subitem.text, subitem.link, subitem.subitems, subitem.arrow, key))}
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-row' onMouseEnter={() => toggleDropdown(true)} onMouseLeave={() => toggleDropdown(false)}>

        <Link href={link} className={`${isOpen ? 'custom-semilightbg text-red-700' : 'custom-text custom-lightbg'} transition flex flex-row items-center w-48 p-3 justify-between cursor-pointer`}>

          {/* title and the associated icon */}
          <div className='flex flex-row items-center gap-1'>
            {/* TODO: There might be a need to change the icon to font icon or image */}
            <FiCpu />
            <span className='text-base'>{text}</span>
          </div>

          {/* the arrow pointing left */}
          <FiChevronLeft />

        </Link>

        {/* the secondary flyout menu that appear as a primary column item is hovered */}
        <div className='max-w-0 max-h-0'>
          <div className={`custom-semilightbg top-0 overflow-hidden flex flex-col absolute ${isOpen ? 'max-h-screen w-max py-2 px-4' : 'max-h-0 max-w-0'}`}>

            {/* The mengameny btn */}
            <div className='flex flex-row items-center gap-2 custom-text'>
              <span className='min-w-fit'>price {text}</span>
              <hr className='w-full'/>
            </div>

            {/* the megamenu content */}
            <div className='flex flex-col flex-wrap max-h-screen w-max'>
              {subcategories.map((subitem, key) => item(subitem.text, subitem.link, subitem.subitems, subitem.arrow, key))}
            </div>

          </div>
        </div>

      </div>
  );
}

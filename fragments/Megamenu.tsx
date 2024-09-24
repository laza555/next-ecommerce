import MenuItem from '@/components/MegaMenu/Items'
import { MegamenuItem } from '@/types/megamenu';
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

type Props = {
	items: MegamenuItem[]
}


export default function Megamenu({ items }: Props) {

	// Function to toggle the dropdown
	const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (status:boolean) => setIsOpen(status);

	return (
		<section className='h-fit' onMouseEnter={() => toggleDropdown(true)} onMouseLeave={() => toggleDropdown(false)}>
			<div className='flex flex-row items-center gap-3 p-2.5 custom-text'>
				<FiMenu />
				<span className='flex'>Latest Price</span>
			</div>
			<div className={`z-10 absolute bg-white ${isOpen ? '' : 'overflow-hidden max-w-0 max-h-0'}`}>
				{items.map(({text, link, icon, subcategories}, key) => (<MenuItem key={key} icon={icon} text={text} link={link} subcategories={subcategories}/>))}
			</div>
		</section>
	)
}

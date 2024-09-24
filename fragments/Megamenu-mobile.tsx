import MenuItemMobile from '@/components/MegaMenu/Items-mobile';
import { MegamenuItem } from '@/types/megamenu';
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

type Props = {
	items: MegamenuItem[]
}


export default function MegamenuMobile({ items }: Props) {
	return (
		<section className='h-fit'>
			<div className='flex flex-row items-center gap-3 p-2.5 custom-text'>
				<span className='flex'>Products Realtime Price</span>
			</div>
			<div className='bg-white'>
				{items.map(({text, link, icon, subcategories}, key) => (<MenuItemMobile key={key} icon={icon} text={text} link={link} subcategories={subcategories}/>))}
			</div>
		</section>
	)
}

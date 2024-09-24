import Banner from '@/components/Banner'
import { Banner as Banner_d } from '@/types/Banner'
import React from 'react'

type Props = {
	banners: Banner_d[],
}

export default function Banners({ banners }: Props) {
	return (
    <section className='flex justify-center bg-white custom-container-padding !py-0'>
      <section className='flex flex-row flex-wrap py-8 gap-6 overflow-x-hidden w-fit justify-center'>
        {banners.map((banner, key) => <Banner key={key} title={banner.title} description={banner.description} imgUrl={banner.imgUrl} alt={banner.alt} link={banner.link} />)}
      </section>
    </section>
	)
}

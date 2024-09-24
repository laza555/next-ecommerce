import React from 'react'

import ProductBox from '@/components/Carousel/ProductBox';
import { Box } from '@/types/TabbedCarousel';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  active:boolean,
  items: Box[]
}

export default function TabBody({ active, items }: Props) {
	return (<div className={`items-center ${active ? '!flex' : 'hidden'}`}>
  <Swiper
    slidesPerView={4}
    spaceBetween={10}
    modules={[Pagination]}
    className='!pb-16'
    pagination={{
      clickable: true,
      bulletClass: 'swiper-pagination-bullet !bg-custom-gray p-2',
      bulletActiveClass: 'swiper-pagination-bullet-active !bg-custom-orange'
    }}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: items.length < 2 ? 1 : 2,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: items.length < 3 ? items.length : 3,
        spaceBetween: 10
      },
      1440: {
        slidesPerView: items.length < 4 ? items.length : 4,
        spaceBetween: 10
      },
    }}
  >
    {items.map((item, key) => (
      <SwiperSlide key={key} className='w-fit'>
        <ProductBox title={item.title} imgUrl={item.imgUrl} alt={item.alt} link={item.link} date={item.date} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>)
}

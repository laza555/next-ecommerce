"use client"

import Hero from '@/fragments/Hero'
import TabbedCarousel from '@/fragments/TabbedCarousel'
import Brands from '@/fragments/Brands'
import Banners from '@/fragments/Banners'
import AboutRow from '@/fragments/AboutRow'
import TeamMembers from '@/fragments/TeamMembers'
import Carousel from '@/fragments/Carousel'

export default function Home() {
  return (
    <main className='flex flex-col custom-lightbg'>
      
      <Hero slides={[
        {
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#',
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#',
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#',
        },
      ]} />

      <section className='custom-container-padding bg-custom-gray'>
        <TabbedCarousel data={[
          {
            head: {
              title: 'some product',
              imgUrl: '/sample-banner.webp',
              alt: 'alt'
            },
            body: [
              {
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },
            ]
          },{
            head: {
              title: 'some product',
              imgUrl: '/sample-banner.webp',
              alt: 'alt'
            },
            body: [
              {
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text2',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text2',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },
            ]
          },{
            head: {
              title: 'some product',
              imgUrl: '/sample-banner.webp',
              alt: 'alt'
            },
            body: [
              {
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },{
                imgUrl: '/sample-banner.webp',
                alt: 'alt2',
                title: 'product text3',
                date: '۱۴۰۲/۰۸/۱۰',
                link: '#'
              },
            ]
          }
        ]} />
      </section>

      <Brands brands={[
        {
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        }
      ]} />

      <Banners banners={[
        {
          title: 'some product title',
          description: 'Price',
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },{
          title: 'some product title',
          description: 'Price',
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        }
      ]} />

      <AboutRow videoUrl='https://example.com/img/custom.mp4' poster={'/sample-banner.webp'} description='some long descriptions' />

      <TeamMembers teams={[
        {
          title: 'some role',
          members: [
            {
              imgUrl: '/sample-banner.webp',
              alt: 'alt',
              name: 'some team member',
              role: 'role',
              tel: '09025940921',
            },{
              imgUrl: '/sample-banner.webp',
              alt: 'alt',
              name: 'some team member',
              role: 'role',
              tel: '09025940921',
            },{
              imgUrl: '/sample-banner.webp',
              alt: 'alt',
              name: 'some team member',
              role: 'role',
              tel: '09025940921',
            }
          ]
        },{
          title: 'some role',
          members: [
            {
              imgUrl: '/sample-banner.webp',
              alt: 'alt',
              name: 'some team member',
              role: 'role',
              tel: '09025940921',
            }
          ]
        },
      ]} />

      <section className='custom-container-padding custom-lightbg'>
        <Carousel title='Blog Posts' rowOrCol='flex-col' posts={[
          {
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },
        ]} />
      </section>

      <section className='custom-container-padding bg-white'>
        <Carousel title='partnership' rowOrCol='flex-row justify-between mt-2' posts={[
          {
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },{
            imgUrl: '/sample-banner.webp',
            alt: 'alt2',
            title: 'product text',
            btnText: 'product btn',
            link: '#'
          },
        ]} />
      </section>

    </main>
  )
}
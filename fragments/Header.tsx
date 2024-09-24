"use client"

import Image from 'next/image'
import React, { useState } from 'react';
import Phonenumber from '@/components/Phonenumber';
import HeaderItems from '@/components/Header-items';
import Megamenu from '@/fragments/Megamenu';

import { FiMenu } from 'react-icons/fi';
import MegamenuMobile from './Megamenu-mobile';
import Link from 'next/link';

type Props = {
  logo_alt: string,
}

export default function Header({ logo_alt }: Props) {

  const [headerItems, setheaderItems] = useState([
    {
      text: 'Producers',
      link: '#',
    },{
      text: 'Producers',
      link: '#',
    },{
      text: 'Producers',
      link: '#',
    },{
      text: 'Producers',
      link: '#',
    },
  ])

  const [memegamenuItems, setMegamenuItems] = useState([
    {
      text: 'Product 1',
      link: '#',
      icon: 'sth',
      subcategories: [
        {
          text: 'some product',
          link: '#',
          arrow: true,
          subitems: []
        },{
          text: 'Sizes',
          link: '#',
          arrow: true,
          subitems: [
            {
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            }
          ]
        },{
          text: 'Sizes',
          link: '#',
          arrow: true,
          subitems: [
            {
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            }
          ]
        },{
          text: 'Sizes',
          link: '#',
          arrow: true,
          subitems: [
            {
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            }
          ]
        }
      ],
    },{
      text: 'Product 1',
      link: '#',
      icon: 'sth',
      subcategories: [
        {
          text: 'Sizes',
          link: '#',
          arrow: true,
          subitems: [
            {
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            }
          ]
        },{
          text: 'Sizes',
          link: '#',
          arrow: true,
          subitems: [
            {
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            },{
              text: 'Some Product',
              link: '#',
              arrow: false,
              subitems: []
            }
          ]
        }
      ],
    },
  ])

  const [menuCollapsed, setMenuCollapsed] = useState(true)

  function updateMenuState() {
    setMenuCollapsed(currentState => !currentState)
  }
  
  return (
    <header className="sticky top-0 z-20 flex flex-row justify-between items-center shadow-custom py-3 px-10 md:px-24 bg-white">

      {/* the menu button for mobile */}
      <div className='lg:hidden custom-text' onClick={updateMenuState}>
        <FiMenu className='text-4xl' />
      </div>

      <div className='flex flex-row gap-5 items-center'>

        {/* logo */}
        <Link href={'/'}>
          <Image
            src={'/sample-banner.webp'}
            alt={logo_alt}
            width={160}
            height={20}
          />
        </Link>

        {/* large screens menu items */}
        <div className={`hidden lg:!flex flex-row items-center`}>
          <Megamenu items={memegamenuItems} />
          {headerItems.map(({text, link}, key) => <HeaderItems key={key} text={text} link={link}/>)}
        </div>

      </div>

      {/* small screens menu items */}
      <div className='fixed top-0 right-0 w-full'>
        <div className={`flex flex-row w-full lg:max-w-0 absolute top-0 right-0 z-50 overflow-hidden transition-all ${menuCollapsed ? 'max-w-0' : 'max-w-full'}`}>
          <div dir="rtl" className='relative z-50 overflow-y-auto h-screen w-7/12 bg-white flex flex-col'>
            <MegamenuMobile items={memegamenuItems} />
            {headerItems.map(({text, link}, key) => <HeaderItems key={key} text={text} link={link}/>)}
          </div>
          <div className='w-5/12 h-screen custom-darkbg opacity-70' onClick={updateMenuState}></div>
        </div>
      </div>

      {/* CTA */}
      <Phonenumber number={'۰۲۱ - ۹۱۰۰۳۱۸۱'}/>

    </header>
  )
}

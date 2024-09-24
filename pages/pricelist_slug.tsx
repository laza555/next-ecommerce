"use client"

import AdsBanners from "@/fragments/AdsBanners"
import Breadcrumb from "@/fragments/Breadcrumb"
import Cta from "@/fragments/Cta"
import PriceTables from "@/fragments/PriceTables"
import VerticalQuickSearch from "@/fragments/Filter/Vertical-QuickSearch"
import { Factory } from "@/types/Table"
import Usage from "@/fragments/Filter/Usage"
import WeightCalculator from "@/fragments/Filter/WeightCalculator"
import AdsBanner from "@/components/AdsBanner"
import Carousel from "@/fragments/Carousel"
import ReadMore from "@/components/ReadMore"
import Heading from "@/components/Heading"
import Image from "next/image"

type Props = {
  currentPage: PageBasicInfo,
  parentPage: PageBasicInfo,
  factories: Factory[]
}

type PageBasicInfo = {
  title: string,
  slug: string,
  link: string,
}

export default function Pricelist({ currentPage, parentPage, factories }: Props) {

  return (
    <main className='flex flex-col custom-lightbg'>
      <Breadcrumb items={[
        {
          title: 'Home',
          link: '#',
        },
        // {/* Process the items to include the keyword "Price"
        // since the original format of the titles must be kept and used */}
        {
          ...parentPage,
          title: 'Price ' + parentPage.title
        },
        {
          ...currentPage,
          title: 'Price ' + currentPage.title
        }
      ]} />
      <AdsBanners items={[
        {
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },{
          imgUrl: '/sample-banner.webp',
          alt: 'alt',
          link: '#'
        },
      ]} />
      <section className="flex flex-col lg:flex-row custom-container-padding custom-gap">

        {/* sidebar */}
        <section className="flex flex-col custom-gap w-full lg:w-4/12">
          <Usage pageTitle={currentPage.title} />
          <WeightCalculator />
          <AdsBanner imgUrl='/sample-banner.webp' alt='alt' link='#' />
          <AdsBanner imgUrl='/sample-banner.webp' alt='alt' link='#' />
        </section>

        {/* main bar */}
        <section className="flex flex-col custom-gap w-full">
          <Cta tel="۰۲۱۹۱۰۰۳۱۸۱" />
          <VerticalQuickSearch title={currentPage.title} />
          <PriceTables factories={factories} />
        </section>

      </section>

      <section className="custom-container-padding bg-white custom-gap flex flex-col">
        <Heading text={currentPage.title} />
        <div className="flex flex-col md:flex-row w-full custom-gap">
          <Image
            src='/sample-banner.webp'
            alt='alt'
            style={{
              width: '100%',
              height: 'fit-content',
            }}
            width={300}
            height={200}
            className="custom-border overflow-hidden md:!w-3/4"
          />
          <ReadMore text="Some Long description" />
        </div>
      </section>
      
      <section className='custom-container-padding custom-lightbg'>
        <Carousel title={`Blog ${currentPage.title}`} rowOrCol='flex-col' posts={[
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

// export async function getStaticPaths() {
//   return ({
//     fallback: false,
//     paths: [
//       {params: {pricelist_slug: 'ajdar-milgerd'}}
//     ]
//   })
// }

export async function getStaticProps({}: any) {

  // const { pricelist_slug } = params;

  const props: Props = {
    currentPage: {
      title: 'some product',
      slug: 'ajdar',
      link: '/milgerd/ajdar'
    },
    parentPage: {
      title: 'some product',
      slug: 'milgerd',
      link: '/milgerd'
    },
    factories: [
      {
        info: {
          title: 'product text',
          date: 'Today',
          upToDate: true,
          rateValue: '0.09',
        },
        products: [
          {
            title: 'some product',
            factoryName: 'some factory',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },{
            title: 'some product',
            factoryName: 'some factory',
            size: '۱۲',
            standard: '۱۲',
            price: '۲,۰۰۰',
          },{
            title: 'some product',
            factoryName: 'some factory',
            size: '۱۲',
            standard: '۱۲',
            price: '۱,۲۲۷,۰۰۰',
          },{
            title: 'some product',
            factoryName: 'some factory',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },
        ]
      },{
        info: {
          title: 'product text',
          date: 'yesterday',
          upToDate: false,
          rateValue: '0.09',
        },
        products: [
          {
            title: 'some product',
            factoryName: 'some factory',
            size: '12',
            standard: '12',
            price: '۲۲۷,۰۰۰',
          },{
            title: 'some product',
            factoryName: 'some factory',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },{
            title: 'some product',
            factoryName: 'some factory',
            size: '۱۲',
            standard: '۱۲',
            price: '۲۲۷,۰۰۰',
          },
        ]
      }
    ]
  }

  return {
    props: props
  }
}

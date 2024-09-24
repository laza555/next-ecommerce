import React, { useState } from 'react'
import TableNav from './Nav'
import { FactoryInfo, Product } from '@/types/Table'
import TheTable from './TheTable'
import Toolsbar from './Toolsbar'

type Props = {
    nav: FactoryInfo,
    products: Product[]
}

export default function PriceTable({ nav, products }: Props) {
    const [rateActive, setRateActive] = useState(false)

	return (
    <section className='flex flex-col'>
        <div className='flex flex-col gap-2'>
            <TableNav {...nav} rateFunc={() => setRateActive(prevState => !prevState)} rateActive={rateActive}  />
            <TheTable products={products} rateState={rateActive} rateValue={nav.rateValue} />
        </div>
        <Toolsbar bgcolor={products.length%2 ? 'custom-gray' : 'white'} />
    </section>
	)
}

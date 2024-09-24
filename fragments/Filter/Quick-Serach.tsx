import CustomSelect from '@/components/Form/CustomSelect'
import Heading from '@/components/Heading'
import React from 'react'

type Props = {}

export default function QuickSearch({ }: Props) {
	return (
    <section className='divide-y custom-border'>
      <Heading text="Quick Search" underline={'partial'} />
      <form className='w-full flex flex-col gap-4 p-6 items-center'>

        {/* Product select options */}
        <CustomSelect id={'product_filter'} options={[
          {
            text: 'product select',
            value: '1'
          },{
            text: 'product 2',
            value: '2'
          },{
            text: 'product 3',
            value: '3'
          },
        ]} />

        {/* Factory select options */}
        <CustomSelect id={'factory_filter'} options={[
          {
            text: 'select factory',
            value: '1'
          },{
            text: 'factory 2',
            value: '2'
          },{
            text: 'factory 3',
            value: '3'
          },
      ]} />

        {/* Size select options */}
        <CustomSelect id={'size_filter'} options={[
          {
            text: 'select sizes',
            value: '1'
          },{
            text: 'size 2',
            value: '2'
          },{
            text: 'size 3',
            value: '3'
          },
        ]} />

        <input className='cursor-pointer bg-custom-orange custom-text text-base w-fit py-3 px-5 rounded-2xl mt-2' type='submit' value={"Quick Search"}></input>

      </form>
    </section>
	)
}

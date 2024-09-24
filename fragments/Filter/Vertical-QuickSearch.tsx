import CustomSelect from '@/components/Form/CustomSelect'
import Heading from '@/components/Heading'
import React from 'react'

type Props = {
  title: string,
}

export default function VerticalQuickSearch({ title }: Props) {
	return (
    <section className={`divide-y custom-border bg-white`}>
      <Heading text={`Quick Search ${title}`} underline={'partial'} />
      <form className='w-full flex flex-col md:flex-row gap-4 p-6 items-center'>
        {/* Factory select options */}
        <CustomSelect id={'factory_filter'} fullyRounded={true} options={[
          {
            text: 'factory',
            value: '1'
          },{
            text: 'product 2',
            value: '2'
          },{
            text: 'product 3',
            value: '3'
          },
        ]} />

        {/* Size select options */}
        <CustomSelect id={'size_filter'} fullyRounded={true} options={[
          {
            text: 'size',
            value: '1'
          },{
            text: 'size 2',
            value: '2'
          },{
            text: 'size 3',
            value: '3'
          },
        ]} />

        {/* Standard select options */}
        <CustomSelect id={'standard_filter'} fullyRounded={true} options={[
          {
            text: 'standard',
            value: '1'
          },{
            text: 'standard 2',
            value: '2'
          },{
            text: 'standard 3',
            value: '3'
          },
        ]} />

        {/* usage select options */}
        <CustomSelect id={'usage_filter'} fullyRounded={true} options={[
          {
            text: 'usage',
            value: '1'
          },{
            text: 'usage 2',
            value: '2'
          },{
            text: 'usage 3',
            value: '3'
          },
        ]} />
        
      </form>
    </section>
	)
}

import {  FiDownloadCloud, FiPrinter } from 'react-icons/fi'

type Props = {
  bgcolor: 'white' | 'custom-gray'
}

export default function Toolsbar({ bgcolor }: Props) {

	return (
    <section className='w-full -mt-1'>
      <div className='w-fit mr-auto flex flex-row'>
        {/* triangle */}
        <span className={`w-0 h-0 
          border-b-[40px] border-b-transparent
          border-l-[24px] ${bgcolor == 'white' ? 'border-l-white' : 'border-l-custom-gray'} 
          border-t-[0px] border-t-transparent`}>
        </span>
        {/* TODO: Setup the print and download functionalities */}
        <div className={`${bgcolor == 'white' ? 'bg-white' : 'bg-custom-gray'} flex flex-row gap-4 items-center pl-5 pr-3 custom-border !border-t-0 !border-r-0 !rounded-t-none !rounded-br-none`}>
          <FiPrinter className='text-2xl stroke-2 cursor-pointer' />
          <FiDownloadCloud className='text-2xl stroke-2 cursor-pointer' />
        </div>
      </div>
    </section>
	)
}

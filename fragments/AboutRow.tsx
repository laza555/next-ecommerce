import Heading from '@/components/Heading'
import React, { useState } from 'react'

type Props = {
  description: string,
  videoUrl: string,
  poster: string
}

export default function AboutRow({ description, videoUrl, poster }: Props) {

  const [showControls, setShowControls] = useState(false);

	return (
    <section className='flex bg-custom-orange custom-container-padding'>
      <section className='flex flex-row flex-wrap py-8 gap-6 overflow-x-hidden w-fit'>
        <Heading color='border-white' text='About' textClasses={'text-xl'} />
        <div className='flex flex-col-reverse md:flex-row md:items-start items-center gap-5' dir='ltr'>
          <p className='custom-text' dir='rtl'>{description}</p>
          <video poster={poster} width="500" controls={showControls} onClick={() => setShowControls(true)}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </section>
    </section>
	)
}

import React from 'react';

type Props = {
  lastupdate: string,
  prices: string[],
  date1: string,
  date2: string,
}

export default function Topnav({ lastupdate, prices, date1, date2 }: Props) {
  const price = (text: string, key: number) => (
    <span key={key} className="custom-text text-md font-medium">
      {text}
    </span>
  )

  return (
    <nav className="bg-custom-orange py-2 px-10 md:px-24 flex flex-row items-center justify-between">

        {/* <!-- Other side of the Nav, like Search or Profile --> */}
        <div className="custom-text text-md font-medium">
          <span>{date1} - {date2}</span>
        </div>

        {/* <!-- Navigation Links --> */}
        <div className="flex flex-row items-center space-x-4 gap-3">
          {prices.map((item, key) => price(item, key))}
        </div>

        {/* <!-- Logo or Brand Name --> */}
        <div className="custom-text text-md font-medium flex flex-row">
          <span className='hidden md:block'>Latest Update : </span>
          <span className='block md:hidden'>Update : </span>
          <span>{lastupdate}</span>
        </div>

    </nav>
  )
}

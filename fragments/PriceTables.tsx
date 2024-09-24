import PriceTable from '@/components/Table/PriceTable'
import { Factory } from '@/types/Table'

type Props = {
  factories: Factory[]
}

export default function PriceTables({ factories }: Props) {

	return (<section className='flex flex-col gap-5'>
    {factories.map((factory, key) => <PriceTable
      key={key}
      nav={{...factory.info}}
      products={factory.products}
    />)}
  </section>)
}

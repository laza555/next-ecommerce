import { convertToEng } from "@/lib/number"
import { Product } from "@/types/Table"

type Props = {
  products: Product[],
  rateState: boolean,
  rateValue: string
}

const colStyle = "font-medium text-center"

export default function TheTable({ products, rateState, rateValue='0' }: Props) {
	return (<table className="table-auto overflow-hidden custom-border">
    {/* table head */}
    <thead className="relative">
      <tr className="h-12 relative bg-[#ffd579]">
        <th className={colStyle}>Good</th>
        <th className={colStyle}>Factory</th>
        <th className={colStyle}>Size</th>
        <th className={colStyle}>Standard</th>
        <th className={colStyle}>Price</th>
      </tr>
    </thead>
    {/* table body */}
    <tbody>
      {products.map((product, key) => <tr className={`odd:bg-custom-gray even:bg-white py-2 h-12`} key={key}>
        <td className={colStyle}>{product.title}</td>
        <td className={colStyle}>{product.factoryName}</td>
        <td className={colStyle}>{product.size}</td>
        <td className={colStyle}>{product.standard}</td>
        <td className={colStyle}>{rateState ? (Number(convertToEng(product.price).replaceAll(',', ''))+Number(convertToEng(product.price).replaceAll(',', ''))*Number(convertToEng(rateValue))).toLocaleString() : product.price}</td>
      </tr>)}
    </tbody>
  </table>)
}

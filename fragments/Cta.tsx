import { convertToEng } from "@/lib/number"
import Link from "next/link"
import { FiPhone } from "react-icons/fi"

type Props = {
  tel: string,
}

export default function Cta({ tel }: Props) {
  return (<section className="flex flex-row items-center bg-white custom-border p-3 justify-center gap-2 rounded-xl">
    <FiPhone className="-scale-x-[1] scale-y-[1] fill-red-500 stroke-red-800 text-2xl" />
    <p className="text-base">Consult</p>
    <Link
      href={`tel:+98${convertToEng(tel.replaceAll('-', '').slice(1))}`}
      className="bg-red-500 p-2 px-3 text-white font-bold custom-border !rounded-full tracking-wider"
    >{tel}</Link>
  </section>)
}

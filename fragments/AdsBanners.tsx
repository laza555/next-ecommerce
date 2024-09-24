import AdsBanner from "@/components/AdsBanner";
import { AdsBanner as AdsBanner_d } from "@/types/AdsBanner";

type Props = {
  items: AdsBanner_d[]
}
export default function AdsBanners({ items }: Props) {
  return <section className="custom-container-padding !py-0 flex flex-col gap-2">
    {items.map((item, key) => <AdsBanner key={key} {...item} />)}
  </section>
}

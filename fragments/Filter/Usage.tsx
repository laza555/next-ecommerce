import CustomRadio from "@/components/Form/CustomRadio"
import CustomSelect from "@/components/Form/CustomSelect"
import Heading from "@/components/Heading"

type Props = {
  pageTitle: string,
}
export default function Usage({ pageTitle }: Props) {
  return (<section className={`divide-y custom-border bg-white`}>
    <Heading text={`${pageTitle}, what for?`} underline={'partial'} />
    <div className="flex flex-col gap-2 p-5">
      <CustomSelect id={'usage_method_filter'} fullyRounded={true} options={[
        {
          text: 'usage',
          value: "0"
        },{
          text: 'usage',
          value: "0"
        },{
          text: 'usage',
          value: "0"
        },
      ]}
      />
      <p>More:</p>
      <CustomRadio id="item1" value="item1" label="some product" name="usage_radio" />
      <CustomRadio id="item2" value="item2" label="some product" name="usage_radio" />
      <CustomRadio id="item3" value="item3" label="some product" name="usage_radio" />
      <CustomRadio id="item4" value="item4" label="some product" name="usage_radio" />
      <CustomRadio id="item5" value="item5" label="some product" name="usage_radio" />
    </div>
  </section>)
}

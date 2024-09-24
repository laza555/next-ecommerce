import CustomInput from "@/components/Form/CustomInput"
import CustomSelect from "@/components/Form/CustomSelect"
import Heading from "@/components/Heading"

type Props = {
}

export default function WeightCalculator({ }: Props) {
  return (<section className={`divide-y custom-border bg-white`}>
    <Heading text={`Weight Calculation`} underline={'partial'} />
    <div className="flex flex-col gap-2 p-5">
      <div className="flex flex-row w-full gap-5">
        <div className="flex flex-col justify-around">
          <label htmlFor="">size</label>
          <label htmlFor="">standard</label>
          <label htmlFor="">amount</label>
        </div>
        <div className="flex flex-col w-full gap-2">
          {/* Size */}
          <CustomSelect fullyRounded={true}
            // label="size"
            id="weightcalculator_size"
            options={[
              {
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },{
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },{
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },
            ]}
          />

          {/* Standard */}
          <CustomSelect fullyRounded={true}
            // label="standard"
            id="weightcalculator_standard"
            options={[
              {
                text: 'A12',
                value: 'A12'
              },{
                text: '15',
                value: '15'
              },{
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },{
                text: '14',
                value: '14'
              },{
                text: '15',
                value: '15'
              },
            ]}
          />

          {/* Quantity */}
          <div className="flex flex-row items-center gap-3">
            <CustomInput
              id="weightcalculator_quantity"
              // label="amount"
              fullyRounded={true}
              placeholder="۱۰" 
              min={1}
              type="number"
              customclasses="max-w-12"
            />
            <CustomSelect fullyRounded={true}
              id="weightcalculator_quantity_type"
              options={[
                {
                  text: 'some branch',
                  value: 'A12'
                },{
                  text: '15',
                  value: '15'
                },{
                  text: '14',
                  value: '14'
                },{
                  text: '15',
                  value: '15'
                },{
                  text: '14',
                  value: '14'
                },{
                  text: '15',
                  value: '15'
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Result */}
      <CustomInput
        id="weightcalculator_result"
        fullyRounded={true}
        placeholder="۰" 
        type="text"
        customclasses="w-full border-custom-orange"
        disabled={true}
      />

    </div>
  </section>)
}

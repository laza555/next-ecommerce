export type Input = {
  name?: string,
  id: string,
  label?: string,
  fullyRounded?: boolean,
  value?: string,
  placeholder?: string,
  options?: Select[],
  type?: 'number' | 'text' | 'submit',
  min?: number,
  max?: number,
  customclasses?: string,
  disabled?: boolean
}

type Select = {
	text: string,
  value: string
}
export type Nav = FactoryInfo & {
	rateActive: boolean,
  rateFunc: () => void
}

export type Factory = {
  info: FactoryInfo,
  products: Product[]
}

export type FactoryInfo = {
  title: string,
  date: string,
  upToDate: boolean,
  rateValue: string
}
export type Product = {
  title: string,
  factoryName: string,
  size: string,
  standard: string,
  price: string,
}
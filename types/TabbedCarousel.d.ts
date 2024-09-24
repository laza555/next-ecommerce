export type Item = {
  head: Head,
  body: Box[],
}

export type Head = {
	title: string,
	imgUrl: string,
	alt: string,
}

export type Box = {
  title: string,
  imgUrl: string,
  alt: string,
  date: string,
  link: string
}
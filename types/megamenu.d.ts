export type MegamenuItem = {
	icon: string,
	text: string,
	link: string,
	subcategories: MegamenuSubItem[],
}

type MegamenuSubItem = {
  text: string,
  link: string,
  arrow: boolean,
  subitems: MegamenuSubItem[]
}
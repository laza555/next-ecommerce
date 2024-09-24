import React from 'react'
import { Member as Member_d } from '@/types/Members'
import Member from './Member'

type Props = {
  active: boolean,
  members: Member_d[]
}

export default function Members({ active, members }: Props) {
	return (
		<section className={`${active ? '!flex' : 'hidden'} flex-row flex-wrap justify-center items-center gap-5`}>
			{members.map((member, key) => <Member key={key} name={member.name} role={member.role} imgUrl={member.imgUrl} alt={member.alt} tel={member.tel} />)}
		</section>
	)
}

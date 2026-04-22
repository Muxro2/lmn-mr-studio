const ITEMS = [
	'Hair Oil', 'Hair Butter', 'Growth & Moisture', 'Length & Retention',
	'100% Natural', 'Brixton Pop-Up', 'Black Owned', 'Organic Herbs',
]

export default function LmnTicker() {
	return (
		<div className="bg-[#C27B1A] overflow-hidden py-[11px]">
			<div className="flex w-max [animation:var(--animate-lmn-tick)]">
				{[...ITEMS, ...ITEMS].map((item, i) => (
					<span key={i} className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/90 whitespace-nowrap px-[18px] after:content-['◆'] after:ml-[18px] after:opacity-40 after:text-[7px]">
						{item}
					</span>
				))}
			</div>
		</div>
	)
}

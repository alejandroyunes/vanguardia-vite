import { BillboardTwoContainer, BillboardRight, BillboardLeft } from './billboard-two.styled'
import dashboard from '../../assets/billboard-two.webp'
import Checkmark from './Checkmark'

type SolutionsOnline = {
	label: string
	title: string
	subtitle: string
	listOne: string
	listTwo: string
	listThree: string
	listFour: string
	labelFooter: string
	alt: string
}

export default function BillboardTwo(props: SolutionsOnline) {

	const {
		label,
		title,
		subtitle,
		listOne,
		listTwo,
		listThree,
		listFour,
		labelFooter,
		alt
	} = props

	return (
		<BillboardTwoContainer>
			<BillboardLeft>
				<h3>{label}</h3>
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
				<ul>
					<li>
						<Checkmark />
						<p>{listOne}</p>
					</li>
					<li>
						<Checkmark />
						<p>{listTwo}</p>
					</li>
					<li>
						<Checkmark />
						<p>{listThree}</p>
					</li>
					<li>
						<Checkmark />
						<p>{listFour}</p>
					</li>
				</ul>
				<h2>{labelFooter}</h2>
			</BillboardLeft>

			<BillboardRight>
				<a href="" className="btn-video">
					<img src={dashboard} alt={alt} />
					<span className="wrap-icon-play">
						<svg width="1em" height="1em" viewBox="0 0 16 16" fill="#AE3C43" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
						</svg>
					</span>
				</a>
			</BillboardRight>
		</BillboardTwoContainer>
	);
}

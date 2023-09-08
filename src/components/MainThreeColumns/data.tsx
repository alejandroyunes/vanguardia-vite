import MobileDesignIcon from "../../images/mobile-design-icon.svg";
import ResponsiveDesignIcon from "../../images/responsive-design-icon.svg";
import RocketAnimation from "./rocket.svg"

interface ThreeColumns {
	cards: {
		image: string
		title: string
		subtitle: string
		message: string
		viewMore: boolean
	}[]
}

export const three_columns: ThreeColumns = {
	cards: [
		{
			image: ResponsiveDesignIcon,
			title: 'Diseño Simple y Efectivo',
			subtitle: 'Sitios con el mejor rendimiento',
			message: 'Impresiona a tus clientes con una app rápida, moderna, personalizada y a la vanguardia con el diseño gráfico.',
			viewMore: false,
		},
		{
			image: MobileDesignIcon,
			title: 'Ajustabilidad',
			subtitle: 'Diseños totalmente responsive',
			message: 'En el mundo moderno hay más de 5.000 millones de usuarios únicos con dispositivos móviles, esto cubre el 67% de la población.',
			viewMore: false,
		},
		{
			image: RocketAnimation,
			title: 'SEO & Marketing',
			subtitle: 'Tiempo de carga',
			message: 'Contamos con los mejores servidores del mercado, así podemos ofrecerte velocidad en tus aplicaciones.',
			viewMore: false,
		}
	]
}
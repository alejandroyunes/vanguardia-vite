import Animation from './svgs/app/animation.svg'

import MobileDesignIcon from './svgs/main-cards/mobile-design-icon.svg'
import ResponsiveDesignIcon from "./svgs/main-cards/responsive-design-icon.svg"
import RocketAnimation from "./svgs/main-cards/rocket.svg"

import Dashboard from './images/app/billboard-two.webp'

export interface BillboardProps {
  title: string
  subtitle: string
  button: string
  image: string
  alt: string
}

export interface MainCardProps {
    image: string
    alt: string
    title: string
    subtitle: string
    message: string
    viewMore: boolean
}

export interface BillboardTwoTypes {
	label: string
	title: string
	subtitle: string
	listOne: string
	listTwo: string
	listThree: string
	listFour: string
	labelFooter: string
	image: string
	alt: string
}

export interface mainDesignTypes {
  altImageOne: string
  altImageTwo: string
  altImageThree: string
  altImageFour: string
  altImageFive: string
}


export const spanish = {
  billboard: {
    title: "Construimos Experiencias Web Asombrosas",
    subtitle: "Somos una agencia digital líder con amplia experiencia en diseño y desarrollo. Nos especializamos en la creación de productos móviles y aplicativos web.",
    button: "Contáctanos",
    image: Animation,
    alt: "Avatars construyendo un sitio web por componentes animada"
  },
  titleOne: {
    title: "Technologías",
    message: "La Era Móvil"
  },
  mainCards: [
    {
			image: ResponsiveDesignIcon,
      alt: "Icono de un monitor o PC",
			title: 'Simple y Efectivo',
			subtitle: 'Apps de Alto Rendimiento',
			message: 'Deja una impresión duradera en tus clientes con una aplicación rápida, moderna, personalizada y con un diseño gráfico de vanguardia.',
			viewMore: false,
		},
		{
			image: MobileDesignIcon,
      alt: "Icono de un celuar",
			title: 'Adaptabilidad Móvil',
			subtitle: 'Diseños Completamente Adaptables',
			message: 'En el mundo actual, existen más de 5 mil millones de usuarios únicos de dispositivos móviles, lo que equivale al 67% de la población global.',
			viewMore: false,
		},
		{
			image: RocketAnimation,
      alt: "Icono de un Cohete",
			title: 'Estrategia Digital',
			subtitle: 'Elevando en el Mundo Digital',
			message: 'Estrategias digitales para promover marcas, interactuar con el público y lograr objetivos comerciales con eficacia',
			viewMore: false,
		}
  ],
  billboardTwo: {
    label: "SOLUCIONES EN LÍNEA",
    title: "¿Necesitas un Sitio Web?",
    subtitle: "Principales razones para contratar profesionales en la web.",
    listOne: "Especialización en desarrollo web",
    listTwo: "Resultados medibles y métricas de tráfico",
    listThree: "Creatividad, marketing digital, SEO y más",
    listFour: "Soporte y escalabilidad",
    labelFooter: "Podemos ayudarte a conseguir un dominio que se ajuste a tu negocio, el alojamiento y un diseño web profesional de calidad.",
    image: Dashboard,
    alt: 'Imagen con estadísticas de un sitio web',
  },
  titleTwo: {
    title: "Diseñado para Todos los dispositivos",
    message: "Diseños Creativos"
  },
  mainDesign: {
    altImageOne: "Icono de computador con avatar sentado sobre el teclado",
    altImageTwo: "Icono de celular acostado con imagenes saliendo de él sobre redes sociales",
    altImageThree: "Icono de computador con avatar de seguridad",
    altImageFour: "Icono de computador con avatar señalando estadísticas sobre una tablet",
    altImageFive: "Icono de computador con avatar de usuario y su autenticación",
  },
  meta: "Somos una agencia digital líder con amplia experiencia en diseño y desarrollo. Nos especializamos en la creación de productos móviles y aplicativos web."
}

export const english = {
  billboard: {
    title: "Building Amazing Web Experiences",
    subtitle: "We are a leading digital agency with extensive experience in design and development. We specialize in the creation of mobile products and web applications.",
    button: "Contact us",
    image: Animation,
    alt: "Avatars constructing a website by components animated"
  },
  titleOne: {
    title: "Technologies",
    message: "Mobile Era"
  },
  mainCards: [
    {
			image: ResponsiveDesignIcon,
      alt: "Icon of a monitor or PC",
			title: 'Simple yet Effective',
			subtitle: 'High-Performance Apps',
			message: 'Leave a lasting impression on your customers with a fast, modern, customized application featuring cutting-edge graphic design.',
			viewMore: false,
		},
		{
			image: MobileDesignIcon,
			title: 'Mobile Adaptability',
      alt: "Icon of a mobile device",
			subtitle: 'Fully Responsive Designs',
			message: 'In today\'s world, there are more than 5 billion unique users of mobile devices, which accounts for 67% of the global population.',
			viewMore: false,
		},
		{
			image: RocketAnimation,
      alt: "Icon of a Rocket",
			title: 'Digital Strategy',
			subtitle: 'Boosting in the Digital World',
			message: 'Digital strategies to promote brands, engage with the audience, and achieve business goals effectively.',
			viewMore: false,
		}
  ],
  billboardTwo: {
    label: "ONLINE SOLUTIONS",
    title: "Need a Website?",
    subtitle: "Top reasons to hire web professionals.",
    listOne: "Specialization in web development",
    listTwo: "Measurable results and traffic metrics",
    listThree: "Creativity, digital marketing, SEO, and more",
    listFour: "Support and scalability",
    labelFooter: "We can assist you in getting a domain that fits your business, hosting, and high-quality professional web design.",
    image: Dashboard,
    alt: "Image with website statistics"
  },
  titleTwo: {
    title: "Designed for All Devices",
    message: "Creative Designs"
  },
  mainDesign: {
    altImageOne: "Icon of a computer with an avatar sitting on the keyboard",
    altImageTwo: "Icon of a horizontal mobile phone with images coming out of it of social media",
    altImageThree: "Icon of a computer with a security avatar",
    altImageFour: "Icon of a computer with an avatar pointing at statistics on a tablet",
    altImageFive: "Icon of a computer with a user avatar and authentication"
  },
  meta: "We are a leading digital agency with extensive experience in design and development. We specialize in the creation of mobile products and web applications."
}
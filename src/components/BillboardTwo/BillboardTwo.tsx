import { BillboardTwoContainer, BillboardRight, BillboardLeft } from './billboard-two.styled'
import dashboard from '../../assets/billboard-two.webp'
import Checkmark from './Checkmark'

export default function BillboardTwo() {
	return (
		<BillboardTwoContainer>
			<BillboardLeft>
				<h3>SOLUCIONES EN LÍNEA</h3>
				<h1>¿Necesitas un Sitio Web?</h1>
				<h2>
					Principales razones para contratar profesionales en la web.
				</h2>
				<ul>
					<li>
						<Checkmark />
						<p>Especialización en desarrollo web</p>
					</li>
					<li>
						<Checkmark />
						<p>Resultados medibles y métricas de tráfico</p>
					</li>
					<li>
						<Checkmark />
						<p>Creatividad, marketing digital, SEO, y más</p> 
					</li>
					<li>
						<Checkmark />
						<p>Soporte y escalabilidad</p>
					</li>
				</ul>
				<h2>
					Podemos ayudarte a conseguir un dominio que se ajuste a tu negocio, el alojamiento y un diseño web profesional de calidad.
				</h2>
			</BillboardLeft>

			<BillboardRight>
				<a href="https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s" className="btn-video" data-fancybox="">
					<img src={dashboard} alt="" />
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

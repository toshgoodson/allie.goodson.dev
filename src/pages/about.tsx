import { GetStaticProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import boyImg from '../../assets/images/profile/profile-boy.jpg'
import boyImg2x from '../../assets/images/profile/profile-boy@2x.jpg'
import meImg from '../../assets/images/profile/profile-me.jpg'
import meImg2x from '../../assets/images/profile/profile-me@2x.jpg'
import paintImg from '../../assets/images/profile/profile-paint.jpg'
import paintImg2x from '../../assets/images/profile/profile-paint@2x.jpg'
import pencilImg from '../../assets/images/profile/profile-pencil.jpg'
import pencilImg2x from '../../assets/images/profile/profile-pencil@2x.jpg'
import solderImg from '../../assets/images/profile/profile-solder.jpg'
import solderImg2x from '../../assets/images/profile/profile-solder@2x.jpg'
import { Brand } from '../components/Brand'
import { Flipbook } from '../components/Flipbook'
import { ContentContainer } from '../components/layout/ContentContainer'
import { MainLayout } from '../components/layout/MainLayout'
import { PageProps } from '../interfaces/PageProps'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'
import { rfs } from '../models/rfs'

const Description = styled.div`
	font-family: 'Judson', serif;
	${rfs.fontSize('28px')};

	@media (min-width: 768px) {
		margin-top: -0.35em;
	}

	${Brand} {
		${rfs.fontSize('26px')};
	}
`

type Props = PageProps

export default function About(props: Props) {
	const { darkMode } = useAppSelector(state => state)

	const images = [{
		src: meImg,
		src2x: meImg2x
	}, {
		src: paintImg,
		src2x: paintImg2x
	}, {
		src: pencilImg,
		src2x: pencilImg2x
	}, {
		src: solderImg,
		src2x: solderImg2x
	}, {
		src: boyImg,
		src2x: boyImg2x
	}]
	

	return <MainLayout {...props} darkMode={darkMode}>
		<ContentContainer>
			<div className="row gy-4 g-lg-4">
				<div className="col-12 col-md-5">
					<Flipbook images={images}/>
				</div>
				<div className="col-12 col-md-7">
					<Description>
						<p>Hello! I’m <Brand>Allie</Brand>. I am an artist with a bachelor’s in Digital Media Art from San Jose State University and professional UX/UI designer.</p>

						<p>My free time is usually spent on personal art projects or collaborative projects with friends in any medium I can get my hands on. I am excited to join a team that is motivated by solving problems and designing for change in the world.</p>
					</Description>
				</div>
			</div>
		</ContentContainer>
	</MainLayout>
}


export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(store =>
	async () => {
		return {
			props: {
				meta: {
					title: 'about | allie goodson',
					description: 'Hello! I’m Allie. I am an artist with a bachelor’s in Digital Media Art from San Jose State University and a professional UX/UI designer.'
				}
			}
		}
	}
)
import React, { FC, useState, useEffect } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from "../interfaces/Image"
import { rfs } from "../models/rfs"

const SwiperStyles = styled.div`
	.swiper-pagination-bullet {
		background: ${({theme}) => theme.colors[4][0]};
		height: 15px;
		opacity: 0.4;
		width: 15px;
	}
	.swiper-pagination-bullet-active {
		background: ${({theme}) => theme.colors[4][0]};
		opacity: 1;
	}
`
const NavButton = styled.button`
	background: none;
	border: 0;
	display: block;
	${rfs.padding('20px 5px')}
	width: 100%;
`
const PrevArrow = styled.div`
	border-bottom: 3px solid ${({theme}) => theme.colors[4][0]};
	border-radius: 3px;
	position: relative;

	&:before, &:after {
		border-bottom: 3px solid ${({theme}) => theme.colors[4][0]};
		border-radius: 3px;
		bottom: -3px;
		content: '';
		display: block;
		left: 0;
		position: absolute;
		transform-origin: 1px center;
		width: 10px;
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`
const NextArrow = styled(PrevArrow)`
	transform: rotate(180deg);
`

export type Props = {
	images: Image[]
}

export const ImageCarousel: FC<Props> = ({ images }) => {
	const [id, setId] = useState<string>()
	useEffect(() => {
		setId(`${Math.random()}`.replace('.', ''))
	}, [])

	return <div className="row align-items-center justify-items-center gx-0">
		<div className="col">
			<NavButton id={`prev-${id}`} aria-label="Previous image" type="button"><PrevArrow/></NavButton>
		</div>
		<SwiperStyles className="col-10 col-md-11">
			<Swiper
				loop
				pagination={{ clickable: true }}
				navigation={{
					nextEl: `#next-${id}`,
					prevEl: `#prev-${id}`
				}}
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{images.map((image, idx) =>
					<SwiperSlide key={idx}><img src={image.src} alt={image.alt} srcSet={image.src2x && `${image.src2x} 2x` }/></SwiperSlide>
				)}
			</Swiper>
		</SwiperStyles>
		<div className="col text-end">
			<NavButton id={`next-${id}`} aria-label="Next image" type="button"><NextArrow/></NavButton>
		</div>
	</div>
}
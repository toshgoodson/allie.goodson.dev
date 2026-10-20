import React, { FC } from 'react'

type SourceProps = React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>
type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
type VideoProps = React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>

export type Props = {
	className?: string
	sources: Array<SourceProps>
	fallback: ImgProps
} & VideoProps

export const Video: FC<Props> = (props) => {
	return <video {...{...props, sources: undefined, fallback: undefined}}>
		{props.sources.map((source, idx) => 
			<source key={idx} {...source}/>
		)}
		<img {...props.fallback}/>
	</video>
}
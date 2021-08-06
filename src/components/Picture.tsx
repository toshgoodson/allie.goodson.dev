import React, { FC } from 'react'

type SourceProps = React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>
type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export type Props = {
	className?: string
	sources: Array<SourceProps>
	fallback: ImgProps
}

export const Picture: FC<Props> = (props) => {
	return <picture className={props.className}>
		{props.sources.map((source, idx) => 
			<source key={idx} {...source}/>
		)}
		<img {...props.fallback}/>
	</picture>
}
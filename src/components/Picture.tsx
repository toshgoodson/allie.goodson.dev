import React, { FunctionComponent } from 'react'

type SourceProps = React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>
type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

type Props = {
	sources: Array<SourceProps>
	fallback: ImgProps
}

export const Picture: FunctionComponent<Props> = (props) => {
	return <picture>
		{props.sources.map((source, idx) => 
			<source key={idx} {...source}/>
		)}
		<img {...props.fallback}/>
	</picture>
}
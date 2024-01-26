import React from 'react'
import styles from './Logo.module.scss'

interface IStyleElements {
	container: string
	text: string
	img?: string
}

interface ILogoProps {
	classNames: IStyleElements
	imgUrl?: string
	children: string
}

const Logo = ({ classNames, imgUrl, children }: ILogoProps ) => {
	return (
		<div className={`${classNames.container}`}>
			{imgUrl && (
				<img className={`${classNames.img}`} src={imgUrl} alt="logo" />
			)}
			<h1 className={`${classNames.text}`}>
				{children}
			</h1>
		</div>
	)
}

export default Logo

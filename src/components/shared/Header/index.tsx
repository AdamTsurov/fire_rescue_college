import React from 'react'
import styles from './Header.module.scss'
import Logo from '../Logo'
import logoUrl from '../images/logo.png'

const Header = () => {
	const stylesLogo = {
		text: 'text-fontcolors-black',
		img: '',
		container: '',
	}

	return (
		<div className={styles.header}>
			<Logo classNames={stylesLogo} imgUrl={logoUrl}>
				Государственное бюджетное профессиональное образовательное учреждение
				&quot;Пожарно-спасательный колледж&quot;
			</Logo>
		</div>
	)
}

export default Header

import React from 'react'
import styles from './main.module.scss'
import logo from '../assets/images/logo.png'
import Header from '../components/shared/Header'

function Main() {
	return (
		<div className={styles.app}>
				<Header/>
		</div>
	)
}

export default Main

import React from "react"

import Link from "./Link"
import styles from "./navbar.module.css"

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<h1 className={styles.navbar__header}>blog</h1>
			<ul className={styles.navbar__list}>
				<Link path="articles" name="articles" />
				<Link path="favourite" name="favourite" />
			</ul>
		</div>
	)
}

export default Navbar

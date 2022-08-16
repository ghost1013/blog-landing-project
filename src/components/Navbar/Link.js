import React from "react"
import { NavLink } from "react-router-dom"

import styles from "./navbar.module.css"

const Link = ({ name, path }) => (
	<li className={styles.list__item}><NavLink className={styles.list__link} to={path}>{name}</NavLink></li>
)

export default Link

import React from "react"

import { NavLink } from "react-router-dom"
import styles from "./articles.module.css"

const Article = ({ title, body, id }) => {
	return (
		<div className={styles.showcase__article}>
			<h3 className={styles.article__title}>{title}</h3>
			<div className={styles.article__body}>
				<p className={styles.article__text}>{body}</p>
				<NavLink className={styles.article__link} to={`/article_${id}`}>read more</NavLink>
			</div>
		</div>
	)
}

export default Article

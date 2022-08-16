import React from "react"

import styles from "./articles.module.css"
import photo from "../../assets/header-photo.jpg"

const ArticlesMain = () => {
	return (
		<>
			<div className={styles.articles__container}>
				<h1 className={styles.articles__header}>Articles & News</h1>
				<p className={styles.articles__info}>
					<span>Create your own content.</span>
					<span>Look for inspirations and knowledge.</span>
					<span>Follow your favourites.</span>
				</p>
			</div>
			<div className={styles.articles__mainarticle}>
				<img src={photo} className={styles.mainarticle__photo} />
				<div className={styles.mainarticle__content}>
					<h3 className={styles.content__title}>There might be <span>Your</span> title</h3>
					<p className={styles.content__text}>
						<span>There would go your content...</span>
						<span>There would go your content...</span>
						<span>There would go your content...</span>
					</p>
				</div>
			</div>
		</>
	)
}

export default ArticlesMain

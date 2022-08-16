import React from "react"

import styles from "./article.module.css"
import stylesMainArticle from "../ArticlesPage/articles.module.css"
import photo from "../../assets/article-photo.jpg"

const ArticleContent = ({ article, user, isFavourite, handleIsFavourite }) => {
	return (
			<div className={stylesMainArticle.articles__mainarticle}>
				<img src={photo} className={stylesMainArticle.mainarticle__photo} />
				<div className={stylesMainArticle.mainarticle__content}>
					<h3 className={styles.article__title}>{article.title}</h3>
					<p className={styles.article__text}>
						{article.body}
					</p>
					<p className={styles.article__author}>
						<span>author</span>
						<span>{user.name}</span>
						<span>{user.email}</span>
					</p>
					{
						isFavourite ?
							<button
								className={[styles["article__favourite--remove"]]}
								onClick={handleIsFavourite}>
									Remove from favourites!
							</button>
						:
							<button
								className={[styles["article__favourite--add"]]}
								onClick={handleIsFavourite}>
									Add to favourites!
							</button>
					}
				</div>
			</div>
	)
}

export default ArticleContent

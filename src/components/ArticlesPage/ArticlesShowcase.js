import React from "react"


import Article from "./Article"
import styles from "./articles.module.css"

const ArticlesShowcase = ({ articles, title }) => {

	return (
		<>
			<h3 className={styles.articles__latest}>{title} articles</h3>
			<div className={styles.articles__showcase}>

				{
					articles.map((data, key) => {
						return (
							<Article title={data.title} body={data.body} key={key} id={data.id}/>
						)
					})
				}
			</div>
		</>
	)
}

export default ArticlesShowcase
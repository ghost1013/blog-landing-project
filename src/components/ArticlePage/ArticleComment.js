import React from "react"

import styles from "./article.module.css"

const ArticleComment = ({ comment }) => {
	return (
		<div className={styles.comment__content}>
			<p className={styles.comment__body}>{comment.body}<span>{comment.email}</span></p>
		</div>
	)
}

export default ArticleComment

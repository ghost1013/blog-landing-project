import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getArticle } from "../../actions/article"
import { getComments } from "../../actions/comments"
import { getUser } from "../../actions/user"
import { getFavouritesIds, addFavourite, removeFavourite } from "../../actions/favourites"
import { useSelector } from "react-redux"

import ArticleContent from "./ArticleContent"
import ArticleComments from "./ArticleComments"
import styles from "./article.module.css"

const ArticlePage = () => {

	const dispatch = useDispatch()
	const { id } = useParams()
	const article = useSelector((state) => state.article)
	const comments = useSelector((state) => state.comments)
	const user = useSelector((state) => state.user)
	const favourites = useSelector((state) => state.favourites)
	const [isFavourite, setIsFavourite] = useState()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		dispatch(getFavouritesIds())
		dispatch(getArticle(id))
		dispatch(getComments(id))
	}, [dispatch])

	useEffect(() => {
		dispatch(getUser(article.userId))
		let strId = id.toString()
		if (favourites.includes(strId)) {
			setIsFavourite(true)
		} else {
			setIsFavourite(false)
		}
	}, [article])

	const handleIsFavourite = () => {
		setIsFavourite(!isFavourite)
		if (!isFavourite) {
			dispatch(addFavourite(id))
		} else {
			dispatch(removeFavourite(id))
		}
	}

	return (
		<>
			{
				(user && comments && article) ?
					<div className={styles.article}>
						<ArticleContent
							article={article}
							user={user}
							isFavourite={isFavourite}
							handleIsFavourite={handleIsFavourite}
						/>
						<ArticleComments comments={comments} />
					</div>
				: null
			}
		</>
	)
}

export default ArticlePage

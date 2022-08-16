import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getFavouriteArticles } from "../../actions/favourites"
import { useSelector } from "react-redux"
import ArticleShowcase from "../ArticlesPage/ArticlesShowcase"

import styles from "./favourite.module.css"

const FavouriteArticlesPage = () => {

	const favouriteArticles = useSelector((state) => state.favourites)

	const dispatch = useDispatch()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		dispatch(getFavouriteArticles())
	}, [dispatch])

	return (
		<div className={styles.favourite}>
			{
				favouriteArticles.length > 0 ?
					<ArticleShowcase articles={favouriteArticles} title={"Favourite"} />
				:	<p className={styles.favourite__missing}>You dont have any favourite articles</p>
			}
		</div>
		)
}

export default FavouriteArticlesPage
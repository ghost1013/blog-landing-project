import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { getArticles } from "../../actions/articles"
import { useSelector } from "react-redux"

import ArticlesShowcase from "./ArticlesShowcase"
import ArticlesMain from "./ArticlesMain"
import ArticlesButtons from "./ArticlesButtons"
import styles from "./articles.module.css"

const ArticlesPage = () => {

	const [page, setPage] = useState(0)
	const [lastPage, setLastPage] = useState(false)
	const articles = useSelector((state) => state.articles)

	const dispatch = useDispatch()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

    useEffect(() => {
        dispatch(getArticles(page))
    }, [dispatch])

	useEffect(() => {
		articles.length < 8 ? setLastPage(true) : setLastPage(false)
	}, [articles])

	useEffect(() => {
		dispatch(getArticles(page))
	}, [page])

	const handlePage = (op) => {
		if (op === "inc" && !lastPage) {
			setPage(page + 1)
		} else if (op == "dec" && page - 1 >= 0) {
			setPage(page - 1)
		}
	}

	return (
		<div className={styles.articles}>
			<ArticlesMain />
			<ArticlesShowcase articles={articles} title={"Latest"} />
			<ArticlesButtons handlePage={handlePage} />
		</div>
	)
}

export default ArticlesPage

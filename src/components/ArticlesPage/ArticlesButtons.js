import React from "react"

import ArrowLeft from "../../assets/arrow-left.svg"
import ArrowRight from "../../assets/arrow-right.svg"
import styles from "./articles.module.css"

const ArticlesButtons = ({ handlePage }) => {
	return (
		<div className={styles.articles__buttons}>
			<button
				className={styles.articles__button}
				onClick={() => handlePage("dec")}
			>
				<img src={ArrowLeft} className={styles.articles__arrow}/>
				previous
			</button>
			<button
				className={styles.articles__button}
				onClick={() => handlePage("inc")}
			>
				next
				<img src={ArrowRight} className={styles.articles__arrow}/>
			</button>
		</div>
	)
}

export default ArticlesButtons

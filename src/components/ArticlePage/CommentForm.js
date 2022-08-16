import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addComment } from "../../actions/comments"

import styles from "./article.module.css"

const CommentForm = () => {

	const dispatch = useDispatch()
	const [userComment, setUserComment] = useState({email: "", content: ""})
	const [errorMsg, setErrorMessage] = useState("")

	useEffect(() => {
		if (!checkError()) {
			setErrorMessage("")
		} else {
			setErrorMessage("At least 5 characters!")
		}
	}, [userComment])

	const handleChange = (event) => {
		const { name, value } = event.target
		setUserComment({...userComment, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!checkError()) {
			dispatch(addComment(userComment))
			setUserComment({email: "", content: ""})
		}
	}

	const checkError = () => {
		if (userComment.email.length >= 5 && userComment.content.length >= 5) {
			return false
		} else {
			return true
		}
	}

	return (
		<>
			<h3 className={styles.comment__header}>Add comment</h3>
			<form className={styles.comment__form} onSubmit={handleSubmit}>
        <label>
          <div className={styles.form__text}>Email</div>
          <input
						className={styles.form__name}
						type="text"
						placeholder="your email"
						name="email"
						value={userComment.email}
						onChange={handleChange}
					/>
        </label>
				<label>
					<div className={styles.form__text}>Comment</div>
          <textarea
						className={styles.form__comment}
						placeholder="your comment"
						name="content"
						value={userComment.content}
						onChange={handleChange}
					/>
        </label>
				{
					errorMsg.length > 0 &&
						<label><span className={styles.form__erorMsg}>{errorMsg}</span></label>
				}
        <input type="submit" value="send" />

      </form>
		</>
	)
}

export default CommentForm

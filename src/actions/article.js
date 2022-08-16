import * as api from "../api"

export const getArticle = (articleId) => async (dispatch) => {
    try {
        const data = await api.fetchArticle(articleId)
        dispatch({ type: "FETCH_BY_ID", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
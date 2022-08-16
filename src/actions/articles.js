import * as api from "../api"

export const getArticles = (page) => async (dispatch) => {
    try {
        const data = await api.fetchArticles(page)
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
import * as api from "../api"

export const getFavouritesIds = () => async (dispatch) => {
    try {
        const data = await api.fetchFavouriteIds()
        dispatch({ type: "FETCH_ALL_IDS", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const addFavourite = (articleId) => async (dispatch) => {
    try {
        const data = await api.addFavorite(articleId)
        dispatch({ type: "ADD", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const removeFavourite = (articleId) => async (dispatch) => {
    try {
        const data = await api.removeFavourite(articleId)
        dispatch({ type: "REMOVE", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getFavouriteArticles = () => async (dispatch) => {
    try {
        const data = await api.fetchFavouriteArticles()
        dispatch({ type: "FETCH_ALL_ARTICLES", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
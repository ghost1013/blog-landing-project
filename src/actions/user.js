import * as api from "../api"

export const getUser = (userId) => async (dispatch) => {
    try {
        const data = await api.fetchUser(userId)
        dispatch({ type: "FETCH_USER", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
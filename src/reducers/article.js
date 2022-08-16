const articlesReducer =  (article = {}, action) => {
    switch (action.type) {
        case "FETCH_BY_ID":
            return action.payload
        default:
            return article
    }
}

export default articlesReducer
const articlesReducer =  (articles = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload
        default:
            return articles
    }
}

export default articlesReducer
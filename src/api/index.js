export const fetchArticles = async (page) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        let start = page * 8
        let end = start + 8
        data = data.filter((elem) => elem.id > start && elem.id <= end)
        return data
    } catch (error) {
        throw Error(`Couldnt fetch the articles! Error message:${error}`)
    }
}

export const fetchArticle = async (articleId) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        let article = data.filter((elem) => elem.id == articleId)
        return article[0]
    } catch (error) {
        throw Error(`Couldnt fetch the article! Error message:${error}`)
    }
}

export const fetchComments = async (articleId) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json()
        let comments = data.filter((elem) => elem.postId == articleId)
        return comments
    } catch (error) {
        throw Error(`Couldnt fetch the comments! Error message:${error}`)
    }
}

export const sendComment = async(comment) => {
    try {
        // There I would send comment to backend and then return it
        return {
            postid:0,
            id: 0,
            name: "",
            body: comment.content,
            email: comment.email
        }
    } catch (error) {
        throw Error(`Couldnt add the comment! Error message:${error}`)
    }
}

export const fetchUser = async (userId) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        data = data.filter((elem) => elem.id == userId)
        return data[0]
    } catch (error) {
        throw Error(`Couldnt fetch the user! Error message:${error}`)
    }
}

export const fetchFavouriteIds = async () => {
    try {
        const favourites = localStorage.getItem("favourites").split(",")
        return favourites
    } catch (error) {
        throw Error(`Couldnt fetch favouritesIds! Error message:${error}`)
    }
}

export const addFavorite = async (articleId) => {
    try {
        if (localStorage.getItem("favourites")) {
            let favourites = localStorage.getItem("favourites").split(",")
            favourites.push(articleId)
            localStorage.removeItem("favourites")
            localStorage.setItem("favourites", favourites)
            return favourites
        }
        else {
            let favourites = []
            favourites.push(articleId)
            localStorage.setItem("favourites", favourites)
            return favourites
        }
    } catch (error) {
        throw Error(`Couldnt add to favourites! Error message:${error}`)
    }
}

export const removeFavourite = async (articleId) => {
    try {
        let favourites = localStorage.getItem("favourites").split(",")
        favourites = favourites.filter((id) => id != articleId)
        localStorage.removeItem("favourites")
        if (favourites.length > 0) {
            localStorage.setItem("favourites", favourites)
        }
        return favourites
    } catch (error) {
        throw Error(`Couldnt remove from favourites! Error message:${error}`)
    }
}

export const fetchFavouriteArticles = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        const favouriteIds = localStorage.getItem("favourites").split(",")
        let favourites = []
        for (let i = 0; i <= favouriteIds.length - 1; i++) {
            favourites.push(data.filter((elem) => elem.id == favouriteIds[i])[0])
        }
        return favourites
    } catch (error) {
        throw Error(`Couldnt fetch favourites! Error message:${error}`)
    }
}

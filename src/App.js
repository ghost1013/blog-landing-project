import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Navbar from "./components/Navbar"
import ArticlePage from "./components/ArticlePage"
import ArticlesPage from "./components/ArticlesPage"
import FavouriteArticlesPage from "./components/FavouriteArticlesPage"
import Footer from "./components/Footer"
import "./index.module.css"

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/articles" component={ArticlesPage} />
				<Route path="/favourite" component={FavouriteArticlesPage} />
				<Route path="/article_:id" component={ArticlePage} />
				<Route path="/"><Redirect to="/articles" /></Route>
			</Switch>
			<Footer />
    </Router>
	)
}

export default App


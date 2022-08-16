/**
 * @jest-environment jsdom
 */

import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import Article from "../ArticlesPage/Article"
import ArticlesShowcase from "../ArticlesPage/ArticlesShowcase"

test("Should be rendered", () => {
    render(
        <Router>
            <Article
                title="qui est esse"
                body="est rerum tempore vitae\nsequi sint nihil"
                id={2}
            />
        </Router>
    )
    const article_1 = screen.getByText("qui est esse")
    expect(article_1).toBeInTheDocument()
})

test("Should render proper values from props", () => {
    render(
        <Router>
            <ArticlesShowcase
                articles={[
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere",
                        "body": "quia et suscipit"
                      },
                      {
                        "userId": 1,
                        "id": 2,
                        "title": "qui est esse",
                        "body": "est rerum tempore vitae"
                      },
                      {
                        "userId": 1,
                        "id": 3,
                        "title": "ea molestias",
                        "body": "et iusto sed quo iure"
                      }
                ]}
            />
        </Router>
    )
    const title_1 = screen.getByText("qui est esse")
    const body_1 = screen.getByText("quia et suscipit")
    const title_2 = screen.getByText("qui est esse")
    const body_2 = screen.getByText("est rerum tempore vitae")
    const title_3 = screen.getByText("ea molestias")
    const body_3 = screen.getByText("et iusto sed quo iure")
    expect(title_1).toBeInTheDocument()
    expect(title_2).toBeInTheDocument()
    expect(title_3).toBeInTheDocument()
    expect(body_1).toBeInTheDocument()
    expect(body_2).toBeInTheDocument()
    expect(body_3).toBeInTheDocument()
})

test("Should render link to dynamic route that countains more article details", () => {
    render(
        <Router>
            <ArticlesShowcase
                articles={[
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere",
                        "body": "quia et suscipit"
                      }
                ]}
            />
        </Router>
    )
    const linkButton = screen.getByText("read more")
    expect(linkButton).toBeInTheDocument()
})
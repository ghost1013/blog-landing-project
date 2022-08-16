/**
 * @jest-environment jsdom
 */

 import React from "react"
 import { BrowserRouter as Router } from "react-router-dom"
 import { render, screen } from "@testing-library/react"
 import '@testing-library/jest-dom'
 import Navbar from "../Navbar"
 import Link from "../Navbar/Link"

 test("Should be rendered", () => {
     render(
         <Router>
             <Navbar>
                <Link path="articles" name="articles" />
                <Link path="favourite" name="favourite" />
            </Navbar>
         </Router>
     )
     const articles = screen.getByText("articles")
     const favourite = screen.getByText("favourite")
     expect(articles).toBeInTheDocument()
     expect(favourite).toBeInTheDocument()
 })
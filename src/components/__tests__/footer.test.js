/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Footer from "../Footer"

test("Should be rendered", () => {
    render(<Footer />)
    const footer = screen.getByTestId("footer-1")
    expect(footer).toBeInTheDocument()
})

test("Should contain link", () => {
    render(<Footer />)
    const link = screen.getByTestId("footer-2")
    const footer = screen.getByTestId("footer-1")
    expect(footer).toContainElement(link)
})
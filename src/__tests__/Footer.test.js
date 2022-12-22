import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

test('renders footer text', () => {
    render(<Footer />)
    const texto = screen.getByText(/2022/i)
    expect(texto).toBeInTheDocument()
})

test('renders NotFound page', () => {
    render(<Footer />)
    const tested = screen.getByTestId('tested')
    expect(tested).toHaveClass('copyright')
})
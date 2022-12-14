import { render, screen } from '@testing-library/jest-dom';
import Modal from '../components/Modal';

describe("close button shows", () => {
    const handleClose = jest.fn()
    render(<Modal show onClose={handleClose} />)
    const close = screen.getByTestId('close')
    expect(close).toHaveClass('close')
})

import { render, screen } from '@testing-library/jest-dom';
import Modal from '../components/Modal';

test("close button shows", () => {
    render(< Modal />)
    const close = screen.getByTestId('close')
    expect(close).toHaveClass('close')
})
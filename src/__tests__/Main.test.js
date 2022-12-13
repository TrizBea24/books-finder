import { render, screen } from '@testing-library/jest-dom';
import Main from '../components/Main';

test("required is at the form", () => {
    render(<Main />)
    const Nombre = screen.getByTestId('required-input')
    expect(Nombre).toBeRequired()
})
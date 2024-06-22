import { render, screen } from '@testing-library/react'
import { Button } from './Button';
describe('Button', () => {
    test('with only first param', () => {
        render(<Button>Test text</Button>);
        expect(screen.getByText("Test text"))
    })
})
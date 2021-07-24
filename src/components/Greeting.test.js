import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { notDeepEqual } from "assert";
import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders "Hello World!" as a text', () => {
        // Arrange
        render(<Greeting />)

        // Act

        // Assert
        const helloWorldElem = screen.getByText('Hello World!')
        expect(helloWorldElem).toBeInTheDocument()
    })

    test('renders "good to seen you" if the buttonn was NOT clicked', () => {
        render(<Greeting />)

        const initialTextElem = screen.getByText('It\'s good to see you!', { exact: false })
        expect(initialTextElem).toBeInTheDocument()
    })

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />)

        // Act
        const buttonElem = screen.getByRole('button')
        userEvent.click(buttonElem)

        // Assert
        const outputElem = screen.getByText('Changed!')
        expect(outputElem).toBeInTheDocument()
    })

    test('does not render "good to seen you" if button was clicked', () => {
        // Arrange
        render(<Greeting />)

        // Act
        const buttonElem = screen.getByRole('button')
        userEvent.click(buttonElem)

        // Assert
        const outputElem = screen.queryByText('good to see you', { exact: false })
        expect(outputElem).toBeNull()
    })
})
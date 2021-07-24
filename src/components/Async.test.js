import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('render post if request succeeds', async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }]
        })
        render(<Async />)

        const listItemElems = await screen.findAllByRole('listitem')
        expect(listItemElems).not.toHaveLength(0)
    })
})
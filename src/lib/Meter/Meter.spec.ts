import { expect } from '@wdio/globals'
import { render, screen } from '@testing-library/svelte'

import Meter from './Meter.svelte'

describe('Meter component', () => {
    let root: HTMLElement

    beforeEach(async () => {
        const { component } = render(Meter, {
            props: { min: -1, max: 1, optimum: 0.65, value: -1 },
        })
        root = component.$$.root as HTMLElement
        root.setAttribute('style', 'width: 500px')

        await browser.pause(100)
    })

    it('renders', async () => {
        const meterContainer = await screen.getByTestId('meter-container')
        expect(meterContainer).toBeDisplayed()
    })
    it('has moon and sun icons', async () => {
        const iconMoon = await screen.getByTestId('icon-moon')
        const iconSun = await screen.getByTestId('icon-sun')
        expect(iconMoon).toBeDisplayed()
        expect(iconSun).toBeDisplayed()
    })
    it('has 7 segments', async () => {
        const segments = await screen.getAllByTestId('segment')
        expect(segments.length).toBe(7)
    })
})

import { expect } from '@wdio/globals'
import { render, screen } from '@testing-library/svelte'

import Meter from './Meter.svelte'

describe('Icon component', () => {
    describe('Moon icon', () => {
        let root: HTMLElement

        async function renderWithValue(value: number, optimum: number) {
            const { component } = render(Meter, {
                props: { min: -1, max: 1, optimum, value },
            })
            root = component.$$.root as HTMLElement
            root.setAttribute('style', 'width: 500px')

            await browser.pause(100)
        }

        it('is highlighted when value < optimum', async () => {
            renderWithValue(0.5, 0.6)

            const iconMoonContainer = root.querySelector(
                '.icon-container:has([data-testid="icon-moon"])'
            )
            expect(iconMoonContainer?.classList.contains('active')).toBeTruthy()
        })
        it('is dimmed when value > optimum', async () => {
            renderWithValue(0.6, 0.5)

            const iconMoonContainer = root.querySelector(
                '.icon-container:has([data-testid="icon-moon"])'
            )

            expect(iconMoonContainer?.classList.contains('active')).toBeFalsy()
        })
        it('is dimmed when value = optimum', async () => {
            renderWithValue(0.6, 0.6)

            const iconMoonContainer = root.querySelector(
                '.icon-container:has([data-testid="icon-moon"])'
            )

            expect(iconMoonContainer?.classList.contains('active')).toBeFalsy()
        })
    })

    describe('Sun icon', () => {
        let root: HTMLElement

        async function renderWithValue(value: number, optimum: number) {
            const { component } = render(Meter, {
                props: { min: -1, max: 1, optimum, value },
            })
            root = component.$$.root as HTMLElement
            root.setAttribute('style', 'width: 500px')

            await browser.pause(100)
        }

        it('is dimmed when value < optimum', async () => {
            renderWithValue(0.5, 0.6)

            const iconMoonContainer = root.querySelector(
                '.icon-container:has([data-testid="icon-sun"])'
            )
            expect(iconMoonContainer?.classList.contains('active')).toBeFalsy()
        })
        it('is highlighted when value > optimum', async () => {
            renderWithValue(0.6, 0.5)

            const iconMoonContainer = root.querySelector(
                '.icon-container:has([data-testid="icon-sun"])'
            )

            expect(iconMoonContainer?.classList.contains('active')).toBeTruthy()
        })
        it('is highlighted when value = optimum', async () => {
            renderWithValue(0.6, 0.6)

            const iconMoonContainer = root.querySelector(
                '.icon-container:has([data-testid="icon-sun"])'
            )

            expect(iconMoonContainer?.classList.contains('active')).toBeTruthy()
        })
    })
})

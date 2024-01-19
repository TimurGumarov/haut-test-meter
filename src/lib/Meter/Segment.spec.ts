import { expect } from '@wdio/globals'
import { render, screen } from '@testing-library/svelte'

import Meter from './Meter.svelte'

describe('Segment component', () => {
    let root: HTMLElement

    async function renderComponent() {
        const { component } = render(Meter, {
            props: { min: -1, max: 1, optimum: 0.65, value: -1 },
        })
        root = component.$$.root as HTMLElement
        root.setAttribute('style', 'width: 500px')

        await browser.pause(100)
    }

    async function renderWithValue(value: number) {
        const { component } = render(Meter, {
            props: { min: -1, max: 1, optimum: 0.65, value },
        })
        root = component.$$.root as HTMLElement
        root.setAttribute('style', 'width: 500px')

        await browser.pause(100)
    }

    it('renders sizes correctly when root width > 320px', async () => {
        renderComponent()

        root.setAttribute('style', 'width: 500px')
        const segments = root.querySelectorAll('.segment')
        const firstSegment = segments[0]
        const firstSegmentSizes = firstSegment?.getBoundingClientRect()
        const lastSegment = segments[segments.length - 1]
        const lastSegmentSizes = lastSegment?.getBoundingClientRect()

        expect(firstSegmentSizes.height).toBe(42)
        expect(firstSegmentSizes.width).toBe(10)
        expect(lastSegmentSizes.height).toBe(24)
        expect(lastSegmentSizes.width).toBe(8)
    })
    it('renders sizes correctly when root width < 320px', async () => {
        renderComponent()

        root.setAttribute('style', 'width: 300px')
        const segments = root.querySelectorAll('.segment')
        const firstSegment = segments[0]
        const firstSegmentSizes = firstSegment?.getBoundingClientRect()
        const lastSegment = segments[segments.length - 1]
        const lastSegmentSizes = lastSegment?.getBoundingClientRect()

        expect(firstSegmentSizes.height).toBe(36)
        expect(firstSegmentSizes.width).toBe(6)
        expect(lastSegmentSizes.height).toBe(20)
        expect(lastSegmentSizes.width).toBe(6)
    })
    it('renders sizes correctly when root width = 320px', async () => {
        renderComponent()

        root.setAttribute('style', 'width: 300px')
        const segments = root.querySelectorAll('.segment')
        const firstSegment = segments[0]
        const firstSegmentSizes = firstSegment?.getBoundingClientRect()
        const lastSegment = segments[segments.length - 1]
        const lastSegmentSizes = lastSegment?.getBoundingClientRect()

        expect(firstSegmentSizes.height).toBe(36)
        expect(firstSegmentSizes.width).toBe(6)
        expect(lastSegmentSizes.height).toBe(20)
        expect(lastSegmentSizes.width).toBe(6)
    })

    describe('smoothly animate its visual state change on value change', () => {
        it('step 1: min = -1, value = -1', async () => {
            renderWithValue(-1)

            root.setAttribute('style', 'width: 300px')
            const segments = root.querySelectorAll('.segment')
            const firstSegment = segments[0]
            const firstSegmentSizes = firstSegment?.getBoundingClientRect()

            expect(firstSegmentSizes.height).toBe(36)
            expect(firstSegmentSizes.width).toBe(6)
        })

        it('step 2: min = -1, value = -0.95', async () => {
            renderWithValue(-0.95)

            root.setAttribute('style', 'width: 300px')
            const segments = root.querySelectorAll('.segment')
            const firstSegment = segments[0]
            const firstSegmentSizes = firstSegment?.getBoundingClientRect()

            expect(firstSegmentSizes.height).toBeLessThan(36)
            expect(firstSegmentSizes.height).toBeGreaterThan(35)
        })

        it('step 3: min = -1, value = -0.90', async () => {
            renderWithValue(-0.9)

            root.setAttribute('style', 'width: 300px')
            const segments = root.querySelectorAll('.segment')
            const firstSegment = segments[0]
            const firstSegmentSizes = firstSegment?.getBoundingClientRect()

            expect(firstSegmentSizes.height).toBeLessThan(34)
            expect(firstSegmentSizes.height).toBeGreaterThan(33)
        })

        it('step 4: min = -1, value = -0.85', async () => {
            renderWithValue(-0.85)

            root.setAttribute('style', 'width: 300px')
            const segments = root.querySelectorAll('.segment')
            const firstSegment = segments[0]
            const firstSegmentSizes = firstSegment?.getBoundingClientRect()

            expect(firstSegmentSizes.height).toBeLessThan(32)
            expect(firstSegmentSizes.height).toBeGreaterThan(31)
        })
    })
})

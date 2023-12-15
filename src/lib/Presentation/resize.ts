export function resize(node: HTMLDivElement) {
    let CR: DOMRectReadOnly
    let ET: Element
    const ro = new ResizeObserver((entries, observer) => {
        for (let entry of entries) {
            CR = entry.contentRect
            ET = entry.target
        }
        node.dispatchEvent(
            new CustomEvent('resize', {
                detail: { CR, ET },
            })
        )
    })
    ro.observe(node)
    return {
        destroy() {
            ro.disconnect()
        },
    }
}

<script lang="ts">
    import { get, type Writable } from 'svelte/store'
    import { resize } from './resize'
    export let startWidth: number = 500

    export let min: Writable<number>
    export let max: Writable<number>
    export let optimum: Writable<number>
    export let value: Writable<number>

    // Set value for input:range element
    let rangeValue: number = get(value)

    let container: HTMLDivElement

    function handleContainerWidth(e: Event) {
        const target = e.target as HTMLDivElement
        if ((e && target) || target != null) container = target
    }

    function changeValueInStore() {
        value.set(rangeValue)
    }
</script>

<div class="wrap">
    <p>Width: {container && container.offsetWidth}px</p>
    <p>You can change the width by dragging the bottom right corner.</p>
    <div
        class="container"
        style:width={startWidth + 'px'}
        bind:this={container}
        use:resize
        on:resize={handleContainerWidth}
    >
        <slot />
    </div>
    <p>Value: {$value}</p>
    <div class="row">
        <p>min:</p>
        <input type="number" step="0.1" bind:value={$min} />
        <p>max:</p>
        <input type="number" step="0.1" bind:value={$max} />
        <p>optimum:</p>
        <input type="number" step="0.1" bind:value={$optimum} />
    </div>
    <input
        type="range"
        min={$min}
        max={$max}
        bind:value={rangeValue}
        on:input={changeValueInStore}
        step="0.01"
    />

    <p>
        You can also see the implementation of the component at the <a
            href="/haut-test-meter/histoire/">Histoire</a
        > page.
    </p>
</div>

<style>
    .wrap {
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 20px;
    }
    p {
        margin: 0;
        font-family: sans-serif;
        color: rgb(193, 193, 193);
        font-weight: 500;
    }
    a,
    a:visited {
        color: aqua;
    }
    .container {
        display: flex;
        flex-flow: column;
        padding: 33px 0;
        resize: horizontal;
        min-width: 300px;
        max-width: 500px;
        border: 2px dashed #1e1e1e;
        border-radius: 10px;
        overflow: auto;
        box-sizing: border-box;
    }
    .row {
        display: flex;
        flex-flow: row;
        gap: 10px;
    }
    .row input {
        width: 45px;
        margin-right: 10px;
    }
    input[type='range'] {
        width: 200px;
    }
</style>

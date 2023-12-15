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
    <p>You can find resize element to change container width.</p>
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
    <p>(min: {$min}, max: {$max}, optimum: {$optimum})</p>
    <input
        type="range"
        min={$min}
        max={$max}
        bind:value={rangeValue}
        on:input={changeValueInStore}
        step="0.01"
    />
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
    .container {
        display: flex;
        flex-flow: column;
        padding: 33px;
        resize: horizontal;
        min-width: 300px;
        max-width: 500px;
        border: 2px dashed #1e1e1e;
        border-radius: 10px;
        overflow: auto;
        box-sizing: border-box;
    }
    input[type='range'] {
        width: 200px;
    }
</style>

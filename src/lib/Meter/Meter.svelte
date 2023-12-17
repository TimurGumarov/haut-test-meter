<script lang="ts">
    import { onMount } from 'svelte'
    import type { SegmentSize } from './segment.types'

    import Icon from './Icon.svelte'
    import Segment from './Segment.svelte'

    export let min: number = 0
    export let max: number = 1
    export let optimum: number = 0.65
    export let value: number = 0

    let error = ''
    // Value difference between divisions
    let segmentTick: number = max / 6

    let breakpoint: number = 320
    let segmentSize: SegmentSize = 'big'

    let meter: HTMLDivElement

    let iconMoonState: boolean = true
    let iconSunState: boolean = false

    $: if (value >= optimum) {
        iconMoonState && (iconMoonState = !iconMoonState)
        !iconSunState && (iconSunState = !iconSunState)
    } else {
        !iconMoonState && (iconMoonState = !iconMoonState)
        iconSunState && (iconSunState = !iconSunState)
    }

    function checkBreakpointAndSetSegmentSize() {
        const conteiner = meter.parentElement
        const conteinerWidth = meter.parentElement?.offsetWidth
        if (conteiner && conteinerWidth && conteinerWidth > breakpoint) {
            segmentSize != 'big' && (segmentSize = 'big')
        } else {
            segmentSize != 'small' && (segmentSize = 'small')
        }
    }

    onMount(() => {
        if (min < 0 || max < 0 || optimum < 0)
            error =
                "'min', 'max' and 'optimum' values must be greater than zero"
        if (!error && min >= max)
            error = "'min' value must be lower than 'max' value"
        if (!error && (optimum > max || optimum < min))
            error =
                "'optimum' value must be within the range of 'min' and 'max' values"

        checkBreakpointAndSetSegmentSize()

        // This event handler needs for Presentation component only
        // Can be removed for production
        meter.parentElement?.addEventListener(
            'resize',
            checkBreakpointAndSetSegmentSize
        )
        return () => {
            meter.parentElement?.removeEventListener(
                'resize',
                checkBreakpointAndSetSegmentSize
            )
        }
    })
</script>

<div class="meter" bind:this={meter} data-testid="meter-container">
    {#if !error}
        <Icon name={'Moon'} active={iconMoonState} />
        <div class="bar">
            <Segment
                size={segmentSize}
                {min}
                max={segmentTick}
                mid={min}
                {value}
            />
            <Segment
                size={segmentSize}
                {min}
                max={segmentTick * 2}
                mid={segmentTick}
                {value}
            />
            <Segment
                size={segmentSize}
                min={segmentTick}
                max={segmentTick * 3}
                mid={segmentTick * 2}
                {value}
            />
            <Segment
                size={segmentSize}
                min={segmentTick * 2}
                max={segmentTick * 4}
                mid={segmentTick * 3}
                {value}
            />
            <Segment
                size={segmentSize}
                min={segmentTick * 3}
                max={segmentTick * 5}
                mid={segmentTick * 4}
                {value}
            />
            <Segment
                size={segmentSize}
                min={segmentTick * 4}
                max={segmentTick * 6}
                mid={segmentTick * 5}
                {value}
            />
            <Segment
                size={segmentSize}
                min={segmentTick * 5}
                {max}
                mid={max}
                {value}
            />
        </div>
        <Icon name={'Sun'} active={iconSunState} />
    {:else}
        <p class="error">Error: {error}</p>
    {/if}
</div>

<style>
    .error {
        font-family: sans-serif;
        color: red;
    }
    .meter {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 28px;
        padding: 8px;
    }
    .bar {
        display: flex;
        flex-flow: row;
        align-items: center;
        min-height: 42px;
        gap: 10px;
    }
    @container (width < 320px) {
        .bar {
            min-height: 36px;
        }
    }
</style>

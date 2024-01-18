<script lang="ts">
    import Icon from './Icon.svelte'
    import Segment from './Segment.svelte'

    export let min: number = 0
    export let max: number = 1
    export let optimum: number = 0.65
    export let value: number = 0

    let animationRange: number
    $: animationRange = (max - min) / 5

    // Value difference between divisions
    let segmentTick: number
    $: segmentTick = (max - min) / 6

    let iconMoonState: boolean = true
    let iconSunState: boolean = false

    $: if (value >= optimum) {
        iconMoonState && (iconMoonState = !iconMoonState)
        !iconSunState && (iconSunState = !iconSunState)
    } else {
        !iconMoonState && (iconMoonState = !iconMoonState)
        iconSunState && (iconSunState = !iconSunState)
    }
</script>

<div class="meter" data-testid="meter-container">
    <Icon name={'Moon'} active={iconMoonState} />
    <div class="bar">
        <Segment segmentValue={min} bind:globalValue={value} {animationRange} />
        <Segment
            segmentValue={min + segmentTick}
            bind:globalValue={value}
            {animationRange}
        />
        <Segment
            segmentValue={min + segmentTick * 2}
            bind:globalValue={value}
            {animationRange}
        />
        <Segment
            segmentValue={min + segmentTick * 3}
            bind:globalValue={value}
            {animationRange}
        />
        <Segment
            segmentValue={min + segmentTick * 4}
            bind:globalValue={value}
            {animationRange}
        />
        <Segment
            segmentValue={min + segmentTick * 5}
            bind:globalValue={value}
            {animationRange}
        />
        <Segment
            segmentValue={min + segmentTick * 6}
            bind:globalValue={value}
            {animationRange}
        />
    </div>
    <Icon name={'Sun'} active={iconSunState} />
</div>

<style>
    .meter {
        container: meter / inline-size;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 28px;
        padding: 8px;
    }
    .bar {
        display: grid;
        grid-template-columns: repeat(7, 10px);
        align-items: center;
        min-height: 42px;
        gap: 10px;
    }
    @container (width < 320px) {
        .bar {
            min-height: 36px;
            grid-template-columns: repeat(7, 6px);
        }
    }
</style>

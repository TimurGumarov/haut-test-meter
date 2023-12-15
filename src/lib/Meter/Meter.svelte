<script lang="ts">
    import type { SegmentSize } from './segment.types'
    import Icon from './Icon.svelte'
    import Segment from './Segment.svelte'

    export let min: number = 0
    export let max: number = 1
    export let optimum: number = 0.65
    export let value: number = 0

    let segmentSize: SegmentSize = 'big'
</script>

<div class="meter">
    <Icon name={'Moon'} />
    <div class="bar">
        <Segment size={segmentSize} />
        <Segment size={segmentSize} />
        <Segment size={segmentSize} />
        <Segment size={segmentSize} />
        <Segment size={segmentSize} />
        <Segment size={segmentSize} />
        <Segment size={segmentSize} />
    </div>
    <Icon name={'Sun'} />
</div>

<style>
    .meter {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 28px;
    }
    .bar {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 10px;
    }
</style>

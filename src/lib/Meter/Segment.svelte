<script lang="ts">
    import { SegmentState, type SegmentSize } from './segment.types'

    export let size: SegmentSize = 'big'
    // The segment changes its state between min and max value
    export let min: number = 0
    export let max: number = 1
    // Where mid value is for its medium state (SegmentState.state4)
    export let mid: number = 0.5
    export let value: number = 0

    // Calibration value. Declares the range for certain values.
    // To trigger state when the value will be within +/- cv of the value for a particular division.
    let cv = (min != mid ? mid - min : max - mid) / 6

    let state: SegmentState = SegmentState.state1

    // Segment state control logic
    $: if (value < min - cv) state = SegmentState.state1
    $: if (value >= min - cv && value <= min + cv) state = SegmentState.state2
    $: if (value > min + cv && value < mid - cv) state = SegmentState.state3
    $: if (value >= mid - cv && value <= mid + cv) state = SegmentState.state4
    $: if (value > mid + cv && value < max - cv) state = SegmentState.state5
    $: if (max != mid && value >= max - cv && value <= max + cv)
        state = SegmentState.state6
    $: if (value > max + cv) state = SegmentState.state7
</script>

<div class="segment {size} {SegmentState[state]}"></div>

<style>
    .segment {
        --transition-speed: 0.2s;
        --base-width: 8px;
        --base-height: 24px;
        --width: var(--base-width);
        --height: var(--base-height);
        --border-radius: 3px;
        --background: rgb(255 255 255 / 0.6);
        --increment1: 4px;
        --increment2: 7px;
        display: block;
        width: var(--width);
        height: var(--height);
        background: var(--background);
        border-radius: var(--border-radius);
        box-shadow:
            0 0 0 -2px #ffffff00,
            0 0 0 -1px #ffffff00;
        transform: scaleX(1);
        transition:
            transform var(--transition-speed) ease,
            height var(--transition-speed) ease,
            background var(--transition-speed) ease,
            box-shadow var(--transition-speed) ease;
    }
    .segment.big {
        --base-width: 8px;
        --base-height: 24px;
        --border-radius: 3px;
        --increment1: 4px;
        --increment2: 7px;
    }
    .segment.small {
        --base-width: 6px;
        --base-height: 20px;
        --border-radius: 2px;
        --increment1: 4px;
        --increment2: 6px;
    }
    .segment.state1,
    .segment.state7 {
        --height: var(--base-height);
    }
    .segment.state2,
    .segment.state6 {
        --height: calc(var(--base-height) + var(--increment1));
    }
    .segment.state3,
    .segment.state5 {
        --height: calc(
            var(--base-height) + var(--increment1) + var(--increment2)
        );
    }
    .segment.state4 {
        --height: calc(
            var(--base-height) + var(--increment1) + var(--increment2) * 2
        );
    }
    .segment.big.state4 {
        transform: scaleX(1.25);
    }
    .segment.state4,
    .segment.state5,
    .segment.state6,
    .segment.state7 {
        --background: #fff;
        box-shadow:
            0 0 24px -2px #fff,
            0 0 6px -1px #fff;
    }
</style>

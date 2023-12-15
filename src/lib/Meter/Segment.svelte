<script lang="ts">
    import type { SegmentSize } from './segment.types'
    export let size: SegmentSize = 'big'

    let segment: HTMLDivElement
</script>

<div class="segment {size}}"></div>

<style>
    .segment {
        --base-width: 8px;
        --base-height: 24px;
        --width: var(--base-width);
        --height: var(--base-height);
        --border-radius: 3px;
        --background: rgb(255 255 255 / 0.6);
        display: block;
        width: var(--width);
        height: var(--height);
        background: var(--background);
        border-radius: var(--border-radius);
        box-shadow:
            0 0 0 -2px #ffffff00,
            0 0 0 -1px #ffffff00;
        transition:
            height 0.3s ease,
            box-shadow 0.3s ease;
    }
    .segment.big {
        --base-width: 8px;
        --base-height: 24px;
        --border-radius: 3px;
    }
    .segment.small {
        --base-width: 6px;
        --base-height: 20px;
        --border-radius: 2px;
    }
</style>

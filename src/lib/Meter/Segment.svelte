<script lang="ts">
    export let segmentValue: number = 0
    export let globalValue: number = 0
    export let animationRange: number = 0

    let Segment: HTMLDivElement

    function controlSegmentAnimation(value: number): number {
        let delay: number = 0
        if (globalValue > segmentValue + animationRange) delay = 1
        if (
            globalValue >= segmentValue - animationRange &&
            globalValue <= segmentValue + animationRange
        ) {
            let increment =
                (value - (segmentValue - animationRange)) / (2 * animationRange)
            delay = increment
        }
        return -delay
    }

    $: if (Segment && globalValue) {
        Segment.style.animationDelay = `${controlSegmentAnimation(
            globalValue
        )}s`
    }
</script>

<div class="segment" bind:this={Segment}></div>

<style>
    .segment {
        --transition-speed: 0.2s;
        --border-radius: 3px;
        --background: #fff;
        display: block;
        width: 8px;
        height: 24px;
        margin: 0;
        background: var(--background);
        opacity: 0.4;
        border-radius: var(--border-radius);
        -webkit-animation: segmentAnimation 1s both ease-in;
        animation: segmentAnimation 1s both ease-in;
        animation-play-state: paused;
    }
    @container (width < 320px) {
        .segment {
            --min-height: 20px;
            --max-height: 36px;
            --border-radius: 2px;
            width: 6px;
            -webkit-animation-name: segmentAnimationSmall;
            animation-name: segmentAnimationSmall;
        }
    }
    @keyframes segmentAnimation {
        0% {
            width: 8px;
            height: 24px;
            opacity: 0.4;
            box-shadow:
                0 0 0 -2px #ffffff00,
                0 0 0 -1px #ffffff00;
        }
        45% {
            opacity: 0.8;
            box-shadow:
                0 0 4px -2px #ffffff00,
                0 0 2px -1px #ffffff00;
        }
        50% {
            width: 10px;
            height: 42px;
            opacity: 1;
            box-shadow:
                0 0 24px -2px #fff,
                0 0 6px -1px #fff;
        }
        100% {
            width: 8px;
            height: 24px;
            opacity: 1;
            box-shadow:
                0 0 24px -2px #fff,
                0 0 6px -1px #fff;
        }
    }
    @keyframes segmentAnimationSmall {
        0% {
            height: 20px;
            --background: rgb(255 255 255 / 0.6);
        }
        50% {
            height: 36px;
            --background: #fff;
            box-shadow:
                0 0 24px -2px #fff,
                0 0 6px -1px #fff;
        }
        100% {
            height: 20px;
            --background: #fff;
            box-shadow:
                0 0 24px -2px #fff,
                0 0 6px -1px #fff;
        }
    }
</style>

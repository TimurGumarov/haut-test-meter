<script lang="ts">
    import { writable, type Writable } from 'svelte/store'
    import Meter from './lib/Meter/Meter.svelte'
    // Presentation component needs just for preview Meter component
    import Presentation from './lib/Presentation/Presentation.svelte'

    // States for Meter values
    let min: Writable<number> = writable(0)
    let max: Writable<number> = writable(1)
    let optimum: Writable<number> = writable(0.65)
    let value: Writable<number> = writable(0.6)
</script>

<Presentation {min} {max} {optimum} {value}>
    <Meter min={$min} max={$max} optimum={$optimum} bind:value={$value} />
</Presentation>

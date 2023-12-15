<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'

    import Meter from './Meter.svelte'

    export let Hst: Hst

    const source = `<Meter {min} {max} {optimum} {value} />`

    const min: number = 0
    const max: number = 1
    let optimum: number = 0.64
    let value = 0.5
</script>

<Hst.Story title="Meter component">
    <Hst.Variant title="Meter with container width > 320px" {source}>
        <div class="container big">
            <Meter {min} {max} {optimum} {value} />
        </div>
    </Hst.Variant>
    <Hst.Variant title="Meter with container width <= 320px" {source}>
        <div class="container small">
            <Meter {min} {max} {optimum} {value} />
        </div>
    </Hst.Variant>
    <svelte:fragment slot="controls">
        <Hst.Slider
            bind:value={optimum}
            {min}
            {max}
            step={0.01}
            title="Optimum"
        />
        <Hst.Slider bind:value {min} {max} step={0.01} title="Value" />
    </svelte:fragment>
</Hst.Story>

<style>
    .container {
        display: flex;
        flex-flow: column;
        padding: 33px;
        width: 500px;
        margin: 0 auto;
        box-sizing: border-box;
    }
    .container.small {
        width: 300px;
    }
</style>

<script lang="ts">
    import { type NameType } from './icon.types'
    import IconMoon from './IconMoon.svelte'
    import IconSun from './IconSun.svelte'

    export let name: NameType = 'Moon'
    export let active: boolean = true
    let fill: string
    $: fill = active ? '#fff' : 'rgb(255 255 255 / 0.4)'
</script>

<div class="icon">
    {#if name === 'Moon'}
        <IconMoon {fill} />
    {:else if name === 'Sun'}
        <IconSun {fill} />
    {/if}
</div>

<style>
    .icon {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
    }
</style>

<script lang="ts">
    import type { NameType } from './icon.types'
    import IconMoon from './IconMoon.svelte'
    import IconSun from './IconSun.svelte'

    export let name: NameType = 'Moon'
</script>

<div class="icon">
    {#if name === 'Moon'}
        <IconMoon />
    {:else if name === 'Sun'}
        <IconSun />
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

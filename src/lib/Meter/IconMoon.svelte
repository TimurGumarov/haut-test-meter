<script lang="ts">
    export let width: number = 20
    export let height: number = 20
    export let fill: string = '#fff'
</script>

<svg
    {width}
    {height}
    viewBox="0 0 20 20"
    {fill}
    xmlns="http://www.w3.org/2000/svg"
    data-testid="icon-moon"
>
    <path
        d="M17.3087 11.1735C17.6859 10.9964 18.0882 11.3677 17.983 11.7711C17.6242 13.1447 16.919 14.4519 15.8334 15.5375C12.6094 18.7611 7.45186 18.8285 4.31137 15.6883C1.17088 12.5482 1.23945 7.38999 4.46337 4.16641C5.54905 3.08084 6.8553 2.37579 8.23012 2.01698C8.63354 1.91186 9.00382 2.31409 8.82782 2.69118C7.68271 5.13543 8.0587 8.06304 9.99808 10.0022C11.9363 11.9425 14.8642 12.3185 17.3087 11.1735Z"
    />
</svg>

<style>
    svg {
        transition: fill 0.15s ease;
    }
</style>

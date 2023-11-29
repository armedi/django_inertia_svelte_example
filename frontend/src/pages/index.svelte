<script lang="ts">
  export let page_name: string;
  export let events: string[];
</script>

> {page_name}

<ul>
  {#each events as event}
    <li>{event}</li>
  {/each}
</ul>

<slot />

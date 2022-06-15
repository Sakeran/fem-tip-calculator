<script lang="ts">
  import RollingCounter from "./RollingCounter.svelte";

  export let title: string;
  export let value: number;
</script>

<div class="flex justify-between items-center">
  <div class="leading-tight">
    {title}<br /><span class="text-xs text-cyan-400">/ person</span>
  </div>
  <div class="text-cyan-500">
    <RollingCounter value={value * 100} prefix="$" />
  </div>
</div>

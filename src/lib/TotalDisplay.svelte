<script lang="ts">
  import RollingCounter from "./RollingCounter.svelte";

  export let title: string;
  export let value: number;
</script>

<div class="min-h-[3rem] lg:min-h-[4rem] flex justify-between lg:items-center [--digit-size:2rem] lg:[--digit-size:3rem]">
  <div class="leading-tight">
    {title}<br /><span class="text-xs text-cyan-400">/ person</span>
  </div>
  <div class="text-cyan-500">
    <RollingCounter value={value * 100} prefix="$" />
  </div>
</div>

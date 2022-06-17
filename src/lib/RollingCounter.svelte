<script lang="ts">
  import { spring } from "svelte/motion";
  import { fly } from "svelte/transition";

  import RollingDigit from "./RollingDigit.svelte";

  export let value = 0;
  export let prefix: string;

  let displayValue = spring(value, {
    stiffness: 0.1,
    damping: 1,
    precision: 0.1,
  });
  $: displayValue.set(value);

  let digits: number[] = [];
  $: {
    const res = [];

    const strs = $displayValue.toString().split("");
    for (let s of strs) {
      const n = parseInt(s);
      if (isNaN(n)) break;

      res.unshift(n);
    }

    while (res.length < 3) {
      res.unshift(0);
    }

    digits = res;
  }
</script>

<div
  class="flex justify-end select-none"
  style:--digit-prefix={`'${prefix || ""}`}
>
  <div class="rc-prefix leading-none motion-safe:sr-only">
    {prefix + (value / 100).toFixed(2)}
  </div>
  <div aria-hidden="true" class="contents motion-reduce:hidden">
    {#each digits as digit, i (digits.length - i - 1)}
      {#if i === digits.length - 2}
        <div aria-hidden="true" class="rc-prefix leading-none">.</div>
      {/if}
      <div aria-hidden="true" in:fly={{ x: 16 }} class:first={i == 0}>
        <RollingDigit value={$displayValue} place={digits.length - i - 1} />
      </div>
    {/each}
  </div>
</div>

<style>
  .rc-prefix {
    font-size: var(--digit-size, 1rem);
  }

  .first {
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .first::before {
    content: var(--digit-prefix, ".");
    font-size: var(--digit-size);
  }
</style>

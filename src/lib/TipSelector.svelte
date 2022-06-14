<script lang="ts">
  const percentages = [5, 10, 15, 25, 50];

  let customInput: HTMLInputElement;
</script>

<div class="flex flex-col gap-[0.375rem]">
  <label id="percentage-select" class="text-cyan-400" for="">Select Tip %</label
  >
  <div class="text-2xl grid grid-cols-2 gap-[0.875rem] md:grid-cols-3">
    {#each percentages as pct, i}
      <div
        id={`percentage-select-${i}`}
        role="radio"
        class="min-h-[3rem] grid place-content-center rounded-[0.3125rem] text-white bg-cyan-100 cursor-pointer transition-colors"
      >
        {pct}%
      </div>
    {/each}
    <input
      id="percentage-select-custom"
      bind:this={customInput}
      type="number"
      placeholder="Custom"
      class="min-h-[3rem] w-full text-2xl text-right md:text-center bg-cyan-1000 text-cyan-100 outline outline-2 outline-white/0  placeholder:text-cyan-100 placeholder:opacity-[0.35] rounded-[0.3125rem] px-4"
      min="0"
    />
  </div>
</div>

<style lang="postcss">
  input {
    appearance: textfield;
    transition: outline-color 150ms ease-in-out;
  }

  input:invalid {
    @apply outline-red;
  }

  input:not(:invalid):focus-visible {
    @apply outline-cyan-500;
  }
</style>

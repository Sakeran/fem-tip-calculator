<script lang="ts">
  const percentages = [5, 10, 15, 25, 50];

  export let value: number;
  let inputType: "button" | "input";

  // Determine type of starting input based on initial value.
  if (percentages.includes(value)) {
    inputType = "button";
  } else if (value > 0) {
    inputType = "input";
  }

  function select(pct) {
    inputType = "button";
    value = pct;
  }

  function handleCustomInput(e) {
    if (!(e instanceof InputEvent)) return;
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!e.target.checkValidity()) return;

    const inputValue = parseInt(e.target.value);

    inputType = "input";
    value = isNaN(inputValue) ? null : inputValue;
  }
</script>

<div class="flex flex-col gap-[0.375rem]">
  <label id="percentage-select" class="text-cyan-400" for="">Select Tip %</label
  >

  <div class="text-2xl grid grid-cols-2 gap-[0.875rem] md:grid-cols-3">
    {#each percentages as pct}
      {@const id = `percentage-cb-${pct}`}

      <input
        class="sr-only"
        type="checkbox"
        {id}
        checked={inputType === "button" && value === pct}
        on:change={() => select(pct)}
      />
      <label
        for={id}
        class="min-h-[3rem] grid place-content-center rounded-[0.3125rem] text-white bg-cyan-100 cursor-pointer transition-colors"
        >{pct}%</label
      >
    {/each}

    <input
      type="number"
      value={inputType === "input" ? value : null}
      on:input={handleCustomInput}
      id="percentage-custom"
      placeholder="Custom"
      min="0"
      class="min-h-[3rem] w-full text-2xl text-right bg-cyan-1000 text-cyan-100 outline outline-2 outline-white/0  placeholder:text-cyan-100 placeholder:opacity-[0.35] rounded-[0.3125rem] px-4"
    />
  </div>
</div>

<style lang="postcss">
  input[type="number"] {
    appearance: textfield;
    transition: outline-color 150ms ease-in-out;
  }

  input[type="number"]:invalid {
    @apply outline-red;
  }

  input[type="number"]:not(:invalid):focus-visible {
    @apply outline-cyan-500;
  }

  input:checked + label {
    @apply bg-cyan-500 text-cyan-100;
  }

  input[type="checkbox"] + label:hover,
  input[type="checkbox"]:focus:not(:checked) + label {
    @apply bg-cyan-700 text-cyan-100;
  }
</style>

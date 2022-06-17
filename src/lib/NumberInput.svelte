<script lang="ts">
  export let value: number;

  export let label: string;
  export let step: number = 1;
  export let min: number = 0;
  export let errorMessage: string | ((value: number) => string) =
    "Invalid Input";

  let input: HTMLInputElement;
  let id = `number-input-${label.replaceAll(" ", "")}`;
  let hasErrors = false;

  let errorDisplay = "";
  $: {
    if (hasErrors) {
      if (typeof errorMessage === "function") {
        errorDisplay = errorMessage(value);
      }
      // Use a generic error if the input is not a number
      else if (value === null) {
        errorDisplay = "Enter a number";
      } else {
        errorDisplay = errorMessage;
      }
    }
  }

  function handleInput(e) {
    hasErrors = !input.checkValidity();
  }
</script>

<div class="flex flex-col gap-[0.375rem]">
  <div class="flex justify-between">
    <label for={id} class="text-cyan-400">{label}</label>
    <span class="text-red" class:hidden={!hasErrors}>{errorDisplay}</span>
  </div>
  <div class="grid grow">
    <div
      class="row-start-1 col-start-1 z-10 self-center ml-5 pointer-events-none"
    >
      <slot name="icon" />
    </div>
    <div class="row-start-1 col-start-1">
      <input
        {id}
        bind:this={input}
        bind:value
        on:input={handleInput}
        class="min-h-[3rem] w-full text-2xl bg-cyan-1000 text-cyan-100 outline outline-2 outline-white/0  placeholder:text-cyan-100 placeholder:opacity-[0.35] rounded-[0.3125rem] text-right px-4"
        type="number"
        placeholder="0"
        {min}
        {step}
      />
    </div>
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

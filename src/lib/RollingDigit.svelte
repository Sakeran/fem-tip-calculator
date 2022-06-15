<script lang="ts">
  export let value: number = 0;
  export let place: number = 0;

  $: ownDigit = Math.floor(
    (value % Math.pow(10, place + 1)) / Math.pow(10, place)
  );

  let ownOffset = 0;
  function calculateOffset(value) {
    const rightDigits = value % Math.pow(10, place);
    if (rightDigits > Math.pow(10, place) - 1) {
      return value % 1;
    }

    return 0;
  }

  $: ownOffset = calculateOffset(value);
</script>

<div class="digit" style:--digit-offset={ownOffset}>
  <div class="rolling-digit leading-none">{ownDigit}</div>
  <div class="rolling-digit leading-none">{(ownDigit + 1) % 10}</div>
</div>

<style>
  .digit {
    height: var(--digit-size, 1rem);
    overflow: hidden;
  }

  .rolling-digit {
    font-size: var(--digit-size, 1rem);

    transform: translateY(
      calc(-1 * var(--digit-offset, 0) * var(--digit-size, 1rem))
    );
  }
</style>

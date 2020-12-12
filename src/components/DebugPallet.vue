<template>
  <div class="pallets" :class="`pallet--${pallet}`">
    <div class="swatches">
      <div class="swatch  pallet-base">base</div>
      <div class="swatch  pallet-base-tone-1">base tone 1</div>
      <div class="swatch  pallet-fore">fore</div>
      <div class="swatch  pallet-fore-tone-1">fore tone 1</div>
      <div class="swatch  pallet-fore-tone-2">fore tone 2</div>
      <div class="swatch  pallet-primary">primary</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DebugPallet extends Vue {
  @Prop() private pallet!: string;
}
</script>

<style>
.swatches {
  display: flex;
  flex-direction: row;
}

.swatch {
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pallet-base {
  background-color: var(--pallet-base);
  color: var(--pallet-fore);
}

.pallet-base-tone-1 {
  background-color: var(--pallet-base-tone-1);
  color: var(--pallet-fore);
}

.pallet-fore {
  background-color: var(--pallet-fore);
  color: var(--pallet-base);
}

.pallet-fore-tone-1 {
  background-color: var(--pallet-fore-tone-1);
  color: var(--pallet-base);
}

.pallet-fore-tone-2 {
  background-color: var(--pallet-fore-tone-2);
  color: var(--pallet-base);
}

.pallet-primary {
  background-color: var(--pallet-primary);
}
</style>
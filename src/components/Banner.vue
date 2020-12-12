<template>
  <div class="spacer-1  pallet--demo" pallet>
    <div class="teaser">
      <div class="teaser__image"></div>
      <div class="teaser__content">
        <h2>Am teaser heading</h2>
        <p>am teaser content Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde quaerat temporibus</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {
  // @Prop() private msg!: string;
}
</script>

<style>

</style>
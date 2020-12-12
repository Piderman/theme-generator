<template>
  <div class="spacer-1" :class="`pallet--${pallet}  theme--${themeClass}  ${bgImage ? 'bg-image' : null}`" pallet>
    <div class="teaser">
      <div class="teaser__image"></div>
      <div class="teaser__content  spacer-1">
        <h2 v-text="content.heading">am themed component</h2>
        <div v-html="teaserBody" class="spacer-3"/>
        <div><a href="#" class="btn  btn--system-primary">CTA text</a></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Content extends Vue {
  @Prop() private content!: {body? : string};
  @Prop() private pallet?: string;
  @Prop() private theme?: string;
  @Prop() private bgImage?: boolean;

  // warn: does this limit as not we cant have a system class when pallet is applied?
  get themeClass() {
    return this.pallet ? `pallet-${this.theme}` : this.theme;
  }

  get teaserBody() {
    return this.content.body || '<p>am teaser content Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde quaerat temporibus</p>'
  }
}
</script>

<style>

</style>
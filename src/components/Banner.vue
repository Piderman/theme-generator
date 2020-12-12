<template>
  <div class=""  :class="`pallet--${pallet}  theme--${themeClass}`" pallet>
    <div class="teaser  teaser--banner">
      <div class="teaser__image">
        <img :src="bannerImage">
      </div>
      <div class="teaser__content  spacer-1">
        <div class="tag  text--system-primary">system text</div>
        <h2 v-text="content.heading" />
        <p>am teaser content Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde quaerat temporibus</p>
        <div v-if="content.cta">
          <router-link :to="content.cta.routePath"
            class="btn" :class="buttonClass"
            v-text="content.cta.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface ContentPayload {
  heading: string;
  image: {
    id: string;
    size?: string
  };
  cta?: {
    text: string;
    cssClass?:string;
    routeName: string
  };
}

const imageSizeLookup:{[key: string]: string} = {
  'small': '640/360',
  'med': '960/540',
  'large': '1280/720'
};

@Component
export default class Banner extends Vue {
  @Prop() private content!: ContentPayload;
  @Prop() private pallet?: string;
  @Prop() private theme?: string;
  @Prop() private ctaClass?: string;

  get buttonClass() {
    return this.content.cta && this.content.cta.cssClass || 'btn--system-primary';
  }

  get themeClass() {
    return this.pallet ? `pallet-${this.theme}` : this.theme;
  }


  get bannerImage() {
    const {id, size = 'med'} = this.content.image;

    const dimensions = imageSizeLookup[size];

    return `https://picsum.photos/id/${id}/${dimensions}`;
  }
}
</script>

<style lang="scss">
.teaser--banner {
  display: flex;
  flex-direction: row;
  padding: 0;


  .teaser__image {
    width: 66%;
    order: 2;
    display: block;
    overflow: hidden;

    img {
      object-fit: contain;
      height: 100%;
    }
  }

  .teaser__content {
    order: 0;
    padding: 2em;
  }
}
</style>
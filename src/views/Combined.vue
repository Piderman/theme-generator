<template>
  <div class="about">
    <link v-for="(theme, index) in pageThemes" :key="index"
      rel="stylesheet" :href="`/themes/${theme}.css`">

    <VueSlickCarousel :dots="true">
      <div v-for="(product, index) in content" :key="index">
        <Banner v-bind="product"/>
      </div>
    </VueSlickCarousel>

    <div class="theme--system-inverse  spacer-1">
      system UI themes
    </div>

    <div class="theme--system-mid  spacer-1">
      system UI themes
    </div>

    <Banner v-bind="product3Payload" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const VueSlickCarousel = require('vue-slick-carousel');
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import Banner from '@/components/Banner.vue';
import Content from '@/components/Content.vue';

@Component({
  components: {
    Banner,
    Content,
    VueSlickCarousel,
  },
})
export default class Combined extends Vue {
  // todo: how to get from API / page payload
  public pageThemes = ['enh-01', 'enh-02', 'enh-03', 'enh-04'];

  public content = [
    {
      content: {
        heading: 'product 1',
        image: {
          id: '1039',
        },
        cta: {
          text: 'see page',
          routeName: 'enhanced-1',
        }
      },
      pallet: 'enh-01'
    },
    {
      content: {
        heading: 'product 2',
        image: {
          id: '152',
        },
        cta: {
          text: 'see page',
          routePath: 'enhanced-2',
        }
      },
      pallet: 'enh-02',
      theme: 'inverse'
    },
    {
      content: {
        heading: 'product 3',
        image: {
          id: '301',
        },
        cta: {
          text: 'see page',
          routeName: 'enhanced-3',
        }
      },
      pallet: 'enh-04',
      // theme: 'inverse'
    }
  ]

  public product3Payload = {
    content: {
      heading: 'pallet 3',
      image: {
        id: '328',
        size: 'small'
      }
    },
    pallet: 'enh-03',
    ctaClass: 'btn--pallet-primary',
  }
}
</script>

<style lang="scss">
.slick-dots {
  position: absolute;
  z-index: 10;
  left: (32px * 3) + 8px + 24px;
  bottom: 1em;
  display: flex !important;
  flex-direction: row;

  li {
    list-style: none;

    + li {
      margin-left: 10px;
    }
  }

  button {
    font-size: 0;
    display: block;
    width: 64px;
    height: 4px;

    background-color: var(--system-base);
    opacity: .6;
    border: 0;
    outline: none;
  }

  .slick-active button {
    // background-color: var(--system-base);
    opacity: 1;
  }
}

.slick-arrow {
  position: absolute;
  bottom: 1em;
  width: 32px;
  height: 32px;
  border: 0;
  background-color: var(--system-fore-tone-2);
  z-index: 10;
  overflow: hidden;
}

.slick-prev {
  left: 32px;
}

.slick-next {
  left: (32px * 2) + 8px;
}


</style>

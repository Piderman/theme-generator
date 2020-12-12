<template>
  <div class="standard">
    <link rel="stylesheet" href="/themes/enh-04.css">
    <DebugPallet pallet="enh-04"/>

    <Banner v-bind="bannerPayload" />

    <Content v-bind="introPayload" />

    <Content v-bind="primaryPayload" />

    <Content v-bind="introPayload" />

    <Content v-bind="patternPayload" />

    <Content v-bind="systemPayload" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Content from '@/components/Content.vue';
import DebugPallet from '@/components/DebugPallet.vue';

const pallet = 'enh-04';

@Component({

  data() {
    return {
      bannerPayload: {
        content: {
          heading: 'pallet 4 banner',
          image: {
            id: '301',
          },
        },
        ctaClass: 'btn--pallet-primary',
        pallet,
        // theme: 'system-inverse',
      },
      introPayload: {
        content: {
          heading: 'section 1 content',
        },
        pallet,
        theme: 'mid',
      },
      primaryPayload: {
        content: {
          heading: 'primary content'
        },
        pallet,
        theme: 'primary',
      },
      patternPayload: {
        content: {
          heading: 'has pattern',
          body: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic natus adipisci eos voluptatem</p>
            <p>dessert clipart PNG Designed By ngupakarti from <a href="https://pngtree.com">Pngtree.com</a></p>
          `
        },
        pallet,
        theme: 'mid',
        bgImage: true,
      },
      systemPayload: {
        content: {
          heading: 'now using system theme'
        },
        theme: 'system-mid'
      },
    }
  },

  components: {
    Banner,
    Content,
    DebugPallet,
  },
})
export default class Enhanced4Product extends Vue {}
</script>

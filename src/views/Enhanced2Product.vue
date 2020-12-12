<template>
  <div class="standard">
    <link rel="stylesheet" href="/themes/enh-02.css">
    <DebugPallet pallet="enh-02"/>

    <Banner v-bind="bannerPayload" />

    <Content v-bind="introPayload" />

    <Content v-bind="primaryPayload" />

    <Content v-bind="outroPayload" />

    <Content v-bind="systemPayload" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Content from '@/components/Content.vue';
import DebugPallet from '@/components/DebugPallet.vue';

const pallet = 'enh-02';

@Component({

  data() {
    return {
      bannerPayload: {
        content: {
          heading: 'banner using pallet',
          image: {
            id: '152',
            size: 'large'
          }
        },
        pallet,
      },
      introPayload: {
        content: {
          heading: 'section 1 content',
          body: 'pattern PNG Designed By ANITAStudio from <a href="https://pngtree.com">Pngtree.com</a>'
        },
        pallet,
        theme: 'inverse',
        bgImage: true,
      },
      primaryPayload: {
        content: {
          heading: 'primary content',
        },
        pallet,
        theme: 'primary',
      },
      outroPayload: {
        content: {
          heading: 'outro content mid theme',
        },
        pallet,
        theme: 'mid',
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
export default class Enhanced2Product extends Vue {}
</script>

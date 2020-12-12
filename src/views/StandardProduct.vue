<template>
  <div class="standard">
    <Banner v-bind="bannerPayload" />

    <Content v-bind="introPayload"/>

    <Content v-bind="section1Payload"/>

    <Content v-bind="section2Payload"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Content from '@/components/Content.vue';

@Component({
  data() {
    return {
      bannerPayload: {
        content: {
          heading: 'product page banner',
          image: {
            id: '115',
            size: 'large',
          },
        },
        theme: 'system-inverse',
      },
      introPayload: {
        content: {
          heading: 'intro, system pallet, default theme'
        },
      },
      section1Payload: {
        content: {
          heading: 'system, mid theme'
        },
        theme: 'system-mid'
      },
      section2Payload: {
        content: {
          heading: 'system, default theme'
        },
      },
    }
  },

  components: {
    Banner,
    Content,
  },
})
export default class StandardProduct extends Vue {}
</script>

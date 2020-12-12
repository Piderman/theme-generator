<template>
  <div class="home">
    <Banner />

    <hr>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Banner from '@/components/Banner.vue';

@Component({
  components: {
    Banner,
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

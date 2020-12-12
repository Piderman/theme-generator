<template>
  <div id="app">
    <div id="nav" class="theme--system-light">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div id="footer" class="spacer-3 theme--system-primary">
      footer text example
    </div>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--system-fore);
  background-color: var(--system-base);
}

a {
  color: var(--system-primary);
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--system-fore-tone-1);

    &.router-link-exact-active {
      color: var(--system-primary);
    }
  }
}
</style>

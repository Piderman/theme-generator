<template>
  <div id="app">
    <div id="nav" class="theme--system-light">
      <router-link to="/">Home</router-link> |
      <router-link to="/standard">Standard</router-link> |
      <router-link to="/enhanced-1">Enhanced 1</router-link> |
      <router-link to="/enhanced-2">Enhanced 2</router-link> |
      <router-link to="/enhanced-4">Enhanced 4</router-link> |
      <router-link to="/combined">Combined</router-link>
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

.spacer-1 {
  > * + * {
    margin-top: 1em;
  }
}


#nav {
  padding: 30px;
  border-bottom: 1px solid var(--system-base-tone-1);

  a {
    font-weight: bold;
    color: var(--system-fore-tone-1);

    &.router-link-exact-active {
      color: var(--system-primary);
    }
  }
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
  height: 100%;
}
</style>

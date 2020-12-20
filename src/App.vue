<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/eventAndMethode">Event & Method</router-link></li>
      <li><router-link to="/data">Data & Variables</router-link></li>
      <li><router-link to="/computed">Computed</router-link></li>
      <li><router-link to="/binding">Binding</router-link></li>
    </ul>
    
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
ul li {
  display:inline;
  padding-right: 5px;
}
</style>

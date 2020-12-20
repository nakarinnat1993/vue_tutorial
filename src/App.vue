<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/EventAndMethode">Event & Method</router-link></li>
      <li><router-link to="/Data">Data & Variables</router-link></li>
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

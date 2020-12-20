<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/VModel">V-Model</router-link></li>
    </ul>
    
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
ul li {
  display:inline;
  padding-right: 5px;
}
</style>

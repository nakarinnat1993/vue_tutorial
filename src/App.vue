<template>
  <div>
    <ul>
      <li><router-link to="/"><button>Home</button></router-link></li>
      <li><router-link to="/eventAndMethode"><button>Event & Method</button></router-link></li>
      <li><router-link to="/data"><button>Data & Variables</button></router-link></li>
      <li><router-link to="/computed"><button>Computed</button></router-link></li>
      <li><router-link to="/binding"><button>Binding</button></router-link></li>
      <li><router-link to="/form"><button>Form</button></router-link></li>
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

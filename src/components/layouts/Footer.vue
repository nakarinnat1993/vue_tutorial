<template>
  <div class="footer" id="footer-app">
      <span :style="{color}">{{title}}</span>
  </div>
</template>

<script>
export default {
    name:"Footer",
    props:[
        "title",
        "color"
    ]
}
</script>

<style scoped>
#footer-app{
    color:gray;
    padding-top: 10px;
}
</style>
<template>
  <div id="content" class="content-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.content-wrapper{
  margin: 20px;
  padding: 20px;
  border-width: 2px;
  border-color: gray;
  border-style: dashed;
}
</style>

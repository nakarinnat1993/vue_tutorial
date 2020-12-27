<template>
  <div class="ref">
      <h1>Ref (To Access DOM Element)</h1>
      <h3 ref='title'>Waiting For change by Ref</h3>
      <input type="text" ref="input">
  </div>
</template>

<script>
export default {
    name:"Ref",
    mounted() {
        this.$refs["title"].textContent = "Change Ref",
        this.$refs["input"].focus();
        this.$refs["input"].value = "5555";
    },
}
</script>

<style>

</style>
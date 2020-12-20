<template>
  <div class="v-model">
    <h1>V-model</h1>
    <input type="text" v-model="msg" />
    <div>{{ msg }}</div>
    <button @click="msg = ''">Reset</button>
  </div>
</template>

<script>
export default {
  name: "v-model",
  data() {
    return {
      msg: "",
    };
  }
};
</script>

<style></style>

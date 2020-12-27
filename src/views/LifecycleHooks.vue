<template>
  <div class="hook">
    <h1>Lifecycle Hooks</h1>
    <p>{{ counter }}</p>
    <br />
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  name: "x",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style></style>

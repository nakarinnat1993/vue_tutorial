<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ count }}</h2>
    <button @click="onClickAdd">Add</button>
    <hr>
    <h1>V-model</h1>
    <input type="text" v-model="msg" />
    <div>{{ msg }}</div>
    <button @click="msg=''">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Click Event And V-model",
      count: 0,
      msg:""
    };
  },
  methods: {
    onClickAdd() {
      this.count = this.count + 1;
    },
  },
};
</script>

<style></style>

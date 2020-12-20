<template>
  <div class="event-methode">
    <button v-on:click="clickMe">ClickMe</button>
    <button v-on:click="PassParameter('Welcome')">Pass Parameter</button>
    <button @click="PassParameter('Short Form')">Short Form</button>
    <h3>{{ getTimestamp() }}</h3>
  </div>
</template>

<script>
export default {
  name: "event-methode",
  mounted() {
    //คล้ายๆ contractor
    this.initial()
  },
  methods: {
    initial() {
        console.log("Init");
    },
    clickMe() {
      alert("Hi");
    },
    PassParameter(msg) {
      alert(msg);
    },
    getTimestamp() {
      return Date();
    },
  },
};
</script>

<style></style>

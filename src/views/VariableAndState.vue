<template>
  <div class="state">
    <div>{{ count }}</div>
    <div>{{ Math.random() }}</div>
    <button @click="timetamp = Date.now()">Update Timestamp</button>
    <p>Time: {{ timetamp }}</p>
  </div>
</template>

<script>
export default {
  name: "state",
  data() {
    return {
      count: 0, //local state
    };
  },
  mounted() {
    setInterval(() => {
      //   this.count++;
      console.log(this.timetamp);
    }, 1000);
  },
  created() {
    this.timetamp = 0;
  },
};
</script>

<style></style>

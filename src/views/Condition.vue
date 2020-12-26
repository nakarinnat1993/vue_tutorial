<template>
  <div class="condition">
    <div v-if="type==='A'">
        A
    </div>
    <div v-else-if="type==='B'">
        B
    </div>
    <div v-else>
        Not A, B
    </div>

    <div v-if="isShow">
        True
    </div>
    <div v-else>
        False
    </div>

    <div v-show="isShow">
        V-Show elm not disappear
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  mounted() {
  },
  data() {
      return {
          type:"A",
          isShow:false,
      }
  },
};
</script>

<style></style>

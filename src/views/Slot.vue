<template>
  <div class="slot">
    <h1>Slot</h1>
    <Clock>
      <span style="color:red">เวลา : </span>
    </Clock>
    <Clock>
      <span style="color:green">เวลา : </span>
    </Clock>

    <Clock />

    <Clock>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
      <span style="color:grey">เวลา : </span>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";

export default {
  name: "Slot",
  components: {
    Clock,
  },
};
</script>

<style></style>

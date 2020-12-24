<template>
  <div class="computed">
    <h1>Computed</h1>
    <h1>{{ firstname }}</h1>
    <h1>{{ lastname }}</h1>
    <h1>{{ fullname }}</h1>
    <hr />
    <h2>Random by computed : {{ getrandom_computed }}</h2>
    <h2>Random by computed : {{ getrandom_computed }}</h2>
    <p>Computed return last value</p>
    <hr />
    <h2>Random by methods : {{ getrandom_methods() }}</h2>
    <h2>Random by methods : {{ getrandom_methods() }}</h2>
    <p>Methods return each value</p>
  </div>
</template>

<script>
export default {
  name: "computed",
  data() {
    return {
      firstname: "Nakarin",
      lastname: "Jaiseengam",
    };
  },
  methods: {
    getrandom_methods() {
      return Math.random();
    },
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getrandom_computed() {
      return Math.random();
    },
  },
};
</script>

<style></style>

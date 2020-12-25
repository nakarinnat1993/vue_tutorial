<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer title="Footer Copyright" color="red"/>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>

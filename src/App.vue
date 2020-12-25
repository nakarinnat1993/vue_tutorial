<template>
  <div class="app">
    <Header />
    
    <Content />
    
    <Footer @onClock1="onClock2" title="Footer Copyright" color="red" />
    <p class="clock">{{ time }}</p>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import Content from "@/components/layouts/Content.vue";
import moment from "moment";

export default {
  name: "app",
  methods: {
    onClock2(value) {
      // this.time=value
      this.time = moment(value).format("DD/MM/YYYY hh:mm:ss");
    },
  },
  data() {
    return {
      time: "",
    };
  },
  components: {
    Header,
    Footer,
    Content
  },
};
</script>

<style>
.clock {
  font-size: 12px;
}
</style>

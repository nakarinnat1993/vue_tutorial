<template>
  <div class="clock">
      <slot name="header"></slot>
      <slot>Default </slot>{{ time }}
      <slot name="footer"></slot>
  </div>
</template>

<script>

import moment from "moment";
export default {
    name:"Clock",
    mounted() {
        setInterval(()=>{
            this.time = moment(Date()).format("DD/MM/YYYY hh:mm:ss");
        }, 1000)
    },
    data() {
        return {
            time:""
        }
    },
}
</script>

<style>

</style>
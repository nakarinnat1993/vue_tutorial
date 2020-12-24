<template>
  <div class="binding">
    <h1>Binding</h1>
    <br />
    <img v-bind:src="imageUrl" v-bind:width="imageWidth" />
    <br />
    <a v-bind:href="link">Tag a binding</a>
    <br />
    <a :href="link">Tag a binding short form</a>
    <div :class="[error, arrayCss]">Binding Class</div>
    <div :style="{ color, fontSize }">Binding Style</div>
    <div :style="isActive ? styleObject : ''">Binding Object</div>
    <button @click="isActive=!isActive">Active</button>
  </div>
</template>

<script>
export default {
  name: "binding",
  data() {
    return {
      imageUrl:
        "https://images.freeimages.com/images/large-previews/134/test-me-1420159.jpg",
      imageWidth: 120,
      link:"https://www.google.co.th/",
      error:"error-class",
      arrayCss: "array-css",
      color: "green",
      fontSize:"20px",
      styleObject:{
        color:"yellow",
        background:"red"
      },
      isActive:false
    };
  },
};
</script>

<style>
.error-class {
  color: red;
}
.array-css {
  font-size: 40px;
}
</style>

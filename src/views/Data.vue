<template>
  <div class="data">
    <h1>Data And Variables</h1>
    <button @click="count++">Count++</button>
    <p>{{ count }}</p>
    <p>{{ message }}</p>
    <p>{{ message2 }}</p>
    <input type="text" v-model="message">
    <h2 v-if="message=='Welcome'">Hello</h2>
    <p>Object = {{ account }}, Username ={{ account.username }}</p>
    <p>Array = {{ courses }}, Username ={{ courses[0] }}</p>
    <ul>
        <li v-for="(item, index) in courses" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"data",
    mounted() {
        this.message = "Welcome"
    },
    data() {
        return {
            count:0,
            message:"",
            message2:"Message2",
            account:{
                username:'admin',
                password:'password'
            },
            courses:[
                "Vue",
                "PHP",
                "CSS"
            ]
        }
    },
}
</script>

<style></style>

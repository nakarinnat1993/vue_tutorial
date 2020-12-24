<template>
  <div class="form">
    <h1>Form</h1>
    <form v-on:submit.prevent="submit">
      <div>
        <label for="first_name">First name</label>
        <input type="text" name="first_name" v-model.trim="applicant.first_name" />
      </div>
      <div>
        <label for="last_name">Last name</label>
        <input type="text" name="last_name" v-model.lazy="applicant.last_name" />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" name="age" v-model.number="applicant.age" />
      </div>

      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
      </div>

      <div>
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <div>
        <select name="course" v-model="applicant.course">
          <option value="PHP">PHP</option>
          <option value="Vue">Vue</option>
        </select>
      </div>
      <button type="button" @click.exact="clear" @click.alt="useDefault">Clear</button>
      <button type="submit">Submit</button>
    </form>
    <p>#Spy {{ JSON.stringify(applicant) }}</p>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        age: 0,
        sex: "male",
        course: "Vue",
      },
    };
  },
  methods: {
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        age: 0,
        sex: "male",
        course: "Vue",
      };
    },
    useDefault() {
      this.applicant = {
        first_name: "Nakarin",
        last_name: "Jaiseengam",
        age: 27,
        sex: "male",
        course: "Vue",
      };
    },
    submit() {
      alert(JSON.stringify(this.applicant));
    },
  },
};
</script>

<style></style>

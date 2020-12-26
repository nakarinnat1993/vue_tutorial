<template>
  <div class="loop">
    <ul>
      <li v-for="(item, index) in ['PHP', 'CSS', 'Vue']" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in coursesEx" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in coursesObj" :key="index">
        {{ item.title }} ราคา {{ item.price }}
      </li>
    </ul>
    <ul>
      <li v-for="({ title, price }, index) in coursesObj" :key="index">
        {{ title }} ราคา {{ price }}
      </li>
    </ul>

    <hr />
    <input type="text" placeholder="Title" v-model="course.title" /><br />
    <input type="number" placeholder="Price" v-model.number="course.price"/><br />
    <button @click="addCourse">Save</button>
    <ul>
      <li v-for="(course, index) in dynamicCourses" :key="index">
        {{ course.title }} ราคา {{ course.price }}
        <button @click="removeCourse(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Loop",
  methods: {
    addCourse() {
      this.dynamicCourses.push(this.course);
      this.course = { title: "", price: "" };
    },
    removeCourse(index) {
        this.dynamicCourses.splice(index, 1)
    },
  },
  data() {
    return {
      coursesEx: ["PHP", "CSS", "Vue"],
      coursesObj: [
        { title: "PHP", price: "10" },
        { title: "CSS", price: "20" },
        { title: "Vue", price: "30" },
      ],
      course: { title: "", price: "" },
      dynamicCourses: [],
    };
  },
};
</script>

<style></style>

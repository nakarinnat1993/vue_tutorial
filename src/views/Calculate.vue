<template>
  <div class="calculate">
    <h1>WorkShop : คำนวณราคาสินค้า</h1>
    <table border="1">
      <tr>
        <th>รูป</th>
        <th>ชื่อ</th>
        <th>ราคา</th>
        <th>เลือก</th>
      </tr>
      <tr v-for="(item, index) in products" :key="index">
        <td align="center"><img :src="item.img" width="120" alt="" /></td>
        <td>{{ item.name }}</td>
        <td align="center">{{ item.price }}</td>
        <td align="center">
          <input type="checkbox" @change="selected(item)" />
        </td>
      </tr>
      <tr>
        <td align="right" colspan="2">รวม</td>
        <td align="center">{{ total() }}</td>
        <td align="center"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Calculate",
  data() {
    return {
      sum: 0,
      products: [
        {
          id: 1,
          name: "กาแฟ",
          price: 25,
          img:
            "https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864__340.jpg",
          active: false,
        },
        {
          id: 2,
          name: "ชา",
          price: 50,
          img:
            "https://cdn.pixabay.com/photo/2016/10/14/18/21/tee-1740871__340.jpg",
          active: false,
        },
        {
          id: 3,
          name: "โกโก้",
          price: 39,
          img:
            "https://cdn.pixabay.com/photo/2015/11/23/11/57/hot-chocolate-1058197__340.jpg",
          active: false,
        },
      ],
    };
  },
  methods: {
    selected(item) {
      item.active = !item.active;
    },
    total() {
      let sum = 0;
      this.products.forEach(function(item) {
        if (item.active) {
          sum += item.price;
        }
      });
      return sum;
    },
  },
};
</script>

<style></style>

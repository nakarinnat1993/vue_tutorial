<template>
  <div class="cart">
    <h1>Workshop : ตะกร้าสินค้า</h1>
    <h2>เลือกสินค้า</h2>
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
            <button @click="addToCart(item)">Add to cart</button>
        </td>
      </tr>
    </table>
    <h2>ตะกร้าสินค้า</h2>
    <table border="1" v-if="carts!=0">
      <tr>
        <th>รูป</th>
        <th>ชื่อ</th>
        <th>ราคา</th>
        <th>จำนวน</th>
        <th>ราคารวม</th>
        <th>ลบ</th>
      </tr>
      <tr v-for="(item, index) in carts" :key="index">
        <td align="center"><img :src="item.img" width="120" alt="" /></td>
        <td>{{ item.name }}</td>
        <td align="center">{{ item.price }}</td>
        <td align="center">
            <button @click="decrease(item)">-</button>
            {{ item.qty }}
            <button @click="increase(item)">+</button>
        </td>
        <td align="center">{{ item.total_price }}</td>
        <td align="center"><button @click="delCart(item)">ลบ</button></td>
      </tr>
      <!-- <tr>
        <td align="right" colspan="2">รวม</td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
      </tr> -->
    </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      sum: 0,
      carts:[],
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
    addToCart(item){
        // console.log(this.carts.find(x => x.id === item.id));  
        console.log(this.carts.findIndex(x => x.id === item.id));

        let index_cart = this.carts.findIndex(x => x.id === item.id);
        if(index_cart >= 0){
            this.carts[index_cart].qty +=1;
            this.carts[index_cart].total_price = this.carts[index_cart].price*this.carts[index_cart].qty;
        }else{
            this.carts.push({
                id:item.id,
                name:item.name,
                price:item.price,
                img:item.img,
                qty:1,
                total_price:item.price,
            })
        }
    },
    decrease(item){
        item.qty-=1;
        if(item.qty<=1){
            item.qty=1;
        }
        item.total_price=item.qty*item.price;
        // console.log(item);
    },
    increase(item){
        item.qty+=1;
        item.total_price=item.qty*item.price;
        // console.log(item);
    },
    delCart(item){
        if(confirm("คุณต้องการลบ "+item.name+" หรือไม่")){
            let index = this.carts.indexOf(item);
            console.log(index);
            this.carts.splice(index,1);
        }
    }
  },
};
</script>

<style></style>

<template>
  <HeaderBar />
  <br />
  <h1>Hello User Welcome to this Update Page</h1>
  <form  class="register">
    <input v-model="restaurant.name" type="text" placeholder="Enter name" />
    <input v-model="restaurant.contact" type="text" placeholder="Enter contacts" />
    <input v-model="restaurant.location" type="text" placeholder="Enter location" />
    <button  @click.prevent="updateRestaurant" type="submit">Update</button>
  </form>
</template>

<script>
import HeaderBar from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateRest",
  components: {
    HeaderBar,
    
  },
  data() {
    return {
      restaurant: {

        name: "",
        contact: "",
        location: "",
      },
    };
  },
  methods: {
    async updateRestaurant(){

        let result =  await axios.put('http://localhost:3000/restaurant/' + this.$route.params.id,
        {
            name: this.restaurant.name,
            contact: this.restaurant.contact,
            location:this.restaurant.location

        });
        if(result.status==200){
            this.$router.push({name:"HomePage"})
        }
        console.warn(this.restaurant)


    }
  },
 async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id);
    console .warn(result.data);
    this.restaurant = result.data
  },
};
</script>
<style>
@import "../assets/style.css";
</style>

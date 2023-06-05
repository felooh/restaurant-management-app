<template>
  <img
    class="logo"
    src="../assets/Chef-restaurant-logo4.jpg"
    width="250"
    height="150"
    lenthalt=""
  />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter name here" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter password" />

    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("Sign Up Successful");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
};
</script>

<style>
@import "../assets/style.css";
</style>

<template>
    <h1>
        Hello User Welcome to this web page
    </h1>
</template>

<script>

    export default {
        name: 'HomePage',
        mounted() {

    let user = localStorage.getItem("user-info");
    if(!user)
    {
        this.$router.push({ name: "SignUp" });

    }
  }
    }
</script>
<style>
 @import "../assets/style.css"
</style>
<template>
  <p>Loading your profile...</p>
</template>

<script>
import auth0Client from "../AuthService";
export default {
  name: "Callback",
  async created() {
    await auth0Client.handleAuthentication();
    this.$router.push("/");
  }
};
</script>
<style scoped>
div > p {
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
}
</style>

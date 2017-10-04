<template>
  <section class="container">
    <logo/>
    <h1 class="title">
      {{ msg }} {{ nameParam }}
    </h1>
    <div>
      <nuxt-link to="/counter">Counter</nuxt-link>
      <nuxt-link to="/" exact>Back to home</nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from '../../components/Logo';

export default {
  components: {
    Logo,
  },
  data () {
    return {
      msg: 'Welcome',
    };
  },
  computed: {
    nameParam () {
      return this.$route.params.name;
    },
  },
};
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .links {
    padding-top: 15px;
  }

  a {
    margin: 10px;
  }
</style>

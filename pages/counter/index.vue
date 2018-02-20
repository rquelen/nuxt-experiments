<template>
  <div class="test">
    <h1>counter</h1>
    <p>{{ total }}</p>
    <button-counter @increment="incrementTotal"/>
    <button-counter @increment="incrementTotal"/>
    <div><nuxt-link to="/" exact>Home</nuxt-link></div>
  </div>
</template>

<script>
import ButtonCounter from '../../components/ButtonCounter';

export default {
  name: 'Counter',
  components: {
    ButtonCounter,
  },
  asyncData ({app}) {
    return app.$axios.get('http://www.mocky.io/v2/5a01affc300000da45fac0cf')
      .then(response => ({
        total: response.data,
      }));
  },
  data () {
    return {
      total: 0,
    };
  },
  methods: {
    incrementTotal () {
      this.total += 1;
    },
  },
};
</script>

<style scoped>
  .test {
    font-size: 40px;
    text-align: center;
  }
</style>

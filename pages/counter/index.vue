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

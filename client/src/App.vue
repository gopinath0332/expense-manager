<template>
  <b-container fluid="md">
    <Form/>
    <Records/>
  </b-container>
</template>

<script>
import Form from './components/form/Form.vue';
import Records from './components/records/Records.vue';

export default {
  name: 'App',
  components: {
    Form,
    Records
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

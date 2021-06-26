<template>
  <b-container class="form-container">
    <b-button variant="success" class="mb-2" v-b-toggle.sidebar-right>
      <b-icon icon="plus-circle" aria-hidden="true" />
    </b-button>
    <b-sidebar id="sidebar-right" title="Expense" right shadow>
      <div class="px-3 py-2">
        <b-form @submit="onSubmit"></b-form>
      </div>
    </b-sidebar>
  </b-container>
</template>

<script>
export default {
  name: "Form",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        date: "",
        amount: "",
        paymentType: "",
        category: "",
        notes: ""
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./form.scss";
</style>
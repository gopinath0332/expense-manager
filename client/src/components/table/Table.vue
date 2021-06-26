<template>
  <b-container class="table-container">
    <b-table striped hover :items="expenses"></b-table>
  </b-container>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      expenses: [
        {
          _id: "60d7154e9b518613fed2de03",
          entry: "2021-06-25T00:00:00.000Z",
          amount: 500,
          paymentType: "cash",
          category: "fuel",
          notes: "diesel charge",
          __v: 0,
        },
        {
          _id: "60d715589b518613fed2de05",
          entry: "2021-06-27T00:00:00.000Z",
          amount: 1500,
          paymentType: "cash",
          category: "fuel",
          notes: "diesel charge",
          __v: 0,
        },
        {
          _id: "60d715619b518613fed2de07",
          entry: "2021-06-29T00:00:00.000Z",
          amount: 500,
          paymentType: "cash",
          category: "fuel",
          notes: "diesel charge",
          __v: 0,
        },
        {
          _id: "60d71697a4306114b14d1168",
          entry: "2021-07-01T00:00:00.000Z",
          amount: 400,
          paymentType: "cash",
          category: "fuel",
          notes: "diesel charge",
          __v: 0,
        },
        {
          _id: "60d715709b518613fed2de09",
          entry: "2021-07-02T00:00:00.000Z",
          amount: 5100,
          paymentType: "cash",
          category: "fuel",
          notes: "diesel charge",
          __v: 0,
        },
        {
          _id: "60d715809b518613fed2de0b",
          entry: "2021-07-02T00:00:00.000Z",
          amount: 5100,
          paymentType: "cash",
          category: "fuel",
          notes: "diesel charge",
          __v: 0,
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "./table.scss";
</style>
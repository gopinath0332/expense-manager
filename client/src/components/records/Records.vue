<template>
  <b-container>
    <b-row v-for="record in records" :key="record._id">
      <h2>{{ record.date }}</h2>
      <b-col>
          <b-avatar variant="success" icon="suit-club"/>
          </b-col>
      <b-col cols="8">2</b-col>
      <b-col align-self="end">3</b-col>
    </b-row>
  </b-container>
</template>

<script>
import moment from "moment";
export default {
  name: "Records",
  computed: {
    records: function () {
      return this.expenses.map((expense) => ({
        ...expense,
        date: moment(expense.entry).format("ll"),
      }));
    },
  },
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
@import "./record.scss";
</style>
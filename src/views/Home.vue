<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="9">
          <line-chart :from="from" :to="to"></line-chart>
        </v-col>
        <v-col cols="12" md="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LineChart from '../components/charts/LineChart.vue';

export default {
  name: "Home",
  components: {LineChart},
  data: () => ({
    from: '2014-06-01',
    to: '2014-12-01',
  })
};
</script>

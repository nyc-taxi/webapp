<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <line-chart :from="from" :to="to"></line-chart>
        </v-col>
        <v-col cols="12"></v-col>
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

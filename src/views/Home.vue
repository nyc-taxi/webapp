<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="9">
          <v-card elevation="15">
            <v-card-title>Line chart</v-card-title>
            <v-card-text>
              <line-chart :from="from" :to="to"></line-chart>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-range-slider
            v-model="range"
            min="0"
            max="8"
            ticks="always"
            tick-size="4"
          >
          </v-range-slider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { add, parseISO, formatISO } from 'date-fns';
import LineChart from '../components/charts/LineChart.vue';


export default {
  name: "Home",
  components: {LineChart},
  data: () => ({
    range: [0, 8],
  }),
  computed: {
    from() {
      const date = add(parseISO('2014-06-30'), {months: this.range[0]})
      return formatISO(date);
    },
    to() {
      const date = add(parseISO('2014-06-30'), {months: this.range[1]})
      return formatISO(date);
    },
  }
};
</script>

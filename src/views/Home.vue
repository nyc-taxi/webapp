<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card elevation="15">
            <v-card-title>
              <v-icon left color="nycTaxi">
                mdi-car
              </v-icon>
              New York City taxi data
            </v-card-title>
            <v-card-text>
              <line-chart :from="from" :to="to"></line-chart>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card elevation="15" raised>
            <v-card-title>
              <v-icon left color="primary">
                mdi-calendar
              </v-icon>
              select range
            </v-card-title>
            <v-card-text class="pa-5">
              <v-range-slider
                :tick-labels="months"
                v-model="range"
                min="0"
                max="8"
                ticks="always"
                tick-size="4"
              >
                <template v-slot:thumb-label="props">
                  <v-icon dark>
                    {{ season(props.value) }}
                  </v-icon>
                </template>
              </v-range-slider>
            </v-card-text>
          </v-card>
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
    months: [
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
      "january",
      "february",
    ],
    icons: [
      'mdi-fire',
      'mdi-fire',
      'mdi-fire',
      'mdi-leaf',
      'mdi-leaf',
      'mdi-leaf',
      'mdi-snowflake',
      'mdi-snowflake',
      'mdi-snowflake',
    ],
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
  },
  methods: {
    season (val) {
      return this.icons[val]
    },
  }
};
</script>

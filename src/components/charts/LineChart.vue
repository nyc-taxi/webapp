<template>
	<div class="chart-container" style="position: relative; min-height: 600px">
		<canvas ref="canvas"></canvas>
	</div>
</template>

<script>
import { Chart } from 'chart.js';
import { forRange } from './dataset.js';

export default {
  name: "LineChart",
  components: {},
	props: ['from', 'to'],
  data: () => ({
    chart: null,
  }),
	computed: {
    curve() {
      const data = forRange(this.from, this.to);
      return data;
    },
	},
  watch: {
    curve: function() {
      this.drawChart();
    }
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const ctx = this.$refs.canvas.getContext("2d");
      const { labels, upperCurve, lowerCurve, dataCurve, outlierCurve } = this.curve;

      const data = {
        labels: labels,
        datasets: [
        {
          label: 'Upper curve',
          data: upperCurve,
          pointRadius: 0,					
          fill: 1,
        },
        {
          label: 'Lower curve',
          data: lowerCurve,
          pointRadius: 0,
        },
        {
          label: 'data',
          data: dataCurve,
          borderColor: 'rgba(100,50,255,0.5)',
          pointRadius: 0,
          pointHitRadius: 0,
          pointHoverRadius: 0,
        },
        {
          label: 'outlier',
          data: outlierCurve,
          pointRadius: 10,
          pointHoverRadius: 18,
          borderColor: 'red',
          backgroundColor: 'rgba(0,0,0,0)',
        }
      ]}
      if (this.chart) {
        
        this.chart.data.labels = data.labels;
        this.chart.data.datasets.forEach((value, index) => {
          value.data = data.datasets[index].data;
        })

        this.chart.update();
        return;
      }
      this.chart = new Chart(ctx, {
        type: 'line',
        data,
        options: {
          // fill: ,
          interaction: {
            intersect: false,
          },
          plugins: {
            legend: false,
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  }
};
</script>

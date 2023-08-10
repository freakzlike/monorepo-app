<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { PanelCard } from '@monorepo-app/shared/components'
import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js'

Chart.register(LinearScale, BarController, CategoryScale, BarElement)

const myChart = ref()

onMounted(() => {
  if (!myChart.value) return

  new Chart(myChart.value, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})
</script>

<template>
  <main>
    <PanelCard>Domain 1 Page</PanelCard>
    <canvas ref="myChart"></canvas>
  </main>
</template>

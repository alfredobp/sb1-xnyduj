<script setup lang="ts">
import { ref } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { jsPDF } from 'jspdf';
import NavigationBar from '../components/NavigationBar.vue';
import { environmentalData } from '../data/mockData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const selectedCompany = ref(environmentalData[0]);

const generatePDF = () => {
  const doc = new jsPDF();
  
  doc.setFontSize(20);
  doc.text(`Environmental Report - ${selectedCompany.value.companyName}`, 20, 20);
  
  doc.setFontSize(12);
  doc.text(`Carbon Emissions: ${selectedCompany.value.carbonEmissions[selectedCompany.value.carbonEmissions.length - 1]} tons`, 20, 40);
  doc.text(`Energy Consumption: ${selectedCompany.value.energyConsumption[selectedCompany.value.energyConsumption.length - 1]} kWh`, 20, 50);
  doc.text(`Waste Generation: ${selectedCompany.value.wasteGeneration[selectedCompany.value.wasteGeneration.length - 1]} tons`, 20, 60);
  
  doc.save(`${selectedCompany.value.companyName}-report.pdf`);
};

const chartData = {
  labels: selectedCompany.value.months,
  datasets: [
    {
      label: 'Carbon Emissions (tons)',
      data: selectedCompany.value.carbonEmissions,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'Energy Consumption (kWh)',
      data: selectedCompany.value.energyConsumption,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    },
    {
      label: 'Waste Generation (tons)',
      data: selectedCompany.value.wasteGeneration,
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Environmental Metrics Over Time'
    }
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <NavigationBar />
    
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-4">
              <h2 class="text-xl font-bold">{{ selectedCompany.companyName }} - Environmental Metrics</h2>
              <select
                v-model="selectedCompany"
                class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option v-for="company in environmentalData" :key="company.id" :value="company">
                  {{ company.companyName }}
                </option>
              </select>
            </div>
            <button
              @click="generatePDF"
              class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Generate Report
            </button>
          </div>
          <div class="h-96">
            <Line :data="chartData" :options="chartOptions" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-semibold mb-2">Carbon Emissions</h3>
            <p class="text-3xl font-bold text-green-600">
              {{ selectedCompany.carbonEmissions[selectedCompany.carbonEmissions.length - 1] }} tons
            </p>
            <p class="text-sm text-gray-500">Latest measurement</p>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-semibold mb-2">Energy Consumption</h3>
            <p class="text-3xl font-bold text-blue-600">
              {{ selectedCompany.energyConsumption[selectedCompany.energyConsumption.length - 1] }} kWh
            </p>
            <p class="text-sm text-gray-500">Latest measurement</p>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-semibold mb-2">Waste Generation</h3>
            <p class="text-3xl font-bold text-purple-600">
              {{ selectedCompany.wasteGeneration[selectedCompany.wasteGeneration.length - 1] }} tons
            </p>
            <p class="text-sm text-gray-500">Latest measurement</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
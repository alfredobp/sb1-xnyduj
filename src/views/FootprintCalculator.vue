<script setup lang="ts">
import { ref, computed } from 'vue';
import { jsPDF } from 'jspdf';
import NavigationBar from '../components/NavigationBar.vue';
import type { FootprintData } from '../types/calculator';
import { emissionFactors } from '../types/calculator';

const footprintData = ref<FootprintData>({
  electricity: 0,
  naturalGas: 0,
  waterConsumption: 0,
  wasteGenerated: 0,
  vehicleFuel: 0,
  paperConsumption: 0,
  employeeCommute: 0,
  businessTravel: 0,
});

const calculations = computed(() => ({
  electricity: footprintData.value.electricity * emissionFactors.electricity,
  naturalGas: footprintData.value.naturalGas * emissionFactors.naturalGas,
  water: footprintData.value.waterConsumption * emissionFactors.water,
  waste: footprintData.value.wasteGenerated * emissionFactors.waste,
  fuel: footprintData.value.vehicleFuel * emissionFactors.fuel,
  paper: footprintData.value.paperConsumption * emissionFactors.paper,
  commute: footprintData.value.employeeCommute * emissionFactors.commute,
  travel: footprintData.value.businessTravel * emissionFactors.travel,
}));

const totalEmissions = computed(() => 
  Object.values(calculations.value).reduce((sum, value) => sum + value, 0)
);

const generateReport = () => {
  const doc = new jsPDF();
  
  doc.setFontSize(20);
  doc.text('Carbon Footprint Report', 20, 20);
  
  doc.setFontSize(12);
  let y = 40;
  
  doc.text('Emissions Breakdown:', 20, y);
  y += 10;
  
  Object.entries(calculations.value).forEach(([key, value]) => {
    doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value.toFixed(2)} kg CO2e`, 20, y);
    y += 10;
  });
  
  doc.text('Total Emissions: ' + totalEmissions.value.toFixed(2) + ' kg CO2e', 20, y + 10);
  
  doc.save('carbon-footprint-report.pdf');
};

const resetCalculator = () => {
  Object.keys(footprintData.value).forEach(key => {
    footprintData.value[key as keyof FootprintData] = 0;
  });
};
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <NavigationBar />
    
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Carbon Footprint Calculator</h2>
            <div class="space-x-4">
              <button
                @click="resetCalculator"
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Reset
              </button>
              <button
                @click="generateReport"
                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Export Report
              </button>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Electricity Consumption (kWh)</label>
                <input
                  v-model.number="footprintData.electricity"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Natural Gas (m³)</label>
                <input
                  v-model.number="footprintData.naturalGas"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Water Consumption (m³)</label>
                <input
                  v-model.number="footprintData.waterConsumption"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Waste Generated (kg)</label>
                <input
                  v-model.number="footprintData.wasteGenerated"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Vehicle Fuel (liters)</label>
                <input
                  v-model.number="footprintData.vehicleFuel"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Paper Consumption (kg)</label>
                <input
                  v-model.number="footprintData.paperConsumption"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Employee Commute (km)</label>
                <input
                  v-model.number="footprintData.employeeCommute"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Business Travel (km)</label>
                <input
                  v-model.number="footprintData.businessTravel"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Results</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(value, key) in calculations" :key="key" class="p-4 bg-white rounded shadow">
                <p class="text-sm text-gray-600">{{ key.charAt(0).toUpperCase() + key.slice(1) }}</p>
                <p class="text-lg font-semibold">{{ value.toFixed(2) }} kg CO2e</p>
              </div>
            </div>
            <div class="mt-6 p-4 bg-indigo-50 rounded-lg">
              <p class="text-lg font-semibold">Total Carbon Footprint</p>
              <p class="text-3xl font-bold text-indigo-600">{{ totalEmissions.toFixed(2) }} kg CO2e</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
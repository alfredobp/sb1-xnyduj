export interface FootprintData {
  electricity: number;
  naturalGas: number;
  waterConsumption: number;
  wasteGenerated: number;
  vehicleFuel: number;
  paperConsumption: number;
  employeeCommute: number;
  businessTravel: number;
}

export interface FootprintFactors {
  electricity: number;
  naturalGas: number;
  water: number;
  waste: number;
  fuel: number;
  paper: number;
  commute: number;
  travel: number;
}

export const emissionFactors: FootprintFactors = {
  electricity: 0.92, // kg CO2e per kWh
  naturalGas: 2.03, // kg CO2e per m3
  water: 0.344, // kg CO2e per m3
  waste: 2.86, // kg CO2e per kg
  fuel: 2.31, // kg CO2e per liter
  paper: 3.02, // kg CO2e per kg
  commute: 0.14, // kg CO2e per km
  travel: 0.24, // kg CO2e per km
};
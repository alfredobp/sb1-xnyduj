export interface EnvironmentalData {
  id: number;
  companyName: string;
  carbonEmissions: number[];
  energyConsumption: number[];
  wasteGeneration: number[];
  months: string[];
}

export const environmentalData: EnvironmentalData[] = [
  {
    id: 1,
    companyName: "EcoTech Solutions",
    carbonEmissions: [45, 42, 40, 38, 36, 35, 33, 32, 30, 29, 28, 27],
    energyConsumption: [150, 145, 140, 138, 135, 132, 130, 128, 125, 123, 120, 118],
    wasteGeneration: [80, 78, 75, 73, 70, 68, 65, 63, 60, 58, 55, 53],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  {
    id: 2,
    companyName: "Green Industries",
    carbonEmissions: [50, 48, 45, 43, 40, 38, 35, 33, 31, 30, 28, 25],
    energyConsumption: [160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105],
    wasteGeneration: [85, 82, 80, 77, 75, 72, 70, 68, 65, 63, 60, 58],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }
];
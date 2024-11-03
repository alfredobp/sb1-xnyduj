export default {
  navigation: {
    dashboard: 'Panel de Control',
    calculator: 'Calculadora de Huella',
    logout: 'Cerrar Sesión'
  },
  login: {
    title: 'Iniciar Sesión',
    username: 'Usuario',
    password: 'Contraseña',
    submit: 'Ingresar',
    error: 'Credenciales inválidas'
  },
  dashboard: {
    title: 'Métricas Ambientales',
    generateReport: 'Generar Informe',
    metrics: {
      carbonEmissions: 'Emisiones de Carbono',
      energyConsumption: 'Consumo de Energía',
      wasteGeneration: 'Generación de Residuos'
    },
    latestMeasurement: 'Última medición'
  },
  calculator: {
    title: 'Calculadora de Huella de Carbono',
    reset: 'Reiniciar',
    export: 'Exportar Informe',
    inputs: {
      electricity: 'Consumo de Electricidad (kWh)',
      naturalGas: 'Gas Natural (m³)',
      water: 'Consumo de Agua (m³)',
      waste: 'Residuos Generados (kg)',
      vehicleFuel: 'Combustible de Vehículos (litros)',
      paper: 'Consumo de Papel (kg)',
      employeeCommute: 'Desplazamiento de Empleados (km)',
      businessTravel: 'Viajes de Negocios (km)'
    },
    results: {
      title: 'Resultados',
      totalFootprint: 'Huella de Carbono Total'
    }
  }
};
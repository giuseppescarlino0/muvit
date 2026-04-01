export const rentalVehicleClasses = [
  {
    id: "compact",
    label: "Compact",
    models: ["Twingo"],
    seats: "5 posti",
  },
  {
    id: "medium",
    label: "Medium",
    models: ["Panda", "Clio"],
    seats: "5 posti",
  },
  {
    id: "comfort",
    label: "Comfort",
    models: ["Juke", "Zoe"],
    seats: "5 posti",
  },
  {
    id: "premium",
    label: "Premium",
    models: ["Talisman", "Cupra"],
    seats: "5 posti",
  },
  {
    id: "van",
    label: "Van",
    models: [],
    seats: "9 posti",
  },
] as const;

export const sharingVehicleClasses = [
  {
    id: "compact-e",
    label: "Compact E",
    energyNote: "Ricarica inclusa",
  },
  {
    id: "medium",
    label: "Medium",
    energyNote: "Carburante non incluso",
  },
  {
    id: "comfort-e",
    label: "Comfort E",
    energyNote: "Ricarica inclusa",
  },
] as const;

export const sharingRates = {
  classes: {
    "compact-e": {
      hourly: 3.49,
      weekend: 3.99,
      night: 4.39,
      kmUnder100: 0.45,
      km100To199: 0.35,
      km200Plus: 0.3,
    },
    medium: {
      hourly: 3.99,
      weekend: 4.49,
      night: 4.89,
      kmUnder100: 0.35,
      km100To199: 0.3,
      km200Plus: 0.25,
    },
    "comfort-e": {
      hourly: 4.09,
      weekend: 4.59,
      night: 4.99,
      kmUnder100: 0.45,
      km100To199: 0.35,
      km200Plus: 0.3,
    },
  },
} as const;

export const rentalRates = {
  seasons: [
    {
      id: "winter",
      label: "Inverno",
      period: "01/01 - 28/02",
      supplement: 0,
    },
    {
      id: "spring-autumn",
      label: "Autunno e primavera",
      period: "01/03 - 30/04 e 01/10 - 31/12",
      supplement: 4,
    },
    {
      id: "summer",
      label: "Estate",
      period: "01/05 - 25/06 e 06/09 - 30/09",
      supplement: 7,
    },
    {
      id: "high-summer",
      label: "Alta stagione",
      period: "26/06 - 05/09",
      supplement: 10,
    },
  ],
  mileageOptions: [
    {
      id: "80",
      label: "Fino a 80 km al giorno",
      multiplier: 1,
    },
    {
      id: "200",
      label: "Fino a 200 km al giorno",
      multiplier: 1.15,
    },
    {
      id: "unlimited",
      label: "Km illimitati",
      multiplier: 1.23,
    },
  ],
  durationDiscounts: [
    {
      id: "1-2",
      label: "1 o 2 giorni",
      minDays: 1,
      maxDays: 2,
      multiplier: 1,
    },
    {
      id: "3-6",
      label: "Da 3 a 6 giorni",
      minDays: 3,
      maxDays: 6,
      multiplier: 0.93,
    },
    {
      id: "7-13",
      label: "Da 7 a 13 giorni",
      minDays: 7,
      maxDays: 13,
      multiplier: 0.86,
    },
    {
      id: "14-plus",
      label: "Da 14 giorni in su",
      minDays: 14,
      maxDays: null,
      multiplier: 0.65,
    },
  ],
  classes: {
    compact: {
      baseDaily: 34.9,
      seasonalSupplements: {
        winter: 0,
        "spring-autumn": 4,
        summer: 7,
        "high-summer": 10,
      },
    },
    medium: {
      baseDaily: 38.9,
      seasonalSupplements: {
        winter: 0,
        "spring-autumn": 5,
        summer: 8,
        "high-summer": 11,
      },
    },
    comfort: {
      baseDaily: 43.9,
      seasonalSupplements: {
        winter: 0,
        "spring-autumn": 6,
        summer: 9,
        "high-summer": 12,
      },
    },
    premium: {
      baseDaily: 49.9,
      seasonalSupplements: {
        winter: 0,
        "spring-autumn": 7,
        summer: 10,
        "high-summer": 14,
      },
    },
    van: {
      baseDaily: 89.9,
      seasonalSupplements: {
        winter: 0,
        "spring-autumn": 10,
        summer: 18,
        "high-summer": 20,
      },
    },
  },
} as const;


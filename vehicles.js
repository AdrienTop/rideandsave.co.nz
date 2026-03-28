// ============================================================
// VEHICLE DATA — estimated real-world L/100km
// Official figures: NZTA Vehicle Fleet Open Data (FC_COMBINED, 2021–2026)
// Real-world gap: EU Commission OBFCM report, March 2024
//   Petrol: +23.7% over WLTP   Diesel: +18.1% over WLTP
//   Source: 600,000 vehicles, 2021 on-board monitoring
// Rankings by NZ registration count from NZTA data.
// ============================================================
const VD = {
  small:    { icon:'🚗', name:'Small car',          sub:'Swift · Mazda 2 · Yaris',     fuels:['petrol'],           default:'petrol',  cons:{petrol:6.9},                maint:0.07,
              models:{petrol:['Suzuki Swift 1.2 (6.3)','MG 3 1.5 (8.2)','Mazda 2 1.5 (6.4)','Kia Rio 1.4 (7.3)','Toyota Yaris 1.5 (6.1)']}},

  medium:   { icon:'🚘', name:'Medium car',          sub:'Corolla · Mazda 3 · Golf',   fuels:['petrol'],           default:'petrol',  cons:{petrol:8.3},                maint:0.08,
              models:{petrol:['Toyota Corolla 2.0 (7.4)','Mazda 3 2.0 (7.7)','VW Golf 1.5T (8.2)','Hyundai i30 2.0 (8.7)','Honda Civic 1.5T (9.5)']}},

  small_suv:{ icon:'🚙', name:'Small SUV',           sub:'ASX · Seltos · Stonic',      fuels:['petrol'],           default:'petrol',  cons:{petrol:8.4},                maint:0.09,
              models:{petrol:['Mitsubishi ASX 2.0 (9.4)','Kia Seltos 2.0 (8.5)','Kia Stonic 1.0T (7.4)','MG ZS 1.5T (8.7)','Hyundai Kona 2.0 (8.0)']}},

  large_suv:{ icon:'🚐', name:'Large SUV',           sub:'Outlander · CX-5 · Sportage',fuels:['petrol','diesel'],  default:'petrol',  cons:{petrol:9.5,diesel:8.0},     maint:0.10,
              models:{petrol:['Mitsubishi Outlander 2.5 (9.4)','Mazda CX-5 2.5 (9.3)','Nissan X-Trail 1.5T (9.9)','Kia Sportage 1.6T (9.7)','Subaru Outback 2.5 (9.3)'],diesel:['Ford Everest 2.0D (9.1)','Hyundai Santa Fe 2.2D (7.2)','Kia Sorento 2.2D (7.2)','Kia Sportage 2.0D (7.4)','Toyota Fortuner 2.8D (9.0)']}},

  ute:      { icon:'🛻', name:'Ute',       sub:'Ranger · Hilux · Triton',    fuels:['diesel','petrol'],  default:'diesel',  cons:{diesel:9.3,petrol:13.6},    maint:0.12,
              models:{diesel:['Ford Ranger 2.0D (9.1)','Toyota Hilux 2.8D (9.2)','Mitsubishi Triton 2.4D (9.8)','Nissan Navara 2.3D (9.1)','Isuzu D-Max 3.0D (9.3)'],petrol:['Ford Ranger V6 3.0 (14.2)','Toyota Hilux 2.7 4x2 (12.9)']}},

  van:      { icon:'🚌', name:'Van',  sub:'HiAce · Carnival · Transit', fuels:['diesel'],           default:'diesel',  cons:{diesel:9.0},                maint:0.12,
              models:{diesel:['Toyota HiAce 2.8D (9.6)','Ford Transit 2.0D (9.7)','Kia Carnival 2.2D (7.7)']}},

  hybrid:   { icon:'🔋', name:'Hybrid',              sub:'RAV4 H · Corolla H · Jazz H',fuels:['petrol'],           default:'petrol',  cons:{petrol:5.3},                maint:0.09,
              models:{petrol:['Toyota RAV4 Hybrid 2.5 (5.9)','Toyota Corolla Hybrid 1.8 (5.0)','Toyota Yaris Cross Hybrid 1.5 (4.6)','Toyota Highlander Hybrid 2.5 (6.9)','Honda Jazz e:HEV 1.5 (4.0)']}},

  electric: { icon:'⚡', name:'Electric (EV)',       sub:'Model Y · Atto 3 · MG ZS',  fuels:['electric'],         default:'electric', cons:{electric:17.5},            maint:0.04,
              models:{electric:['Tesla Model Y (17.0 kWh)','BYD Atto 3 (17.6 kWh)','MG ZS EV (18.2 kWh)','Hyundai Kona EV (17.9 kWh)','MG 4 (17.1 kWh)']}},
};

// CO2 emission factors by fuel type (kg CO2 per litre burned)
// Source: Ministry for the Environment NZ / IPCC
const CO2_FACTOR = { petrol: 2.310, diesel: 2.640, electric: 0 };

// IRD 2024–25 mileage reimbursement rates ($/km), tier 1 (up to 14,000 km/yr)
// These bundle fuel + maintenance + depreciation into one flat rate
const IRD_RATES = { petrol: 1.17, diesel: 1.26, hybrid: 0.86, electric: 1.08 };

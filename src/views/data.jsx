const propertyTypes = ["Apartment", "Villa", "Plot"];

const cities = [
  "Mumbai",
  "Pune",
  "Nashik",
  "Nagpur",
  "Ahmednagar",
  "Aurangabad",
  "Kolhapur",
  "Thane",
];

const nearbyPlacesList = [
  [
    { name: "Hospital", distance: "1.5 km" },
    { name: "School", distance: "2 km" },
    { name: "Market", distance: "500 m" },
  ],
  [
    { name: "Railway Station", distance: "3 km" },
    { name: "Mall", distance: "1 km" },
    { name: "School", distance: "1.2 km" },
  ],
  [
    { name: "Airport", distance: "8 km" },
    { name: "Hospital", distance: "2 km" },
    { name: "Metro Station", distance: "700 m" },
  ],
  [
    { name: "College", distance: "1 km" },
    { name: "Bus Stand", distance: "500 m" },
    { name: "Market", distance: "800 m" },
  ],
];

export const PROPERTIES = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,

  title: `${propertyTypes[index % 3]} ${index + 1}`,

  type: propertyTypes[index % 3],

  city: cities[index % cities.length],

  state: "Maharashtra",

  price: Math.floor(Math.random() * 9000000) + 1000000,

  rating: Number((Math.random() * 2 + 3).toFixed(1)),

  reviews: [
    {
      name: "Radha E",
      rating: 3.9,
      comment: "Water supply is consistent, no complaints.",
    },
    {
      name: "Krishna M",
      rating: 4.6,
      comment: "Very good location and peaceful area.",
    },
    {
      name: "Shrii A",
      rating: 4.5,
      comment: "Clean rooms and good facilities.",
    },
  ],

  ownerName: `Owner ${index + 1}`,

  ownerContact: `98765${String(index).padStart(5, "0")}`,

  ownerEmail: `owner${index + 1}@gmail.com`,

  amenities: [
    "WiFi",
    "CCTV",
    "Parking",
    "Security",
    "Power Backup",
  ],

  images:
    propertyTypes[index % 3] === "Villa"
      ? [
          "https://picsum.photos/800/500?random=101",
          "https://picsum.photos/800/500?random=102",
          "https://picsum.photos/800/500?random=103",
          "https://picsum.photos/800/500?random=104",
        ]
      : propertyTypes[index % 3] === "Apartment"
      ? [
          "https://picsum.photos/800/500?random=201",
          "https://picsum.photos/800/500?random=202",
          "https://picsum.photos/800/500?random=203",
          "https://picsum.photos/800/500?random=204",
        ]
      : [
          "https://picsum.photos/800/500?random=301",
          "https://picsum.photos/800/500?random=302",
          "https://picsum.photos/800/500?random=303",
          "https://picsum.photos/800/500?random=304",
        ],

  nearbyPlaces:
    nearbyPlacesList[index % nearbyPlacesList.length],

  description:
    "Beautiful property with modern amenities and excellent connectivity.",
}));

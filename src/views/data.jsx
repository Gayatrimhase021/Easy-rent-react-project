
 import image1 from "../assets/image1.jpg";
 import image2 from "../assets/image2.jpg";
 import image3 from "../assets/image3.jpg";
 import image4 from "../assets/image4.jpg";  
  import image5 from "../assets/image5.jpg";
  import image6 from "../assets/image6.jpg";
  import image7 from "../assets/image7.jpg";
  import image8 from "../assets/image8.jpg";
  import image9 from "../assets/image9.jpg";
  import image10 from "../assets/image10.jpg";
  import image11 from "../assets/image11.jpg";
  import image12 from "../assets/image12.jpg";
  import image13 from "../assets/image13.jpg";
  import image14 from "../assets/image14.jpg";
  import image15 from "../assets/image15.jpg";
  import image16 from "../assets/image16.jpg";
  import image17 from "../assets/image17.jpg";
  import image18 from "../assets/image18.jpg";
  import image19 from "../assets/image19.jpg";
  import image20 from "../assets/image20.jpg";


const propertyImages = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20,
];

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

  images: [
    propertyImages[index % 20],
    propertyImages[(index + 1) % 20],
    propertyImages[(index + 2) % 20],
    propertyImages[(index + 3) % 20],
  ],

  nearbyPlaces:
    nearbyPlacesList[index % nearbyPlacesList.length],

  description:
    "Beautiful property with modern amenities and excellent connectivity.",
}));
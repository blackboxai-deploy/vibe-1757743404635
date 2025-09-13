export interface Vehicle {
  id: string;
  name: string;
  type: "bike" | "auto" | "cab";
  capacity: number;
  basePrice: number;
  pricePerKm: number;
  eta: string;
  image: string;
  description: string;
}

export interface Driver {
  id: string;
  name: string;
  rating: number;
  totalRides: number;
  vehicle: {
    model: string;
    number: string;
    color: string;
  };
  phone: string;
  image: string;
}

export interface Ride {
  id: string;
  from: string;
  to: string;
  distance: number;
  price: number;
  status: "requested" | "accepted" | "ongoing" | "completed" | "cancelled";
  driver?: Driver;
  vehicleType: string;
  bookedAt: string;
  estimatedTime: string;
}

export const mockVehicles: Vehicle[] = [
  {
    id: "bike",
    name: "Rapido Bike",
    type: "bike",
    capacity: 1,
    basePrice: 25,
    pricePerKm: 4,
    eta: "2-5 mins",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bfe4ad4a-6cb0-4d1f-bb49-afd7789b04ee.png",
    description: "Quick and affordable rides"
  },
  {
    id: "auto",
    name: "Rapido Auto",
    type: "auto",
    capacity: 3,
    basePrice: 35,
    pricePerKm: 6,
    eta: "3-7 mins",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/190d152e-1a83-471e-9f6b-eb528412cf1a.png",
    description: "Comfortable rides for 2-3 people"
  },
  {
    id: "cab",
    name: "Rapido Cab",
    type: "cab",
    capacity: 4,
    basePrice: 55,
    pricePerKm: 8,
    eta: "5-10 mins",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dede70e6-9cce-44fb-b59c-a9e1ba3d1e35.png",
    description: "Premium comfort for longer rides"
  }
];

export const mockDrivers: Driver[] = [
  {
    id: "1",
    name: "Raj Kumar",
    rating: 4.8,
    totalRides: 1250,
    vehicle: {
      model: "Honda Activa",
      number: "KA 01 AB 1234",
      color: "Blue"
    },
    phone: "+91 98765 43210",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e88d985d-f47a-4171-b9ba-d0232cdce758.png"
  },
  {
    id: "2",
    name: "Suresh Patel",
    rating: 4.9,
    totalRides: 980,
    vehicle: {
      model: "Bajaj Auto",
      number: "KA 02 CD 5678",
      color: "Green"
    },
    phone: "+91 87654 32109",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c77d334-c4cf-4f97-a51a-827c29f9c093.png"
  }
];

export const mockRides: Ride[] = [
  {
    id: "1",
    from: "Koramangala",
    to: "Electronic City",
    distance: 12.5,
    price: 85,
    status: "completed",
    driver: mockDrivers[0],
    vehicleType: "bike",
    bookedAt: "2024-01-15T10:30:00Z",
    estimatedTime: "25 mins"
  },
  {
    id: "2",
    from: "MG Road",
    to: "Whitefield",
    distance: 18.2,
    price: 145,
    status: "ongoing",
    driver: mockDrivers[1],
    vehicleType: "auto",
    bookedAt: "2024-01-15T14:15:00Z",
    estimatedTime: "35 mins"
  }
];

export const mockLocations = [
  "Koramangala",
  "Electronic City",
  "MG Road",
  "Whitefield",
  "Indiranagar",
  "HSR Layout",
  "BTM Layout",
  "Jayanagar",
  "Malleshwaram",
  "JP Nagar"
];

export const calculatePrice = (vehicle: Vehicle, distance: number): number => {
  return Math.round(vehicle.basePrice + (distance * vehicle.pricePerKm));
};

export const generateETA = (vehicle: Vehicle, distance: number): string => {
  const baseTime = vehicle.type === "bike" ? 2 : vehicle.type === "auto" ? 4 : 6;
  const travelTime = Math.round(distance * 2.5);
  const totalTime = baseTime + travelTime;
  return `${totalTime} mins`;
};
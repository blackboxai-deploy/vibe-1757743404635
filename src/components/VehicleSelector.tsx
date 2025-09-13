"use client";

import { mockVehicles } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VehicleSelectorProps {
  selectedVehicle: string;
  onVehicleSelect: (vehicleId: string) => void;
}

export function VehicleSelector({ selectedVehicle, onVehicleSelect }: VehicleSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {mockVehicles.map((vehicle) => (
        <Card
          key={vehicle.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedVehicle === vehicle.id
              ? "ring-2 ring-yellow-500 bg-yellow-50"
              : "hover:bg-gray-50"
          }`}
          onClick={() => onVehicleSelect(vehicle.id)}
        >
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-16 h-12 object-contain"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{vehicle.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{vehicle.description}</p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="text-xs">
                    {vehicle.eta}
                  </Badge>
                  <span className="text-sm font-medium">
                    ₹{vehicle.basePrice}+ per km
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
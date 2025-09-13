"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockVehicles } from "@/lib/mock-data";

interface PriceEstimatorProps {
  price: number;
  estimatedTime: string;
  vehicleType: string;
}

export function PriceEstimator({ price, estimatedTime, vehicleType }: PriceEstimatorProps) {
  const vehicle = mockVehicles.find(v => v.id === vehicleType);

  if (!vehicle) return null;

  return (
    <Card className="bg-green-50 border-green-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-12 h-8 object-contain"
            />
            <div>
              <h3 className="font-semibold text-green-800">{vehicle.name}</h3>
              <p className="text-sm text-green-600">Best option for your trip</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-800">₹{price}</div>
            <Badge variant="secondary" className="mt-1">
              {estimatedTime}
            </Badge>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-white rounded-lg">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Base fare</span>
            <span>₹{vehicle.basePrice}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-600">Distance charges</span>
            <span>₹{price - vehicle.basePrice}</span>
          </div>
          <div className="border-t mt-2 pt-2">
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>₹{price}</span>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-green-600 mt-2 text-center">
          * Final fare may vary based on traffic and route
        </p>
      </CardContent>
    </Card>
  );
}
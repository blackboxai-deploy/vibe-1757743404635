"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { bookingSchema, type BookingFormData } from "@/lib/validations";
import { mockVehicles, mockLocations, calculatePrice, generateETA } from "@/lib/mock-data";
import { VehicleSelector } from "./VehicleSelector";
import { PriceEstimator } from "./PriceEstimator";
import { toast } from "sonner";

export function BookingForm() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [estimatedTime, setEstimatedTime] = useState<string>("");
  const [showPricing, setShowPricing] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      pickup: "",
      destination: "",
      phoneNumber: "",
      vehicleType: "bike" as const,
    },
  });

  const onSubmit = (_data: BookingFormData) => {
    toast.success("Ride booked successfully! Finding nearby drivers...");
    setTimeout(() => {
      window.location.href = "/ride/123"; // Simulate navigation to ride tracking
    }, 2000);
  };

  const handleEstimate = () => {
    const pickup = form.getValues("pickup");
    const destination = form.getValues("destination");
    const vehicleType = form.getValues("vehicleType");

    if (!pickup || !destination || !vehicleType) {
      toast.error("Please fill in pickup and destination locations");
      return;
    }

    // Simulate distance calculation (random between 2-15 km)
    const distance = Math.random() * 13 + 2;
    const vehicle = mockVehicles.find(v => v.id === vehicleType);
    
    if (vehicle) {
      const price = calculatePrice(vehicle, distance);
      const eta = generateETA(vehicle, distance);
      
      setEstimatedPrice(price);
      setEstimatedTime(eta);
      setSelectedVehicle(vehicleType);
      setShowPricing(true);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Pickup and Destination */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pickup">Pickup Location</Label>
            <Select onValueChange={(value) => form.setValue("pickup", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select pickup location" />
              </SelectTrigger>
              <SelectContent>
                {mockLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Select onValueChange={(value) => form.setValue("destination", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {mockLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            placeholder="+91 98765 43210"
            {...form.register("phoneNumber")}
            className="w-full"
          />
          {form.formState.errors.phoneNumber && (
            <p className="text-sm text-red-500">{form.formState.errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Vehicle Selection */}
        <div className="space-y-2">
          <Label>Select Vehicle Type</Label>
          <VehicleSelector
            selectedVehicle={form.watch("vehicleType")}
            onVehicleSelect={(vehicleId) => form.setValue("vehicleType", vehicleId as "bike" | "auto" | "cab")}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleEstimate}
            className="flex-1"
          >
            Get Estimate
          </Button>
          <Button 
            type="submit" 
            className="flex-1"
            disabled={!showPricing}
          >
            Book Now
          </Button>
        </div>
      </form>

      {/* Price Estimation */}
      {showPricing && (
        <PriceEstimator
          price={estimatedPrice}
          estimatedTime={estimatedTime}
          vehicleType={selectedVehicle}
        />
      )}
    </div>
  );
}
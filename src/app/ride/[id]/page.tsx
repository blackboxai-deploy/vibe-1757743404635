"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockDrivers, mockRides } from "@/lib/mock-data";

interface RidePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function RidePage({ params: _params }: RidePageProps) {
  const [rideStatus, setRideStatus] = useState("finding");
  const [progress, setProgress] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(8);

  const ride = mockRides[0]; // Mock data
  const driver = mockDrivers[0]; // Mock driver

  useEffect(() => {
    // Simulate ride status progression
    const statusProgression = [
      { status: "finding", duration: 3000, progress: 20 },
      { status: "driver_assigned", duration: 5000, progress: 40 },
      { status: "driver_arriving", duration: 8000, progress: 60 },
      { status: "picked_up", duration: 15000, progress: 80 },
      { status: "completed", duration: 0, progress: 100 }
    ];

    let currentIndex = 0;
    const progressInterval = setInterval(() => {
      if (currentIndex < statusProgression.length) {
        const current = statusProgression[currentIndex];
        setRideStatus(current.status);
        setProgress(current.progress);
        
        setTimeout(() => {
          currentIndex++;
        }, current.duration);
      } else {
        clearInterval(progressInterval);
      }
    }, 100);

    // Update estimated time
    const timeInterval = setInterval(() => {
      setEstimatedTime(prev => Math.max(0, prev - 1));
    }, 60000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const getStatusMessage = () => {
    switch (rideStatus) {
      case "finding":
        return "Finding nearby drivers...";
      case "driver_assigned":
        return "Driver found! Getting ready...";
      case "driver_arriving":
        return `${driver.name} is coming to pick you up`;
      case "picked_up":
        return "Ride in progress to destination";
      case "completed":
        return "Ride completed successfully!";
      default:
        return "Processing...";
    }
  };

  const getStatusColor = () => {
    switch (rideStatus) {
      case "finding":
        return "bg-yellow-500";
      case "driver_assigned":
      case "driver_arriving":
        return "bg-blue-500";
      case "picked_up":
        return "bg-green-500";
      case "completed":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Ride Status */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Your Ride</CardTitle>
                <Badge className={`${getStatusColor()} text-white`}>
                  {rideStatus.replace("_", " ").toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg text-center">{getStatusMessage()}</p>
                <Progress value={progress} className="w-full" />
                {estimatedTime > 0 && (
                  <p className="text-sm text-gray-600 text-center">
                    Estimated time: {estimatedTime} minutes
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Map Simulation */}
          <Card>
            <CardContent className="p-0">
              <div className="h-64 bg-gray-200 rounded-lg relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e8947571-f58c-4a61-9345-5b327edf6e6d.png"
                  alt="Live GPS map showing route from pickup to destination with current location tracking"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Live Tracking</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trip Details */}
          <Card>
            <CardHeader>
              <CardTitle>Trip Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">From</p>
                    <p className="font-medium">{ride.from}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">To</p>
                    <p className="font-medium">{ride.to}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Distance</p>
                    <p className="font-medium">{ride.distance} km</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Fare</p>
                    <p className="font-medium text-lg">₹{ride.price}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Driver Info */}
          {(rideStatus === "driver_assigned" || rideStatus === "driver_arriving" || rideStatus === "picked_up") && (
            <Card>
              <CardHeader>
                <CardTitle>Your Driver</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <img
                    src={driver.image}
                    alt={driver.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{driver.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>★ {driver.rating}</span>
                      <span>•</span>
                      <span>{driver.totalRides} trips</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {driver.vehicle.color} {driver.vehicle.model} • {driver.vehicle.number}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Button size="sm" variant="outline">
                      Call
                    </Button>
                    <Button size="sm" variant="outline">
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {rideStatus !== "completed" && (
              <Button variant="outline" className="w-full">
                Share Trip Details
              </Button>
            )}
            
            {rideStatus === "completed" && (
              <div className="space-y-3">
                <Button className="w-full">
                  Rate Your Ride
                </Button>
                <Button variant="outline" className="w-full">
                  Book Another Ride
                </Button>
              </div>
            )}
            
            <Button variant="destructive" className="w-full">
              Emergency Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
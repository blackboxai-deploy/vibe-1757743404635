"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingForm } from "@/components/BookingForm";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Book Your Ride
            </h1>
            <p className="text-gray-600">
              Get instant rides with verified drivers across the city
            </p>
          </div>

          {/* Booking Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Ride Details</CardTitle>
            </CardHeader>
            <CardContent>
              <BookingForm />
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7cbbb913-3724-41da-88e8-4f876de7e517.png"
                    alt="GPS tracking icon"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="font-semibold mb-2">Live Tracking</h3>
                <p className="text-sm text-gray-600">
                  Track your ride in real-time with GPS
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/afdf66f4-3f53-4d3b-bc5f-b64bbefd8466.png"
                    alt="Safety shield icon"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="font-semibold mb-2">Verified Drivers</h3>
                <p className="text-sm text-gray-600">
                  All drivers are background verified
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97ac3261-4ebf-457c-8aa5-5eae4b9d2f41.png"
                    alt="24/7 support icon"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Round the clock customer support
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Safety Tips */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Always verify the driver and vehicle details before getting in</li>
                <li>• Share your trip details with family or friends</li>
                <li>• Use the in-app emergency button if you feel unsafe</li>
                <li>• Always wear a helmet when riding on bikes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
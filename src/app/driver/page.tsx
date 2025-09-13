"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function DriverPage() {
  const driverStats = {
    name: "Raj Kumar",
    rating: 4.8,
    totalRides: 1250,
    earnings: 45600,
    todayEarnings: 850,
    status: "online"
  };

  const recentTrips = [
    { id: "1", from: "Koramangala", to: "Electronic City", earning: 85, time: "10:30 AM" },
    { id: "2", from: "MG Road", to: "Whitefield", earning: 145, time: "2:15 PM" },
    { id: "3", from: "HSR Layout", to: "Airport", earning: 320, time: "6:45 PM" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Drive with Rapido
              </h1>
              <p className="text-gray-600">Start earning today as a Rapido partner driver</p>
            </div>
            <Button asChild>
              <Link href="/driver/register">Become a Driver</Link>
            </Button>
          </div>

          {/* Hero Section */}
          <Card className="mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Earn ₹30,000 - ₹50,000 per month
                  </h2>
                  <p className="text-lg mb-6 text-yellow-100">
                    Flexible working hours, instant payments, and complete support
                  </p>
                  <Button size="lg" variant="secondary">
                    Register Now
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76fbc045-6549-4bc0-a5cc-c201f826f562.png"
                    alt="Happy Rapido driver with motorcycle showing earning potential"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/47a28ac7-583f-4445-b679-d3397f529738.png"
                    alt="Flexible timing icon"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
                  <p className="text-gray-600">Work when you want, earn as per your schedule</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d790c2b2-9454-45c7-ba3f-1d3e9d6c08b9.png"
                    alt="Instant payments icon"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Instant Payments</h3>
                  <p className="text-gray-600">Get paid instantly after every completed ride</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00706383-f927-4d51-a504-62c0b8b1fcb9.png"
                    alt="24/7 support icon"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round the clock support for all your queries</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for Driver Dashboard/Requirements */}
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList>
              <TabsTrigger value="dashboard">Sample Dashboard</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="earnings">Earning Calculator</TabsTrigger>
            </TabsList>

            {/* Sample Dashboard */}
            <TabsContent value="dashboard">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Driver Dashboard</CardTitle>
                      <Badge className="bg-green-100 text-green-800">
                        {driverStats.status.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">₹{driverStats.todayEarnings}</p>
                        <p className="text-sm text-gray-600">Today&apos;s Earnings</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">₹{driverStats.earnings}</p>
                        <p className="text-sm text-gray-600">Total Earnings</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-yellow-600">{driverStats.rating}</p>
                        <p className="text-sm text-gray-600">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">{driverStats.totalRides}</p>
                        <p className="text-sm text-gray-600">Total Rides</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-4">Today&apos;s Rides</h3>
                    <div className="space-y-3">
                      {recentTrips.map((trip) => (
                        <div key={trip.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{trip.from} → {trip.to}</p>
                            <p className="text-sm text-gray-600">{trip.time}</p>
                          </div>
                          <p className="font-semibold text-green-600">₹{trip.earning}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements">
              <Card>
                <CardHeader>
                  <CardTitle>Driver Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Personal Requirements</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Age: 18-65 years
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Valid driving license
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Aadhaar card
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          PAN card
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Bank account details
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Vehicle Requirements</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          2-wheeler (100cc or above)
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Vehicle RC (Registration Certificate)
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Valid insurance
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Pollution certificate
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Vehicle should be in good condition
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Earnings Calculator */}
            <TabsContent value="earnings">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Potential Monthly Earnings</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Part-time (4-6 hours/day)</span>
                            <span className="text-xl font-bold text-green-600">₹15,000 - ₹25,000</span>
                          </div>
                        </div>
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Full-time (8-10 hours/day)</span>
                            <span className="text-xl font-bold text-blue-600">₹30,000 - ₹50,000</span>
                          </div>
                        </div>
                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Peak hours bonus</span>
                            <span className="text-xl font-bold text-purple-600">+20%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43f67ff5-2ec4-46e4-9564-938af7fe44fe.png"
                        alt="Driver earnings growth chart showing potential monthly income"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="mt-8 text-center">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-gray-600 mb-6">
                Join thousands of drivers who are already earning with Rapido
              </p>
              <Button size="lg" className="mr-4">
                Register as Driver
              </Button>
              <Button size="lg" variant="outline">
                Download Driver App
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
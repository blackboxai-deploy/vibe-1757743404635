"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockRides } from "@/lib/mock-data";
import Link from "next/link";

export default function DashboardPage() {
  const user = {
    name: "Arjun Sharma",
    phone: "+91 98765 43210",
    email: "arjun@example.com",
    totalRides: 156,
    savings: 2340,
    rating: 4.7
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "ongoing":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-gray-600">Manage your rides and profile</p>
            </div>
            <Button asChild>
              <Link href="/book">Book New Ride</Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32bc0b45-43be-45b6-ab9d-125125287042.png"
                    alt="Total rides icon"
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{user.totalRides}</p>
                    <p className="text-xs text-gray-600">Total Rides</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b27a5db-ef2b-4cfc-badd-e5873bb242b3.png"
                    alt="Money saved icon"
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <p className="text-2xl font-bold text-green-600">₹{user.savings}</p>
                    <p className="text-xs text-gray-600">Money Saved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3498f381-178f-4ce2-9692-aabc3c8c30c0.png"
                    alt="Rating star icon"
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <p className="text-2xl font-bold text-yellow-600">{user.rating}</p>
                    <p className="text-xs text-gray-600">Your Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67a9919e-6585-40bc-9201-8091e621624a.png"
                    alt="Wallet balance icon"
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <p className="text-2xl font-bold text-blue-600">₹245</p>
                    <p className="text-xs text-gray-600">Wallet Balance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="rides" className="space-y-6">
            <TabsList>
              <TabsTrigger value="rides">My Rides</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
            </TabsList>

            {/* Rides Tab */}
            <TabsContent value="rides">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Rides</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockRides.map((ride) => (
                      <div
                        key={ride.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <img 
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b3b6c8d-d320-4aeb-a9bf-1ef935f037d2.png"
                            alt="Vehicle icon"
                            className="w-12 h-12"
                          />
                          <div>
                            <p className="font-medium">{ride.from} → {ride.to}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(ride.bookedAt).toLocaleDateString()} • {ride.distance} km
                            </p>
                            {ride.driver && (
                              <p className="text-xs text-gray-500">
                                Driver: {ride.driver.name}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{ride.price}</p>
                          <Badge className={getStatusColor(ride.status)}>
                            {ride.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <img 
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13f75d9d-44c8-4082-aa11-5857426d95c3.png"
                      alt="Profile picture"
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{user.name}</h2>
                      <p className="text-gray-600">Rapido Customer since 2022</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <p className="mt-1 text-gray-900">{user.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <p className="mt-1 text-gray-900">{user.email}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Emergency Contact</label>
                        <p className="mt-1 text-gray-900">+91 87654 32109</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Preferred Payment</label>
                        <p className="mt-1 text-gray-900">UPI & Wallet</p>
                      </div>
                    </div>
                  </div>

                  <Button>Edit Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Wallet Tab */}
            <TabsContent value="wallet">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Wallet Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-4xl font-bold text-blue-600 mb-4">₹245</p>
                      <p className="text-gray-600 mb-6">Available Balance</p>
                      <div className="flex gap-4 justify-center">
                        <Button>Add Money</Button>
                        <Button variant="outline">Transaction History</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2">
                        <div>
                          <p className="font-medium">Ride Payment</p>
                          <p className="text-sm text-gray-600">Jan 15, 2024</p>
                        </div>
                        <p className="text-red-600 font-medium">-₹85</p>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <div>
                          <p className="font-medium">Wallet Recharge</p>
                          <p className="text-sm text-gray-600">Jan 14, 2024</p>
                        </div>
                        <p className="text-green-600 font-medium">+₹500</p>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <div>
                          <p className="font-medium">Ride Payment</p>
                          <p className="text-sm text-gray-600">Jan 13, 2024</p>
                        </div>
                        <p className="text-red-600 font-medium">-₹145</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
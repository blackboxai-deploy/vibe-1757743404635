"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingForm } from "@/components/BookingForm";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                India&apos;s Largest
                <span className="text-yellow-600 block">Bike Taxi Platform</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Book bike taxis, autos, and cabs instantly. Fast, affordable, and reliable rides across the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/book">Book a Ride</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/driver">Drive with Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ba7cf70-178b-4723-bbaa-10c5c6f4bff0.png"
                alt="Rapido bike taxi service with rider in yellow uniform on city street"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Book Your Ride in Seconds
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <BookingForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Rapido?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/de748f32-d0d7-4c96-b056-afb610856ffe.png"
                    alt="Fast booking icon"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-gray-600">
                  Get a ride within 2-5 minutes. Our extensive network ensures quick pickups across the city.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16e7adec-bd0d-4b9f-85f7-271ebd03519f.png"
                    alt="Affordable pricing icon"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Super Affordable</h3>
                <p className="text-gray-600">
                  Save up to 50% on your daily commute. Transparent pricing with no hidden charges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/185d03bc-d924-48a8-9430-46aa81986703.png"
                    alt="Safety first icon"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Safe</h3>
                <p className="text-gray-600">
                  Verified drivers, real-time tracking, and 24/7 support. Your safety is our priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Rapido Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book</h3>
              <p className="text-gray-600">Select pickup & destination</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Match</h3>
              <p className="text-gray-600">Get paired with nearby driver</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Track</h3>
              <p className="text-gray-600">Real-time tracking & updates</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ride</h3>
              <p className="text-gray-600">Enjoy your safe journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">5M+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">25K+</div>
              <div className="text-gray-600">Partner Drivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">50M+</div>
              <div className="text-gray-600">Rides Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Download the Rapido app or book online for the fastest rides in your city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Become a Driver
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
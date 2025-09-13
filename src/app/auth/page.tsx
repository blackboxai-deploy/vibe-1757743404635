"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!phoneNumber) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStep("otp");
      setIsLoading(false);
    }, 2000);
  };

  const handleVerifyOTP = async () => {
    if (!otp) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Rapido</h1>
          <p className="text-gray-600">Sign in to book your rides</p>
        </div>

        <Tabs defaultValue="customer" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="customer">Customer</TabsTrigger>
            <TabsTrigger value="driver">Driver</TabsTrigger>
          </TabsList>

          <TabsContent value="customer">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Customer Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {step === "phone" ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={handleSendOTP}
                      disabled={!phoneNumber || isLoading}
                    >
                      {isLoading ? "Sending OTP..." : "Send OTP"}
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-600">
                        OTP sent to {phoneNumber}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="123456"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={handleVerifyOTP}
                      disabled={!otp || otp.length !== 6 || isLoading}
                    >
                      {isLoading ? "Verifying..." : "Verify OTP"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => setStep("phone")}
                    >
                      Change Number
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="driver">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Driver Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/191a6ba8-dd1d-4564-bfde-52df3fd36d1b.png"
                    alt="Driver login icon with motorcycle and helmet"
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Driver Portal</h3>
                  <p className="text-gray-600 mb-6">
                    Access your driver dashboard and manage your rides
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full">Login as Driver</Button>
                    <Button variant="outline" className="w-full">
                      New Driver Registration
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Social Login Options */}
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Or continue with</p>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52ff9096-ae37-4d47-aa31-22201ba3970b.png"
                    alt="Google login icon"
                    className="w-5 h-5 mr-2"
                  />
                  Google
                </Button>
                <Button variant="outline" className="flex-1">
                  <img 
                    src="https://placehold.co/20x20?text=Facebook+F+Logo"
                    alt="Facebook login icon"
                    className="w-5 h-5 mr-2"
                  />
                  Facebook
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms */}
        <p className="text-xs text-gray-600 text-center mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="text-yellow-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-yellow-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
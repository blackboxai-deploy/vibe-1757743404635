import { z } from "zod";

export const bookingSchema = z.object({
  pickup: z.string().min(1, "Pickup location is required"),
  destination: z.string().min(1, "Destination is required"),
  vehicleType: z.enum(["bike", "auto", "cab"], {
    required_error: "Please select a vehicle type",
  }),
  scheduledTime: z.string().optional(),
  phoneNumber: z.string().regex(/^[+]?[1-9][\d]{0,15}$/, "Invalid phone number"),
});

export const authSchema = z.object({
  phoneNumber: z.string().regex(/^[+]?[1-9][\d]{0,15}$/, "Invalid phone number"),
  otp: z.string().length(6, "OTP must be 6 digits").optional(),
});

export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional(),
  emergencyContact: z.string().regex(/^[+]?[1-9][\d]{0,15}$/, "Invalid phone number").optional(),
});

export const driverRegistrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[+]?[1-9][\d]{0,15}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  licenseNumber: z.string().min(5, "Invalid license number"),
  vehicleType: z.enum(["bike", "auto", "cab"]),
  vehicleModel: z.string().min(1, "Vehicle model is required"),
  vehicleNumber: z.string().min(1, "Vehicle number is required"),
  vehicleColor: z.string().min(1, "Vehicle color is required"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type AuthFormData = z.infer<typeof authSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type DriverRegistrationData = z.infer<typeof driverRegistrationSchema>;
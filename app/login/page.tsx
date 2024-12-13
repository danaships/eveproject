import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { Ship } from "lucide-react";
import { GradientBackground } from "@/components/ui/gradient-background";

export const metadata: Metadata = {
  title: "Login - EVE Manager",
  description: "Login to your EVE Manager account using EVE Online SSO",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center">
      <GradientBackground />
      <div className="relative w-full max-w-[350px] space-y-6 px-4">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center space-x-2">
            <Ship className="h-6 w-6" />
            <span className="text-2xl font-bold">EVE Manager</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Login with your EVE Online account to continue
          </p>
        </div>
        <LoginForm />
        <p className="text-center text-sm text-muted-foreground">
          By logging in, you agree to our{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
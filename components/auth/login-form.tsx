"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ship } from "lucide-react";

export function LoginForm() {
  const handleLogin = () => {
    signIn("eve-online", { callbackUrl: "/dashboard" });
  };

  return (
    <Card className="backdrop-blur-sm bg-card/50">
      <div className="p-6">
        <Button
          onClick={handleLogin}
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
        >
          <Ship className="mr-2 h-5 w-5" />
          Login with EVE Online
        </Button>
      </div>
    </Card>
  );
}
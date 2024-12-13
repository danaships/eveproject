"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      // Store the auth code temporarily
      sessionStorage.setItem("eve_auth_code", code);
      router.push("/dashboard");
    }
  }, [code, router]);

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[380px] p-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Authenticating...
          </h1>
          <p className="text-sm text-muted-foreground">
            Please wait while we complete your authentication.
          </p>
        </div>
      </Card>
    </div>
  );
}
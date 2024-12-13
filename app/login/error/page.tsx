import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[380px] p-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Authentication Error
          </h1>
          <p className="text-sm text-muted-foreground">
            There was an error authenticating with EVE Online.
            Please try again or contact support if the issue persists.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Button asChild>
            <Link href="/login">Return to Login</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
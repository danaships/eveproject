import "next-auth";
import { Character } from "./eve";

declare module "next-auth" {
  interface Session {
    user: Character;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    character: Character;
  }
}
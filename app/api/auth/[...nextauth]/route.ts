import NextAuth, { AuthOptions } from "next-auth";
import { EVE_SSO_CONFIG, EVE_SSO_URLS } from "@/lib/auth/config";
import { getCharacterData, fetchCharacterDetails } from "@/lib/auth/eve-sso";

if (!process.env.EVE_CLIENT_ID || !process.env.EVE_CLIENT_SECRET) {
  throw new Error('Missing EVE Online OAuth credentials');
}

export const authOptions: AuthOptions = {
  providers: [
    {
      id: "eve-online",
      name: "EVE Online",
      type: "oauth",
      clientId: process.env.EVE_CLIENT_ID,
      clientSecret: process.env.EVE_CLIENT_SECRET,
      authorization: {
        url: EVE_SSO_URLS.authorize,
        params: {
          scope: EVE_SSO_CONFIG.scopes.join(' '),
          response_type: "code",
        },
      },
      token: EVE_SSO_URLS.token,
      userinfo: {
        async request({ tokens }) {
          const characterData = await getCharacterData(tokens.access_token as string);
          const characterDetails = await fetchCharacterDetails(characterData.CharacterID);
          
          return {
            id: characterData.CharacterID,
            name: characterData.CharacterName,
            corporation_id: characterDetails.corporation_id,
            alliance_id: characterDetails.alliance_id,
          };
        },
      },
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          corporation_id: profile.corporation_id,
          alliance_id: profile.alliance_id,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          character: user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.character;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
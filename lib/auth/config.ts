export const EVE_SSO_CONFIG = {
  clientId: process.env.EVE_CLIENT_ID!,
  clientSecret: process.env.EVE_CLIENT_SECRET!,
  callbackUrl: process.env.EVE_CALLBACK_URL!,
  scopes: [
    'publicData',
    'esi-characters.read_corporation_roles.v1',
    'esi-corporations.read_corporation_membership.v1',
    'esi-corporations.read_structures.v1',
    'esi-assets.read_corporation_assets.v1',
    'esi-characters.read_notifications.v1'
  ]
};

export const EVE_SSO_URLS = {
  authorize: 'https://login.eveonline.com/v2/oauth/authorize',
  token: 'https://login.eveonline.com/v2/oauth/token',
  verify: 'https://login.eveonline.com/oauth/verify',
  esi: 'https://esi.evetech.net'
};
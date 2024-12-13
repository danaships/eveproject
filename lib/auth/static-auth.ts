import { EVE_SSO_CONFIG, EVE_SSO_URLS } from "./config";

export async function initiateEveLogin() {
  const params = new URLSearchParams({
    response_type: 'code',
    redirect_uri: EVE_SSO_CONFIG.callbackUrl,
    client_id: EVE_SSO_CONFIG.clientId,
    scope: EVE_SSO_CONFIG.scopes.join(' '),
    state: generateState(),
  });

  return `${EVE_SSO_URLS.authorize}?${params.toString()}`;
}

export async function handleCallback(code: string) {
  const tokenResponse = await fetch(EVE_SSO_URLS.token, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${EVE_SSO_CONFIG.clientId}:${EVE_SSO_CONFIG.clientSecret}`
      ).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: EVE_SSO_CONFIG.callbackUrl,
    }),
  });

  if (!tokenResponse.ok) {
    throw new Error('Failed to get access token');
  }

  return tokenResponse.json();
}

function generateState() {
  return Math.random().toString(36).substring(2);
}
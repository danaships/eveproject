import { EVE_SSO_URLS } from "./config";

export async function getCharacterData(accessToken: string) {
  const response = await fetch(`${EVE_SSO_URLS.verify}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to verify character');
  }
  
  return response.json();
}

export async function fetchCharacterDetails(characterId: number) {
  const response = await fetch(
    `${EVE_SSO_URLS.esi}/latest/characters/${characterId}/`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch character details');
  }
  
  return response.json();
}
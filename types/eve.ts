export interface Character {
  id: number;
  name: string;
  corporation_id: number;
  alliance_id?: number;
  security_status: number;
  birthday: string;
}

export interface Corporation {
  id: number;
  name: string;
  ticker: string;
  member_count: number;
  alliance_id?: number;
}

export interface Alliance {
  id: number;
  name: string;
  ticker: string;
  executor_corporation_id: number;
}

export interface Subscription {
  id: string;
  plan: 'basic' | 'premium' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired';
  startDate: string;
  endDate: string;
  corporationId: number;
}

export interface User {
  id: string;
  characters: Character[];
  mainCharacterId: number;
  roles: string[];
  corporationId: number;
  allianceId?: number;
  subscription?: Subscription;
}
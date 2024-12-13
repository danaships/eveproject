import { NextResponse } from 'next/server';
import { authOptions } from '../[...nextauth]/route';

export async function GET() {
  return NextResponse.json(authOptions.providers);
}
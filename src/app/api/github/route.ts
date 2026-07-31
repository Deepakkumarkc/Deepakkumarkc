import { NextResponse } from "next/server";
import { fetchGitHubStats } from "@/lib/github";

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Deepakkumarkc";
  const data = await fetchGitHubStats(username);
  return NextResponse.json(data);
}

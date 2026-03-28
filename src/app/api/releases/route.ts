import { NextResponse } from "next/server";

const REPO = "OzanYDZ51/BannerlordCoop";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "CalradiaOnline-Website",
  };
  if (token) {
    headers.Authorization = `token ${token}`;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=20`, {
      headers,
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json({ releases: [], error: `GitHub API ${res.status}` }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({ releases: data });
  } catch {
    return NextResponse.json({ releases: [], error: "Failed to reach GitHub" }, { status: 200 });
  }
}

export interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  assets: { name: string; browser_download_url: string; size: number }[];
}

const REPO = "OzanYDZ51/BannerlordCoop";

export async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      next: { revalidate: 300 },
      headers: { Accept: "application/vnd.github.v3+json" },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getAllReleases(): Promise<GitHubRelease[]> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=10`, {
      next: { revalidate: 300 },
      headers: { Accept: "application/vnd.github.v3+json" },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1048576).toFixed(1) + " MB";
}

/**
 * Convert YouTube URL to embed format
 * Supports:
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtube.com/watch?v=VIDEO_ID
 */
export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;

  // Extract video ID from various YouTube URL formats
  let videoId: string | null = null;

  // Format: https://youtu.be/VIDEO_ID or https://youtu.be/VIDEO_ID?si=...
  if (url.includes('youtu.be/')) {
    const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (match) {
      videoId = match[1];
    }
  }
  // Format: https://www.youtube.com/watch?v=VIDEO_ID
  else if (url.includes('youtube.com/watch')) {
    const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (match) {
      videoId = match[1];
    }
  }
  // Format: https://www.youtube.com/embed/VIDEO_ID
  else if (url.includes('youtube.com/embed/')) {
    const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
    if (match) {
      videoId = match[1];
    }
  }

  if (!videoId) return null;

  return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * Check if URL is a YouTube URL
 */
export function isYouTubeUrl(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url);
}

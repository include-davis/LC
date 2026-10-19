export async function fetchContent(contentType, fallback = []) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/${contentType}?_published=true`,
      { next: { tags: ["cms"] } }
    );
    const data = await res.json();
    if (!data.ok || !data.body) throw new Error(data.error);
    return data.body;
  } catch (e) {
    console.error(`Failed to fetch ${contentType}: ${e.message}`);
    return fallback;
  }
}
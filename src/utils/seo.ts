const DOMAIN = "https://burbankautolocksmith.com";
const DEFAULT_OG_IMAGE = `${DOMAIN}/og-image.png`;

interface SeoMeta {
  title: string;
  description: string;
  slug: string;
  ogImage?: string;
}

function setOrCreate(selector: string, attrs: Record<string, string>) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    const tag = selector.startsWith('link') ? 'link' : 'meta';
    el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      el.setAttribute(k, v);
    }
    document.head.appendChild(el);
  } else {
    for (const [k, v] of Object.entries(attrs)) {
      el.setAttribute(k, v);
    }
  }
}

export function setSeoMeta({ title, description, slug, ogImage }: SeoMeta) {
  document.title = title;
  const url = `${DOMAIN}${slug}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  // Meta description
  setOrCreate('meta[name="description"]', { name: "description", content: description });

  // Canonical
  setOrCreate('link[rel="canonical"]', { rel: "canonical", href: url });

  // Open Graph
  setOrCreate('meta[property="og:title"]', { property: "og:title", content: title });
  setOrCreate('meta[property="og:description"]', { property: "og:description", content: description });
  setOrCreate('meta[property="og:url"]', { property: "og:url", content: url });
  setOrCreate('meta[property="og:image"]', { property: "og:image", content: image });
  setOrCreate('meta[property="og:type"]', { property: "og:type", content: "website" });

  // Twitter Card
  setOrCreate('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  setOrCreate('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  setOrCreate('meta[name="twitter:description"]', { name: "twitter:description", content: description });
  setOrCreate('meta[name="twitter:image"]', { name: "twitter:image", content: image });
}

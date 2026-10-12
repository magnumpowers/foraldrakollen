import type { MetadataRoute } from 'next'

const base = 'https://foraldrakollen.nu'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/guider', '/forskning', '/risker', '/om', '/men-alla-andra'].map((p) => ({
    url: base + p,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.7,
  }))
}

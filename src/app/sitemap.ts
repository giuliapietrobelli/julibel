import type { MetadataRoute } from 'next'
import { designs as echoesOfSiam } from './echoes-of-siam/designs'
import { designs as playfulCats } from './playful-cats/designs'
import { designs as retroCountry } from './retro-country/designs'
import { designs as secretGarden } from './secret-garden/designs'
import { designs as softTide } from './soft-tide/designs'

const BASE_URL = 'https://www.julibelstudio.com'

// Top-level pages linked from the main navigation / homepage.
const staticPaths = [
  '/',
  '/about',
  '/contact',
  '/retro-country',
  '/secret-garden',
  '/dreamy-jungle-nursery',
  '/playful-cats',
  '/echoes-of-siam',
  '/soft-tide',
]

// Collections with individual design pages at /<collection>/<slug>.
const collectionDesigns: Record<string, { slug: string }[]> = {
  'echoes-of-siam': echoesOfSiam,
  'playful-cats': playfulCats,
  'retro-country': retroCountry,
  'secret-garden': secretGarden,
  'soft-tide': softTide,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const designPaths = Object.entries(collectionDesigns).flatMap(([collection, items]) =>
    items.map((d) => `/${collection}/${d.slug}`),
  )

  const paths = Array.from(new Set([...staticPaths, ...designPaths]))

  return paths.map((path) => ({
    url: path === '/' ? BASE_URL : `${BASE_URL}${path}`,
  }))
}

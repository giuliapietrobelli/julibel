export type Design = {
  slug: string
  title: string
  src: string
  alt: string
}

export const designs: Design[] = [
  // Enchanted Woodland
  { slug: 'enchanted-woodland-tapestry-blue', title: 'Enchanted Woodland Secret Garden Tapestry Blue', src: 'https://img.spoonflower.com/c/20365279/p/f/m/7wvgdDEcmrnd1POk1hpEut16RLwNADjNP00xh38JQKNyqtgJfkQ3W-M/Enchanted_Woodland_Secret_Garden_Tapestry_Blue.jpg', alt: 'Enchanted Woodland Secret Garden Tapestry Blue' },
  { slug: 'enchanted-woodland-tapestry-greige', title: 'Enchanted Woodland Secret Garden Tapestry Greige', src: 'https://img.spoonflower.com/c/20478374/p/f/m/16i3JJcDWMeN0EGdGmOcjJb-hBHNyhWNxlJYWw4d8FN6uz2PnK92-mA/Enchanted_Woodland_Secret_Garden_Tapestry_Greige.jpg', alt: 'Enchanted Woodland Secret Garden Tapestry Greige' },
  { slug: 'enchanted-woodland-tapestry-deep-green', title: 'Enchanted Woodland Secret Garden Tapestry Deep Green', src: 'https://img.spoonflower.com/c/20365313/p/f/m/bleKAwQcY5L2UC793KE0uyA-a9x-cHAY5bTXebYb4w26UCwi9TWbgJw/Enchanted_Woodland_Secret_Garden_Tapestry_Deep_Green.jpg', alt: 'Enchanted Woodland Secret Garden Tapestry Deep Green' },
  { slug: 'ditsy-enchanted-garden-dusky-blue', title: 'Ditsy Enchanted Garden in Dusky Blue', src: 'https://img.spoonflower.com/c/20454271/p/f/m/4BJKCunA-zQI-zCJeU3A9rsyt4K7EoH5YU5lfzS6E1E5gOGVcF2k/Ditsy_Enchanted_Garden_in_Dusky_Blue.jpg', alt: 'Ditsy Enchanted Garden in Dusky Blue' },
  // Herbaceous Floral & Berries
  { slug: 'herbaceous-floral-berries-pink-green', title: 'Herbaceous Floral & Berries Cottagecore Botanical - Pink Green', src: 'https://img.spoonflower.com/c/19544214/p/f/m/t6AQQ1oKBFHu2uq9dsMKuYGO4OxOtjO6O6VkHe22axFr9_GMQpr4/Herbaceous_Floral_%26_Berries_Cottagecore_Botanical_Pattern_-_Pink_Green.jpg', alt: 'Herbaceous Floral and Berries Cottagecore Botanical Pink Green' },
  { slug: 'herbaceous-floral-berries-multi', title: 'Herbaceous Floral & Berries Cottagecore Botanical - Multi', src: 'https://img.spoonflower.com/c/19538119/p/f/m/Hk15DhhHOMsavFfAO3NGZ_7U8ME-s6QVyKnxKGzXt-PiykRfaHx5/Herbaceous_Floral_%26_Berries_Cottagecore_Botanical_Pattern_-_Multi.jpg', alt: 'Herbaceous Floral and Berries Cottagecore Botanical Multi' },
  { slug: 'herbaceous-floral-berries-pink-orange', title: 'Herbaceous Floral & Berries - Pink Orange', src: 'https://img.spoonflower.com/c/19538066/p/f/m/Phr_nd2F8MXhlkuxP9XBadhwV-w0HBb3C4SuhkSAH_jiXfNTSH5z/Herbaceous_Floral_%26_Berries_-_Pink_Orange.jpg', alt: 'Herbaceous Floral and Berries Pink Orange' },
  // Roses Garden
  { slug: 'roses-garden-green', title: 'Roses Garden - Green', src: 'https://img.spoonflower.com/c/18656099/p/f/m/dLrxQYwCg4873Xqai459MVhCz6M7QQJvOMD9vQzqFUCbAJTKyMcW/Roses_Garden_-_Green.jpg', alt: 'Roses Garden Green' },
  { slug: 'roses-garden-pink', title: 'Roses Garden - Pink', src: 'https://img.spoonflower.com/c/18656069/p/f/m/dLrxQYwCg4873XqVi459MVhCz6M7QQJvOMD9vQzqFUCbAJTKyLUn/Roses_Garden_-_Pink.jpg', alt: 'Roses Garden Pink' },
  { slug: 'roses-garden-orange-green', title: 'Roses Garden - Orange & Green', src: 'https://img.spoonflower.com/c/18644287/p/f/m/YBxb0vLPoFacOQmq4UboamAIWBOh6cie7Xmah3aoXlCxG6LrEuulIjp06g/Roses_Garden_-_Orange_%26_green.jpg', alt: 'Roses Garden Orange and Green' },
  { slug: 'roses-garden-orange', title: 'Roses Garden - Orange', src: 'https://img.spoonflower.com/c/18644279/p/f/m/PLfLJbQyEarTYiMNPKEILv1k1EKZ4ptIQYr9j24XE7kJvoyf8c_k/Roses_Garden_-_Orange.jpg', alt: 'Roses Garden Orange' },
  // Secret Garden
  { slug: 'secret-garden-white', title: 'Secret Garden - White', src: 'https://img.spoonflower.com/c/18644274/p/f/m/2Ml1mST7sXfJSUGsF8W7MsvUT1QN921egl872oyAmG5QhyRHPHKJ/Secret_Garden_-_White.jpg', alt: 'Secret Garden White' },
  { slug: 'secret-garden-pink', title: 'Secret Garden - Pink', src: 'https://img.spoonflower.com/c/18644263/p/f/m/8Bgsk_iztEUgLKSXG6ZRz8I1UdEmsC593nNxlA9D21mae3d3a6l-/Secret_Garden_-_pink.jpg', alt: 'Secret Garden Pink' },
  { slug: 'secret-garden-green', title: 'Secret Garden - Green', src: 'https://img.spoonflower.com/c/18644249/p/f/m/1KKMCTuIbEliXBFLS3CZP57mtWyZZ2ZwYU6UOq0Df5dJKGIV3QcB/Secret_Garden_-_green.jpg', alt: 'Secret Garden Green' },
  // Other
  { slug: 'ditsy-botanicals-pink-orange-dark-green', title: 'Ditsy Botanicals Pink Orange on Dark Green', src: 'https://img.spoonflower.com/c/18587761/p/f/m/W3zdwE6iVMgukA3iTOEbvK3BAvoxs2bIry0-XHMriS8Xl2WN0Mt1/Ditsy_Botanicals_Pink_Orange_and_on_Dark_Green.jpg', alt: 'Ditsy Botanicals Pink Orange on Dark Green' },
  { slug: 'victorian-leisure-remix', title: 'Victorian Leisure Remix', src: 'https://img.spoonflower.com/c/19488526/p/f/m/xbxNGLvvSAnpC7OswmZMx552CT5EXcH0XlR7KnPPhu8M8_1kMH1x/Victorian_Leisure_Remix.jpg', alt: 'Victorian Leisure Remix' },
]

import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

export type MockupImage = {
  src: string
  width: number
  height: number
}

export async function getMockups(collection: string): Promise<MockupImage[]> {
  const dir = path.join(process.cwd(), 'public', collection, 'mockups')
  try {
    const files = fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(f))
      .sort()
    return await Promise.all(
      files.map(async (f) => {
        try {
          const { width = 800, height = 600 } = await sharp(path.join(dir, f)).metadata()
          return { src: `/${collection}/mockups/${f}`, width, height }
        } catch {
          return { src: `/${collection}/mockups/${f}`, width: 800, height: 600 }
        }
      })
    )
  } catch {
    return []
  }
}

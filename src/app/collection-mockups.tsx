import Image from 'next/image'
import type { MockupImage } from '@/lib/getMockups'

function altFromSrc(src: string): string {
  const name = src.split('/').pop() ?? ''
  return name.replace(/\.[^.]+$/, '').replace(/^\d+[-_]?/, '').replace(/[-_]+/g, ' ').trim()
}

type SpanType = 'featured' | 'tall' | 'normal'

// Desktop (md+) span classes only — mobile is always col-span-1 row-span-1
const CARD_CLASSES: Record<SpanType, string> = {
  featured: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
  tall:     'col-span-1 row-span-1 md:row-span-3',
  normal:   'col-span-1 row-span-1 md:row-span-2',
}

// Grid cell sizes in the 3-column desktop layout
const DESKTOP_SIZE: Record<SpanType | 'small', [number, number]> = {
  featured: [2, 2],
  tall:     [1, 3],
  normal:   [1, 2],
  small:    [1, 1],
}

function assignSpans(images: MockupImage[]): SpanType[] {
  let tallAssigned = false
  return images.map((img, i) => {
    if (i === 0) return 'featured'
    if (!tallAssigned && img.width / img.height < 0.85) {
      tallAssigned = true
      return 'tall'
    }
    return 'normal'
  })
}

// Simulates CSS grid-auto-flow: row dense to count remaining gaps after placing all images.
// The palette tile count returned fills those gaps exactly.
function countGaps(imageSpans: SpanType[], cols: number): number {
  const ROWS = 24
  const grid: boolean[][] = Array.from({ length: ROWS }, () => Array(cols).fill(false))

  const place = (cs: number, rs: number) => {
    for (let r = 0; r <= ROWS - rs; r++) {
      for (let c = 0; c <= cols - cs; c++) {
        let ok = true
        scan: for (let dr = 0; dr < rs; dr++)
          for (let dc = 0; dc < cs; dc++)
            if (grid[r + dr][c + dc]) { ok = false; break scan }
        if (ok) {
          for (let dr = 0; dr < rs; dr++)
            for (let dc = 0; dc < cs; dc++)
              grid[r + dr][c + dc] = true
          return
        }
      }
    }
  }

  for (const s of imageSpans) {
    const [cs, rs] = DESKTOP_SIZE[s]
    place(cs, rs)
  }

  let lastRow = 0
  for (let r = 0; r < ROWS; r++) if (grid[r].some(Boolean)) lastRow = r

  let gaps = 0
  for (let r = 0; r <= lastRow; r++)
    for (let c = 0; c < cols; c++)
      if (!grid[r][c]) gaps++

  return gaps
}

export default function CollectionMockups({
  images,
  palette = [],
}: {
  images: MockupImage[]
  palette?: string[]
}) {
  if (images.length === 0) return null

  const COLS = 3
  const spans = assignSpans(images)
  const gapCount = palette.length > 0 ? Math.min(countGaps(spans, COLS), palette.length) : 0
  const fillers = palette.slice(0, gapCount)

  return (
    <section className="pt-16 pb-[120px]">
      <div className="container">
        <div className="px-8 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 sm:auto-rows-[220px] md:auto-rows-[120px] grid-flow-row-dense">
            {images.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-[10px] ${CARD_CLASSES[spans[i]]}`}
              >
                <Image
                  src={img.src}
                  alt={altFromSrc(img.src)}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 35vw"
                  className="w-full h-auto sm:h-full sm:object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ))}
            {fillers.map((color, i) => (
              <div
                key={`filler-${i}`}
                className="hidden md:block col-span-1 row-span-1 rounded-[10px]"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

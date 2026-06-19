"use client"
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import type { MockupImage } from '@/lib/getMockups'

function altFromSrc(src: string): string {
  const name = src.split('/').pop() ?? ''
  return name.replace(/\.[^.]+$/, '').replace(/^\d+[-_]?/, '').replace(/[-_]+/g, ' ').trim()
}

type SpanType = 'featured' | 'tall' | 'normal' | 'pattern'

const CARD_CLASSES: Record<SpanType, string> = {
  featured: 'col-span-1 row-span-1 md:col-span-4 md:row-span-4',
  tall:     'col-span-1 row-span-1 md:col-span-2 md:row-span-3',
  normal:   'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
  pattern:  'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
}

const DESKTOP_SIZE: Record<SpanType | 'small', [number, number]> = {
  featured: [4, 4],
  tall:     [2, 3],
  normal:   [2, 2],
  pattern:  [2, 1],
  small:    [1, 1],
}

function countGaps(spans: (SpanType | 'small')[]): number {
  const COLS = 6, ROWS = 24
  const grid: boolean[][] = Array.from({ length: ROWS }, () => Array(COLS).fill(false))
  const place = (cs: number, rs: number) => {
    for (let r = 0; r <= ROWS - rs; r++)
      for (let c = 0; c <= COLS - cs; c++) {
        let ok = true
        scan: for (let dr = 0; dr < rs; dr++)
          for (let dc = 0; dc < cs; dc++)
            if (grid[r+dr][c+dc]) { ok = false; break scan }
        if (ok) {
          for (let dr = 0; dr < rs; dr++)
            for (let dc = 0; dc < cs; dc++)
              grid[r+dr][c+dc] = true
          return
        }
      }
  }
  for (const s of spans) place(...DESKTOP_SIZE[s])
  let lastRow = 0
  for (let r = 0; r < ROWS; r++) if (grid[r].some(Boolean)) lastRow = r
  let gaps = 0
  for (let r = 0; r <= lastRow; r++)
    for (let c = 0; c < COLS; c++)
      if (!grid[r][c]) gaps++
  return gaps
}

function assignSpans(
  images: MockupImage[],
  tallAll = false,
  overrides: Partial<Record<number, SpanType>> = {}
): SpanType[] {
  let tallAssigned = false
  return images.map((img, i) => {
    if (overrides[i] !== undefined) return overrides[i]!
    if (i === 0) return 'featured'
    const ar = img.width / img.height
    if ((tallAll || !tallAssigned) && ar < 0.85) { tallAssigned = true; return 'tall' }
    if (ar >= 0.85 && ar <= 1.15) return 'pattern'
    return 'normal'
  })
}

type GridItem =
  | { kind: 'image'; img: MockupImage; span: SpanType; idx: number }
  | { kind: 'palette'; color: string }

export default function CollectionMockups({
  images,
  palette = [],
  tallAll = false,
  spanOverrides = {},
}: {
  images: MockupImage[]
  palette?: string[]
  tallAll?: boolean
  spanOverrides?: Partial<Record<number, SpanType>>
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | undefined>(undefined)
  const [activeIndex, setActiveIndex] = useState(0)
  const [fading, setFading] = useState(false)

  // Sync displayed image when lightbox opens
  useEffect(() => {
    if (lightboxIndex !== undefined) {
      setActiveIndex(lightboxIndex)
      setFading(false)
    }
  }, [lightboxIndex])

  const navigate = useCallback((dir: 1 | -1) => {
    setFading(true)
    setTimeout(() => {
      setActiveIndex(prev => (prev + dir + images.length) % images.length)
      setFading(false)
    }, 300)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === undefined) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, navigate])

  if (images.length === 0) return null

  const spans = assignSpans(images, tallAll, spanOverrides)

  // Step 1: interleave 1 palette tile after every 2nd image
  const interleaved: GridItem[] = []
  let palIdx = 0
  for (let i = 0; i < images.length; i++) {
    interleaved.push({ kind: 'image', img: images[i], span: spans[i], idx: i })
    if (palette.length > 0 && (i + 1) % 2 === 0 && palIdx < palette.length) {
      interleaved.push({ kind: 'palette', color: palette[palIdx++] })
    }
  }
  // Step 2: add only as many end tiles as there are remaining gaps
  const gapCount = palette.length > 0
    ? countGaps(interleaved.map(item => item.kind === 'image' ? item.span : 'small'))
    : 0
  const items = [...interleaved]
  for (let i = 0; i < gapCount && palIdx < palette.length; i++) {
    items.push({ kind: 'palette', color: palette[palIdx++] })
  }

  const active = images[activeIndex]

  return (
    <section className="pt-16 pb-8">
      <div className="container">
        <div className="px-8 md:px-12">
          <Dialog
            open={lightboxIndex !== undefined}
            onOpenChange={(open) => { if (!open) setLightboxIndex(undefined) }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 sm:auto-rows-[220px] md:auto-rows-[120px] grid-flow-row-dense">
              {items.map((item, i) =>
                item.kind === 'image' ? (
                  <div
                    key={`img-${item.idx}`}
                    className={`group relative cursor-pointer overflow-hidden rounded-sm ${CARD_CLASSES[item.span]}`}
                    onClick={() => setLightboxIndex(item.idx)}
                  >
                    <Image
                      src={item.img.src}
                      alt={altFromSrc(item.img.src)}
                      width={item.img.width}
                      height={item.img.height}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 35vw"
                      className="w-full h-auto sm:h-full sm:object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />
                  </div>
                ) : (
                  <div
                    key={`pal-${i}`}
                    className="hidden md:block col-span-1 row-span-1 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                )
              )}
            </div>

            <DialogContent className="max-w-4xl w-[92vw] bg-transparent border-0 shadow-none p-8 [&>button]:text-white/70 [&>button]:hover:text-white">
              <div className="relative flex items-center justify-center min-h-[55vh]">
                <div className={`transition-all duration-300 ease-in-out ${fading ? 'opacity-0 scale-[0.97]' : 'opacity-100 scale-100'}`}>
                  <Image
                    src={active.src}
                    alt={altFromSrc(active.src)}
                    width={active.width}
                    height={active.height}
                    style={{ maxHeight: '72vh', width: 'auto', maxWidth: '100%', height: 'auto' }}
                    priority
                  />
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => navigate(-1)}
                      className="absolute -left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors text-white"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={22} strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={() => navigate(1)}
                      className="absolute -right-14 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors text-white"
                      aria-label="Next image"
                    >
                      <ChevronRight size={22} strokeWidth={1.5} />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <p className="text-center text-xs tracking-widest text-white/50 mt-5">
                  {activeIndex + 1} / {images.length}
                </p>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

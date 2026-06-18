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

type SpanType = 'featured' | 'tall' | 'normal'

const CARD_CLASSES: Record<SpanType, string> = {
  featured: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
  tall:     'col-span-1 row-span-1 md:row-span-3',
  normal:   'col-span-1 row-span-1 md:row-span-2',
}

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

  const COLS = 3
  const spans = assignSpans(images)
  const gapCount = palette.length > 0 ? Math.min(countGaps(spans, COLS), palette.length) : 0
  const fillers = palette.slice(0, gapCount)
  const active = images[activeIndex]

  return (
    <section className="pt-16 pb-8">
      <div className="container">
        <div className="px-8 md:px-12">
          <Dialog
            open={lightboxIndex !== undefined}
            onOpenChange={(open) => { if (!open) setLightboxIndex(undefined) }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 sm:auto-rows-[220px] md:auto-rows-[120px] grid-flow-row-dense">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`group relative cursor-pointer overflow-hidden rounded-sm ${CARD_CLASSES[spans[i]]}`}
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={img.src}
                    alt={altFromSrc(img.src)}
                    width={img.width}
                    height={img.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 35vw"
                    className="w-full h-auto sm:h-full sm:object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />
                </div>
              ))}
              {fillers.map((color, i) => (
                <div
                  key={`filler-${i}`}
                  className="hidden md:block col-span-1 row-span-1 rounded-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
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

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Slide01Title from './slides/Slide01Title'
import Slide02Idea from './slides/Slide02Idea'
import Slide03Value from './slides/Slide03Value'
import Slide04Revenue from './slides/Slide04Revenue'
import Slide05Prizes from './slides/Slide05Prizes'
import Slide06Budget from './slides/Slide06Budget'

const SLIDES = [Slide01Title, Slide02Idea, Slide03Value, Slide04Revenue, Slide05Prizes, Slide06Budget]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dir, setDir] = useState(1)
  const last = SLIDES.length - 1

  const go = useCallback((delta: number) => {
    setCurrentSlide((s) => {
      const next = Math.min(last, Math.max(0, s + delta))
      if (next !== s) setDir(delta)
      return next
    })
  }, [last])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const Slide = SLIDES[currentSlide]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#05070d]">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 60 * dir }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 * dir }}
          transition={{ duration: 0.25 }}
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-[#05070d] via-[#05070d]/90 to-transparent px-6 pb-5 pt-10">
        <button onClick={() => go(-1)} disabled={currentSlide === 0} aria-label="Previous slide"
          className="flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:opacity-30">
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <div className="flex items-center gap-2" role="tablist">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => { setDir(i > currentSlide ? 1 : -1); setCurrentSlide(i) }} aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-cyan-300' : 'w-2 bg-white/25 hover:bg-white/50'}`} />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={currentSlide === last} aria-label="Next slide"
          className="flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:opacity-30">
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

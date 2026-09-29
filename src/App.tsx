import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Slide01Title from './slides/Slide01Title'
import Slide02About from './slides/Slide02About'
import Slide03Idea from './slides/Slide03Idea'
import Slide04Prizes from './slides/Slide04Prizes'
import Slide05Budget from './slides/Slide05Budget'
import Slide06Roi from './slides/Slide06Roi'
import Slide07Appendix from './slides/Slide07Appendix'

const SLIDES = [Slide01Title, Slide02About, Slide03Idea, Slide04Prizes, Slide05Budget, Slide06Roi, Slide07Appendix]

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
    <div className="relative h-dvh w-full overflow-hidden bg-[#151211]">
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

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-[#151211] via-[#151211]/90 to-transparent px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-10 sm:px-8">
        <button onClick={() => go(-1)} disabled={currentSlide === 0} aria-label="Previous slide"
          className="flex items-center gap-1 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-rose-300 hover:text-rose-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-300 disabled:opacity-30">
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <div className="flex items-center gap-2" role="tablist">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => { setDir(i > currentSlide ? 1 : -1); setCurrentSlide(i) }} aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-rose-300' : 'w-2 bg-white/25 hover:bg-white/50'}`} />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={currentSlide === last} aria-label="Next slide"
          className="flex items-center gap-1 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-rose-300 hover:text-rose-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-300 disabled:opacity-30">
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

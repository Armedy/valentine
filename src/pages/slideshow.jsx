import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const IMG_PATHS = [
  '/photos/1.jpg',
  '/photos/2.jpg',
  '/photos/3.jpg',
  '/photos/4.jpg',
  '/photos/5.jpg',
  '/photos/6.jpg',
  '/photos/7.jpg',
  '/photos/8.jpg',
  '/photos/9.jpg',
  '/photos/10.jpg',

]

const AUTOPLAY_MS = 3000
const SWIPE_THRESHOLD = 40 // px

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)
  const touchStartX = useRef(null)

  const next = () => setIndex((i) => (i + 1) % IMG_PATHS.length)
  const prev = () => setIndex((i) => (i - 1 + IMG_PATHS.length) % IMG_PATHS.length)

  // autoplay with pause when tab hidden
  useEffect(() => {
    const start = () => {
      clear()
      timerRef.current = setInterval(next, AUTOPLAY_MS)
    }
    const clear = () => timerRef.current && clearInterval(timerRef.current)

    start()
    const onVisibility = () => (document.hidden ? clear() : start())
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      clear()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  // touch/swipe handlers (mobile)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return
    const diff = e.touches[0].clientX - touchStartX.current
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      diff < 0 ? next() : prev()
      touchStartX.current = null
    }
  }
  const onTouchEnd = () => {
    touchStartX.current = null
  }

  return (
    <main className="min-h-dvh bg-gradient-to-b from-rose-50 to-pink-50 text-rose-900 flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-sm text-rose-700 hover:text-rose-900 underline">
          ← Back
        </Link>
        <h1 className="font-display text-xl sm:text-2xl">My Madam Ji 💖</h1>
        <div className="w-10" /> {/* spacer */}
      </header>

      {/* Slideshow */}
      <section
        className="flex-1 flex items-center justify-center px-2 pb-6"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-3xl">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            {/* Image */}
            <img
              key={IMG_PATHS[index]}
              src={IMG_PATHS[index]}
              alt={`Slide ${index + 1}`}
              className="w-full h-[70dvh] sm:h-[70vh] object-cover select-none"
              loading="eager" // first loads fast; others are preloaded below
            />

            {/* Prev/Next buttons (tap-friendly) */}
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-rose-700 rounded-full p-2 sm:p-3 shadow"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-rose-700 rounded-full p-2 sm:p-3 shadow"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
              {IMG_PATHS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={
                    'h-2 w-2 rounded-full transition ' +
                    (i === index ? 'bg-rose-600 scale-110' : 'bg-rose-300 hover:bg-rose-400')
                  }
                />
              ))}
            </div>
          </div>

          {/* Caption / hint */}
          <p className="mt-3 text-center text-sm text-rose-700/80">
            Swipe on mobile • Click ‹ › on desktop
          </p>
        </div>
      </section>

      {/* Preload next image for smoother transitions */}
      <link rel="preload" as="image" href={IMG_PATHS[(index + 1) % IMG_PATHS.length]} />
    </main>
  )
}
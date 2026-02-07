import { Link } from "react-router-dom";

/**
 * Home page – Rose Day wish
 * - Mobile-first layout
 * - Quote + photo area
 * - CTA to /photos
 */
export default function Page() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-rose-50 via-pink-50 to-white text-rose-900 flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-4">
        <h1 className="font-display text-2xl sm:text-3xl">
          Happy <span className="text-rose-600">Rose Day</span> 🌹
        </h1>
        <nav className="flex items-center gap-3">
          <Link
            to="/photos"
            className="text-sm sm:text-base text-rose-700 hover:text-rose-900 underline"
            aria-label="View the photo slideshow"
          >
            View Photos
          </Link>
        </nav>
      </header>

      {/* Hero / greeting */}
      <section className="px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-sm font-medium">
            7 February — Rose Day
          </p>

          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            A rose for you, my beautiful Madam Ji 💘
          </h2>

          <p className="mt-3 text-rose-700/90 text-base sm:text-lg">
            May every petal whisper how much you mean to me—today and always.
          </p>

         
        </div>
      </section>

      {/* Quote + Photo area */}
      <section
        id="wish"
        className="px-4 md:px-6 lg:px-8 mt-10 pb-12 flex-1"
        aria-labelledby="rose-wish-title"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Photo card */}
          <figure className="rounded-2xl overflow-hidden bg-white shadow">
            {/* 
              Photo placeholder:
              - Put a file at /public/rose.jpg
              - OR change the src below to any path you want
            */}
            <img
              src="/photos/9.jpg"
              alt="Our rose day memory"
              className="w-full h-[38dvh] sm:h-[48vh] object-cover"
            />
            <figcaption className="p-3 text-center text-sm text-rose-700/80">
            </figcaption>
          </figure>

          {/* Quote card */}
          <div className="rounded-2xl bg-white shadow p-5 md:p-7 flex flex-col justify-center">
            <h3
              id="rose-wish-title"
              className="font-display text-2xl sm:text-3xl text-rose-800"
            >
              A Wish for You 🌹
            </h3>
            <blockquote className="mt-4 border-l-4 border-rose-300 pl-4 italic text-rose-900/90">
              “Love is the rose that blooms in the heart—tended by kindness,
              watered with time, and brightened by your smile.”
            </blockquote>
            <p className="mt-5 text-rose-700/90">
              With every rose I gift, I promise a little more care, a little
              more laughter, and a lot more love—today and forever.
            </p>

            <div className="mt-6">
              <Link
                to="/photos"
                className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-2.5 text-white shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
                aria-label="Go to the photo slideshow"
              >
                Explore Your Photos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6">
        <p className="text-center text-sm text-rose-700/70">
          Made with <span role="img" aria-label="heart">❤️</span> by your Sir Ji for Rose Day
        </p>
      </footer>
    </main>
  );
}
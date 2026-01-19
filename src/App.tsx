import { useState, useEffect } from 'react'

function TypingText({ 
  text, 
  delay = 0,
  showCursor = false 
}: { 
  text: string
  delay?: number
  showCursor?: boolean
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, 40)
      return () => clearTimeout(timeout)
    } else {
      setDone(true)
    }
  }, [displayedText, text, started])

  return (
    <>
      {displayedText}
      {showCursor && done && (
        <span className="inline-block w-[2px] h-4 ml-0.5 bg-neutral-600 dark:bg-neutral-400 animate-pulse" />
      )}
    </>
  )
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggle = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <button
      onClick={toggle}
      className="text-sm text-neutral-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
      aria-label="Toggle theme"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  )
}

function App() {
  return (
    <main className="h-screen overflow-hidden bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors">
      <div className="relative mx-auto flex h-screen max-w-2xl flex-col justify-center px-6 py-12">
        
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-start justify-between">
            <h1 className="text-base font-medium tracking-tight">
              David K. Johansson
            </h1>
            <ThemeToggle />
          </div>
          <p className="mt-1 text-sm text-neutral-400">
            16 y/o · Ingarö, Sweden
          </p>
          <p className="mt-2 text-base text-neutral-500">
            Growth & Engineering @{" "}
            <a
              href="https://strawberrybrowser.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-2 transition-colors hover:text-black dark:hover:text-white hover:decoration-black dark:hover:decoration-white"
            >
              Strawberry
            </a>
          </p>
        </header>

        {/* Bio */}
        <section className="mb-8">
          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            <TypingText text="Polymath/got, ex-athlete and music producer." />
            <br />
            <span>The human equivalent of </span>
            <a
              href="https://en.wikipedia.org/wiki/Lightning_McQueen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-2 transition-colors hover:text-black dark:hover:text-white hover:decoration-black dark:hover:decoration-white"
            >
              Lightning McQueen
            </a>
            <span>.</span>
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <div className="relative space-y-0">
            {/* Strawberry - Current */}
            <div className="relative flex items-center gap-4">
              <div className="relative z-10">
                <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-black dark:bg-white opacity-75" />
                <div className="relative h-2 w-2 rounded-full bg-black dark:bg-white" />
              </div>
              <div className="flex flex-1 items-baseline">
                <a
                  href="https://strawberrybrowser.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-28 text-base text-neutral-600 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-2 transition-colors hover:text-black dark:hover:text-white hover:decoration-black dark:hover:decoration-white"
                >
                  Strawberry
                </a>
                <span className="w-20 text-sm text-neutral-400">
                  
                </span>
                <span className="ml-auto text-sm text-neutral-400">
                  Builder
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* About */}
        <section className="mb-8">
          <div className="relative space-y-0">
            <div className="absolute left-1 top-2 h-[calc(100%-16px)] w-px bg-neutral-200 dark:bg-neutral-700" />
            
            <div className="relative flex items-center gap-4 pb-3">
              <div className="relative z-10 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              <span className="text-base text-neutral-600 dark:text-neutral-400">
                WR/NR holder.
              </span>
            </div>
            
            <div className="relative flex items-center gap-4 pb-3">
              <div className="relative z-10 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              <span className="text-base text-neutral-600 dark:text-neutral-400">
                Top 3 GeoGuessr.
              </span>
            </div>
            
            <div className="relative flex items-center gap-4">
              <div className="relative z-10 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              <span className="text-base text-neutral-600 dark:text-neutral-400">
                School Speedrunner.
              </span>
            </div>
          </div>
        </section>

        {/* Most Impressive Things */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
            Most Impressive thing done
          </h2>
          <div className="relative space-y-0">
            <div className="relative flex items-center gap-4">
              <div className="relative z-10 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              <span className="text-base text-neutral-600 dark:text-neutral-400">
                Grew a product design agency to $10K/month with 500K+ views in 4 months.
              </span>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="mt-auto">
          <ul className="flex gap-6 text-base">
            <li>
              <a
                href="https://linkedin.com/in/dkjo8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dkjo08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dkjo8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default App

import { useEffect, useState, type MouseEvent } from 'react'
import './TransformationIntro.css'

type Props = {
  onComplete: () => void
}

type Phase = 'idle' | 'stars' | 'moon' | 'ribbon' | 'chant' | 'burst'

const SEQUENCE: { id: Exclude<Phase, 'idle'>; duration: number }[] = [
  { id: 'stars', duration: 700 },
  { id: 'moon', duration: 1100 },
  { id: 'ribbon', duration: 1100 },
  { id: 'chant', duration: 1300 },
  { id: 'burst', duration: 800 },
]

export default function TransformationIntro({ onComplete }: Props) {
  const [started, setStarted] = useState(false)
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [fading, setFading] = useState(false)

  const phase: Phase = started
    ? (SEQUENCE[phaseIndex]?.id ?? 'burst')
    : 'idle'

  useEffect(() => {
    if (!started) return

    if (phaseIndex >= SEQUENCE.length) {
      setFading(true)
      const done = window.setTimeout(onComplete, 650)
      return () => window.clearTimeout(done)
    }

    const timer = window.setTimeout(() => {
      setPhaseIndex((i) => i + 1)
    }, SEQUENCE[phaseIndex].duration)

    return () => window.clearTimeout(timer)
  }, [started, phaseIndex, onComplete])

  const start = () => {
    if (started || fading) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setFading(true)
      window.setTimeout(onComplete, 280)
      return
    }

    setStarted(true)
  }

  const skip = (e: MouseEvent) => {
    e.stopPropagation()
    setFading(true)
    window.setTimeout(onComplete, 350)
  }

  const showMoon = phase !== 'idle' && phase !== 'stars'
  const showRibbons = phase === 'ribbon' || phase === 'chant' || phase === 'burst'
  const showSparkles = showRibbons
  const showChant = phase === 'chant' || phase === 'burst'
  const showBurst = phase === 'burst' || fading

  return (
    <div
      className={`intro ${fading ? 'intro--fade' : ''} ${started ? 'intro--playing' : 'intro--await'}`}
      role="dialog"
      aria-label="Transformation intro"
      aria-modal="true"
    >
      <button
        type="button"
        className="intro__stage"
        onClick={start}
        disabled={started || fading}
        aria-label={started ? 'Transformation in progress' : 'Click to transform'}
      >
        <div className="intro__sky" aria-hidden="true">
          {Array.from({ length: 14 }, (_, i) => (
            <span
              key={i}
              className="intro__star"
              style={{
                left: `${(i * 41) % 100}%`,
                top: `${(i * 59) % 100}%`,
                animationDelay: `${(i % 7) * 0.28}s`,
                ['--size' as string]: `${1.5 + (i % 2)}px`,
              }}
            />
          ))}
        </div>

        <div
          className={`intro__moon ${
            phase === 'idle' ? 'intro__moon--idle' : showMoon ? 'intro__moon--visible' : ''
          }`}
          aria-hidden="true"
        >
          <div className="intro__crescent" />
        </div>

        <div className={`intro__ribbons ${showRibbons ? 'intro__ribbons--active' : ''}`} aria-hidden="true">
          <span className="intro__ribbon intro__ribbon--a" />
          <span className="intro__ribbon intro__ribbon--b" />
        </div>

        <div className={`intro__sparkles ${showSparkles ? 'intro__sparkles--active' : ''}`} aria-hidden="true">
          {Array.from({ length: 8 }, (_, i) => (
            <span
              key={i}
              className="intro__sparkle"
              style={{
                ['--angle' as string]: `${i * 45}deg`,
                ['--dist' as string]: `${95 + (i % 3) * 18}px`,
                animationDelay: `${(i % 4) * 0.12}s`,
              }}
            />
          ))}
        </div>

        {!started && (
          <p className="intro__prompt">
            <span className="intro__prompt-line">Click to transform</span>
            <span className="intro__prompt-hint">tap anywhere</span>
          </p>
        )}

        <p className={`intro__chant ${showChant ? 'intro__chant--visible' : ''}`}>
          Moonlight, awaken
          <span>Adila Biswas</span>
        </p>

        <div className={`intro__burst ${showBurst ? 'intro__burst--active' : ''}`} aria-hidden="true" />
      </button>

      <button type="button" className="intro__skip" onClick={skip}>
        Skip
      </button>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import type { SyntheticEvent } from 'react'
import introVideo from '../vedio/mov vedio .mp4'
import introPoster from '../vedio/intro-poster.jpg'

// Shown once per browser tab session (sessionStorage, not localStorage) — a
// refresh within the same tab won't replay it, but a new tab/window will.
const SESSION_KEY = 'ag-splash-shown'
// The video ends on the same frame the page background starts on, so over its
// last seconds it is restyled to match the background canvas before fading out.
const ENDING_LEAD_S = 2.4
const FADE_MS = 1400
// If playback hasn't started by then (slow mobile network, or autoplay blocked
// e.g. iPhone Low Power Mode), run the hello animation over the poster frame
// instead, so the visitor never waits on a black screen.
const READY_FALLBACK_MS = 2500
const NO_VIDEO_DURATION_MS = 3600

export default function SplashScreen() {
  const [show] = useState(() => !sessionStorage.getItem(SESSION_KEY))
  const [ready, setReady] = useState(false)
  // fallback: the timer drives the splash (poster stays visible); videoFailed: the file itself errored.
  const [fallback, setFallback] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [ending, setEnding] = useState(false)
  const [out, setOut] = useState(false)
  const [done, setDone] = useState(!show)
  const dismissedRef = useRef(!show)
  const timersRef = useRef<number[]>([])
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const clearTimers = () => {
    timersRef.current.forEach(window.clearTimeout)
    timersRef.current.length = 0
  }

  const dismiss = () => {
    if (dismissedRef.current) return
    dismissedRef.current = true
    clearTimers()
    setEnding(true)
    setOut(true)
    document.body.style.overflow = ''
    window.setTimeout(() => setDone(true), FADE_MS)
  }

  const startFallback = (hideVideo: boolean) => {
    if (hideVideo) setVideoFailed(true)
    setFallback(true)
    setReady(true)
    timersRef.current.push(window.setTimeout(dismiss, NO_VIDEO_DURATION_MS))
  }

  useEffect(() => {
    if (!show) return
    sessionStorage.setItem(SESSION_KEY, '1')
    document.body.style.overflow = 'hidden'

    // React's `muted` prop alone isn't always applied before autoplay is
    // evaluated (notably on iOS Safari), so force it on the element and retry play().
    const v = videoRef.current
    if (v) {
      v.muted = true
      v.defaultMuted = true
      v.play().catch(() => {})
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReady(true)
      timersRef.current.push(window.setTimeout(dismiss, 500))
    } else {
      timersRef.current.push(window.setTimeout(() => startFallback(false), READY_FALLBACK_MS))
    }
    return () => { clearTimers(); document.body.style.overflow = '' }
  }, [show])

  const onPlaying = () => {
    if (ready || dismissedRef.current) return
    clearTimers()
    setReady(true)
  }

  const onTimeUpdate = (e: SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget
    if (!fallback && !ending && v.duration - v.currentTime <= ENDING_LEAD_S) setEnding(true)
  }

  const onEnded = () => { if (!fallback) dismiss() }

  const onError = () => { if (!ready) { clearTimers(); startFallback(true) } }

  if (done) return null

  const className = ['splash', ready && 'splash-ready', ending && 'splash-ending', out && 'splash-out', videoFailed && 'splash-novideo']
    .filter(Boolean).join(' ')

  return (
    <div className={className} onClick={dismiss} role="presentation">
      <div className="splash-media">
        {/* No `loop`: the end of the video is what triggers the transition to the page. */}
        <video
          ref={videoRef}
          className="splash-video"
          src={introVideo}
          poster={introPoster}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={onPlaying}
          onTimeUpdate={onTimeUpdate}
          onEnded={onEnded}
          onError={onError}
        />
      </div>
      <svg className="splash-word" viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" aria-label="hello">
        <text x="50%" y="60%" textAnchor="middle">hello</text>
      </svg>
    </div>
  )
}

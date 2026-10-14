import { lazy, Suspense, useEffect, useState } from 'react'

const SplashCursor = lazy(() => import('./SplashCursor'))

export default function DeferredSplashCursor() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let loaded = document.readyState === 'complete'
    let pointerMoved = false
    let activationTimer = 0

    const activateWhenReady = () => {
      if (!loaded || !pointerMoved || activationTimer) return
      activationTimer = window.setTimeout(() => setReady(true), 1800)
    }
    const onLoad = () => {
      loaded = true
      activateWhenReady()
    }
    const onPointerMove = () => {
      pointerMoved = true
      activateWhenReady()
    }

    window.addEventListener('load', onLoad, { once: true })
    window.addEventListener('pointermove', onPointerMove, { once: true, passive: true })

    return () => {
      window.removeEventListener('load', onLoad)
      window.removeEventListener('pointermove', onPointerMove)
      window.clearTimeout(activationTimer)
    }
  }, [])

  if (!ready) return null
  return (
    <Suspense fallback={null}>
      <SplashCursor
        DENSITY_DISSIPATION={1.5}
        VELOCITY_DISSIPATION={0.5}
        PRESSURE={0}
        CURL={3}
        SPLAT_RADIUS={0.02}
        SPLAT_FORCE={2000}
        COLOR_UPDATE_SPEED={4}
        SHADING
        RAINBOW_MODE
        COLOR="#A855F7"
      />
    </Suspense>
  )
}

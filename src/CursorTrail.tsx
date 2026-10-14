import { useEffect, useRef } from 'react'

type TrailDot = { x: number; y: number; life: number; size: number; hue: number }

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: true })
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!canvas || !context || !finePointer.matches || reducedMotion.matches) return

    const dots: TrailDot[] = []
    let frame = 0
    let pixelRatio = 1
    let hue = 0

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(window.innerWidth * pixelRatio)
      canvas.height = Math.round(window.innerHeight * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let index = dots.length - 1; index >= 0; index--) {
        const dot = dots[index]
        dot.life -= 0.045
        if (dot.life <= 0) {
          dots.splice(index, 1)
          continue
        }
        context.beginPath()
        context.arc(dot.x, dot.y, dot.size * dot.life, 0, Math.PI * 2)
        context.fillStyle = `hsla(${dot.hue}, 90%, 60%, ${dot.life * 0.68})`
        context.fill()
      }
      if (dots.length) frame = window.requestAnimationFrame(draw)
      else frame = 0
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      dots.push({ x: event.clientX, y: event.clientY, life: 1, size: 2 + Math.random() * 2, hue })
      hue = (hue + 42) % 360
      if (dots.length > 28) dots.shift()
      if (!frame) frame = window.requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />
}

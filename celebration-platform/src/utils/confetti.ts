import confetti from 'canvas-confetti'

export function fireConfettiBurst(strength: number = 0.8): void {
  const shoot = (particleRatio: number, opts: confetti.Options) => {
    confetti(Object.assign({
      origin: { y: 0.6 },
      disableForReducedMotion: true,
    }, opts, {
      particleCount: Math.floor(200 * particleRatio * strength),
    }))
  }

  shoot(0.25, { spread: 26, startVelocity: 55 })
  shoot(0.2, { spread: 60 })
  shoot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
  shoot(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
  shoot(0.1, { spread: 120, startVelocity: 45 })
}

export function confettiOnHover(): void {
  confetti({ particleCount: 30, spread: 30, origin: { y: 0.9 }, scalar: 0.6, disableForReducedMotion: true })
}
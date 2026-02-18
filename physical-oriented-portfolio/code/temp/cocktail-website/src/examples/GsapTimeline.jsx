import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GsapTimeline() {
    
    const timeline = gsap.timeline({ 
        repeat: -1,
        repeatDelay: 1,
        yoyo: true 
    })

    useGSAP(() => {
        timeline.to('#yellow-box', {
            x: 250,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut',
        })

        timeline.to('#yellow-box', {
            y: 250,
            scale: 2,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut',
        })

        timeline.to('#yellow-box', {
            x: 500,
            scale: 1,
            rotation: 360,
            borderRadius: '8px',
            duration: 2,
            ease: 'back.inOut',

        })
    }, [])

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-3xl px-6 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">Gsap Timeline</h1>

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <div className="relative h-40 overflow-hidden rounded-lg bg-zinc-950">
                        <div
                            id="yellow-box"
                            className="absolute left-6 top-1/2 h-14 w-14 -translate-y-1/2 rounded-lg bg-yellow-500"
                        />
                    </div>

                    <button
                        className="mt-4 rounded bg-zinc-800 px-3 py-1 text-sm text-zinc-100 hover:bg-zinc-700"
                        onClick={() => {
                            if (timeline.isActive()) {
                                timeline.pause()
                            } else {
                                timeline.play()
                            }
                        }}
                    >
                        Play/Pause
                    </button>
                </div>
            </div>
        </main>
    )
}

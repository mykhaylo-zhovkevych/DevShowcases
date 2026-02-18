import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GsapTo() {
    useGSAP(() => {
        gsap.to('#blue-box', {
            x: 100,
            duration: 2,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            ease: 'bounce.in',
        })
    })

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-3xl px-6 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">Gsap To</h1>

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <div className="relative h-40 overflow-hidden rounded-lg bg-zinc-950">
                        <div
                            id="blue-box"
                            className="absolute left-6 top-1/2 h-14 w-14 -translate-y-1/2 rounded-lg bg-blue-500"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GsapFrom() {
    useGSAP(() => {
        gsap.from('#green-box', {
            x: 250,
            duration: 2,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            ease: 'power1.inOut',
        })
    })

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-3xl px-6 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">Gsap From</h1>

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <div className="relative h-40 overflow-hidden rounded-lg bg-zinc-950">
                        <div
                            id="green-box"
                            className="absolute left-6 top-1/2 h-14 w-14 -translate-y-1/2 rounded-lg bg-green-500"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
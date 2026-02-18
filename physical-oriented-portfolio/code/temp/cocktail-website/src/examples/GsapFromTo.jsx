import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GsapFromTo() {
    useGSAP(() => {
        gsap.fromTo('#red-box', {
            x: 0,
            rotate: 0,
            borderRadius: '0%',
        }, {
            x: 250,
            repeat: -1,
            yoyo: true,
            borderRadius: '100%',
            rotation: 360,
            duration: 2,
            ease: 'bounce.out',
        })
    })

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-3xl px-6 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">Gsap FromTo</h1>

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <div className="relative h-40 overflow-hidden rounded-lg bg-zinc-950">
                        <div
                            id="red-box"
                            className="absolute left-6 top-1/2 h-14 w-14 -translate-y-1/2 rounded-lg bg-red-500"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
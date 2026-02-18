import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GsapStagger() {
    useGSAP(() => {
        gsap.to('#stagger-box', {
            y: 250,
            rotation: 360,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            //stagger: 0.5,
            stagger: {
                amount: 1.5,
                grid: [2, 1],
                axis: 'y',
                ease: 'circle.inOut',
                //from: 'center',
            }
        }) 
    }, [])

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-3xl px-6 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">Gsap Stagger</h1>
                <p className="mt-2 text-zinc-400">Stagger is a feature that allows apply animations with a staggered delay to a group of elements.</p>

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <div className="relative h-40 overflow-hidden rounded-lg bg-zinc-950">
                        <div className="flex h-full items-center justify-center gap-4">
                            <div id="stagger-box" className="h-12 w-12 rounded-lg bg-emerald-100" />
                            <div id="stagger-box" className="h-12 w-12 rounded-lg bg-emerald-200" />
                            <div id="stagger-box" className="h-12 w-12 rounded-lg bg-emerald-300" />
                            <div id="stagger-box" className="h-12 w-12 rounded-lg bg-emerald-400" />
                            <div id="stagger-box" className="h-12 w-12 rounded-lg bg-emerald-500" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
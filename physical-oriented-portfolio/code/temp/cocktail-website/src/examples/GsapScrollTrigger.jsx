import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function GsapScrollTrigger() {
    const scrollRef = useRef([])

    useGSAP(() => {
        const boxes = scrollRef.current.filter(Boolean)
        //console.log(boxes);
        boxes.forEach((box) => {
            gsap.fromTo(
                box,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 85%',
                        end: 'top 45%',
                        scrub: 1,
                    },
                },
            )
        })
    }, [])

    const boxColors = [
        'bg-cyan-400',
        'bg-blue-400',
        'bg-indigo-400',
        'bg-teal-400',
        'bg-sky-400',
        'bg-emerald-400',
    ]

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <section className="mx-auto max-w-3xl px-6 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">Gsap ScrollTrigger</h1>
                <p className="mt-2 text-zinc-400">Each box animates when it enters the viewport.</p>

                <div className="mt-8 flex h-[50vh] items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 text-sm text-zinc-400">
                    Keep scrolling
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-6 pb-16">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {/* index is auto generated */}
                        {boxColors.map((color, index) => (
                            <div
                                key={color + index}
                                ref={(el) => { scrollRef.current[index] = el }}
                                className={`h-24 rounded-lg ${color}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="h-[50vh]" />
        </main>
    )
}
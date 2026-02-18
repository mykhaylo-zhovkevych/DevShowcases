import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default function GsapText() {
    useGSAP(() => {
        const split = new SplitText('#text', { type: 'chars,words' })

        gsap.fromTo(
            '#text-title',
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 5,
                ease: 'power2.out',
            },
        )

        gsap.from(split.chars, {
            y: 20,
            opacity: 0,
            stagger: 0.01,
            duration: 1,
            ease: 'power2.out',
        })

        gsap.fromTo(
            '#text-subtitle',
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                delay: 0.8,
            },
        )

    }, [])

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-3xl px-6 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">Gsap Text</h1>

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                    <div className="rounded-lg bg-zinc-950 p-8 text-center">
                        <h2 id="text-title" className="text-4xl font-bold leading-tight text-lime-300">
                            Fresh vibrant cocktails
                        </h2>
                        <div>
                            <p id="text" className="mt-2 text-zinc-200">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolores ex consectetur, autem id maiores repellat veniam nulla placeat soluta?
                            </p>
                            <p id="text-subtitle" className="mt-4 text-zinc-400">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolorem!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
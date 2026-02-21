import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap/all'
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })

        scrollTimeline.from(titleSplit.words, {
            opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
        })
        .from('.top-grid div, .bottom-grid div', {
            opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
            //Start this tween 0.5s before previous timeline tween finishes
            //So if previous tween ends at t=2, this starts at t=1.5
        }, '-=0.5')
    })

    return (
        <div id="about">
            <div className='mb-16 md:px-0 px-5'>
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">
                        Best Cocktails
                        </p>
                        <h2>Where every detail metters <span className='text-white'>-</span>from muddle to garnish</h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam, itaque blanditiis nisi culpa eligendi excepturi iste quis fuga facere repellat, cum dolorem error obcaecati.
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className='text-sm text-white-100'>
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div>
                        <div className="noisy" />
                        <img src="/images/abt1.png" alt='grid-img1'></img>
                    </div>
                </div>
                <div className="md:col-span-6">
                    <div>
                        <div className="noisy" />
                        <img src="/images/abt2.png" alt='grid-img2'></img>
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div>
                        <div className="noisy" />
                        <img src="/images/abt5.png" alt='grid-img5'></img>
                    </div>
                </div>
            </div>

            <div className="bottom-grid">
                    <div className="md:col-span-8">
                        <div>
                            <div className="noisy" />
                            <img src="/images/abt3.png" alt='grid-img3'></img>
                        </div>
                    </div>
                    <div className="md:col-span-4">
                        <div>
                            <div className="noisy" />
                            <img src="/images/abt4.png" alt='grid-img4'></img>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default About
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hello, my name is Tom", "Guy who likes coffe", "But Loves To Code More"],
        loop: true,
        delaySpeed: 2000
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://preview.redd.it/bg142yh1ut481.jpg?width=960&crop=smart&auto=webp&s=4714e0a3eeb81fff86b89be1025b14368dfc8a8f" alt="" />
            <div className='z-20'>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software engineer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="yellow" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                    <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                    <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                    <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                    <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
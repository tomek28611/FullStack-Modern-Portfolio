import React from 'react';
import { motion } from "framer-motion";


type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{  duration: 1.5 }}

        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
            snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{ y: -300, opacity:0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        
                        src="responsive.png" alt="" />

                        <div className="space-x-10 px-0 md:px-10 max-w-6xl">
                            <div className="text-4xl font-semibold text-center">
                                <h4>Projects: {i + 1} of {projects.length}</h4>
                                <p className="text-lg text-center md:text-left p-7">
                                It worked for me, if error is coming then just solve it line by line simply in your code, like : 1.Expected indentation of 2 spaces but found 8 then put only 2 spaces from the starting of the line 2.Unexpected tab character - don't use tabs, use spaces 3.Trailing spaces not allowed - don't give any spaces after lines end. 4.Missing space before value for ke    
                                 .</p>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
            -skew-y-12" />
        </motion.div>
    )
}

export default Projects
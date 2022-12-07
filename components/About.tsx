import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{  duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}

                src="https://preview.redd.it/6bairglt3yk41.jpg?width=640&crop=smart&auto=webp&s=513a59cf588ee98b4c475afdd8bbd165bc4ee6a6"
                alt="" className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg 
                     md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'/>

                <div className="space-y-10 px-0 md:px-10">
                    <h4 className='text-4xl font-semibold'>Here a <span className="underline decoration-yellow-500/50">little</span> background</h4>
                    <p className="text-base">
                    It worked for me, if error is coming then just solve it line by line simply in your code, like : 1.Expected indentation of 2 spaces but found 8  then put only 2 spaces from the starting of the line 2.Unexpected tab character - don't use tabs, use spaces 3.Trailing spaces not allowed - don't give any spaces after lines end. 4.Missing space before value for key 'name' - put 1 space after ":" in object value 5.A space is required after ',' - put 1 space after "," in parameter of the function 6.Opening curly brace does not appear on the same line as controlling statement - just put the opening curly brace where function starts in the same line 7.)Closing curly brace should be on the same line as opening curly brace or on the line after the previous block - put the closing curly brace just below where the function starts.
                    </p>
                </div>
        </motion.div>
    )
}

export default About
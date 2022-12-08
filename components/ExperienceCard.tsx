import React from 'react';
import { motion } from "framer-motion";


type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
        cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
        
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
         src="https://i.guim.co.uk/img/media/4e780b7e5dd95ddd4c9515df9e23686050511c29/0_0_2700_1618/master/2700.jpg?width=620&quality=85&dpr=1&s=none" 
        alt="" />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CEO Company</h4>
            <p className="font-bold text-2xl mt-1">Company</p>
            <div className="flex space-x-2 my-2">
                <img className="h-10 w-10" src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png" alt="" />
                <img className="h-10 w-10" src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png" alt="" />
                <img className="h-10 w-10" src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png" alt="" />



            </div>
            <p className="uppercase py-5 text-gray-300">Started... - Ended ...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>

    </article>
  )
}
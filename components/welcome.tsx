"use client";

import React from 'react'
import {IoIosPin} from "react-icons/io";
import {TypeAnimation} from "react-type-animation";
import {FiGithub, FiTwitter, FiInstagram, FiLinkedin} from "react-icons/fi";


const Welcome = () => {
    return (
        <div className="bg-primary justify-center">
            <div className="container mx-auto px-4 py-8 md:py-16 h-full flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
                    <div className="text-primary text-center md:text-left mb-8 md:mb-0">
                        <a href="https://www.google.com/maps/place/Paderborn">
                            <div className="flex items-center p-1 text-sm px-3 mb-4 w-fit rounded-full text-accent bg-accent">
                                <IoIosPin className="mr-2 text-xl text-accent"/>
                                Paderborn, Germany
                            </div>
                        </a>
                            <h1 className="text-4xl md:h-6 font-bold mb-4 text-primary">Jannik Schröder</h1>
                        <div className="text-primary flex font-semibold dark:text-gray-100 mb-4">
                            {new Date().getFullYear() - 2005} y/o &mdash;&nbsp;
                            <TypeAnimation
                                sequence={[
                                    "system administrator",
                                    2000,
                                    "tech enthusiast",
                                    2000,
                                    "animal lover",
                                    2000,
                                ]}
                                wrapper="p"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </div>
                        <div className="flex text-2xl space-x-5">
                            <a href="https://github.com/schroeder-is">
                                <FiGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/jannik-schröder-7b1553231/">
                                <FiLinkedin/>
                            </a>
                            <a href="https://twitter.com/z0lefps">
                                <FiTwitter/>
                            </a>
                            <a href="https://instagram.com/hijannikschroeder">
                                <FiInstagram/>
                            </a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
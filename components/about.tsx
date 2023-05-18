import React from 'react'

const About = () => {

    return (
        <div className="container lg:max-w-screen-lg mx-auto px-6 break-words">
            <div className="bg-primary justify-center">
                <div className="container mx-auto px-4 py-0 md:py-0 h-full flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
                        <div className="text-primary text-center md:text-left mb-8 md:mb-0">
                            <h1 className="text-4xl md:h-6 font-bold mb-8 text-primary">About 💭</h1>
                            <div className="text-primary flex font-semibold dark:text-gray-100 mb-4 break-words">
                                <p className="break-words">
                                    Currently, I am undergoing training at the esteemed University of Paderborn to pursue
                                    my aspirations of becoming an IT specialist specializing in system integration.
                                    During my leisure hours, I find great delight in embarking upon various petite
                                    programming endeavors. In addition to my programming ventures in Python and Bash
                                    scripting, I also find immense pleasure in dedicating my leisure time to crafting
                                    Next.js applications using TypeScript. Exploring the realms of Next.js and
                                    TypeScript allows me to broaden my skillset and delve into the world
                                    of front-end development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
import React from 'react'

const Welcome = () => {

    return (
        <div className="container lg:max-w-screen-lg mx-auto px-6 break-all">
            <div className="bg-primary justify-center">
                <div className="container mx-auto px-4 py-0 md:py-0 h-full flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
                        <div className="text-primary text-center md:text-left mb-8 md:mb-0">
                            <h1 className="text-4xl md:h-6 font-bold mb-4 text-primary">About 💭</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
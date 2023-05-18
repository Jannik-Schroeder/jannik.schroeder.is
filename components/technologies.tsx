import React from 'react'


const Widget = ({ text } : any) => {
    return (
        <div className="bg-accent z-20 px-5 py-1 rounded-2xl flex items-center transition-all duration-300 hover:translate-y-1 hover:bg-secondary">
            <div className="text-white">
                <h4 className="text-lg">{text}</h4>
            </div>
        </div>
    )
}


const Technologies = () => {

    return (
        <div className="container mx-auto z-10 lg:max-w-screen-lg px-6 break-words pt-10">
            <div className="bg-primary justify-center">
                <div className="container mx-auto px-4 py-0 md:py-0 h-full flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
                        <div className="text-primary text-center md:text-left mb-8 md:mb-0">
                            <h1 className="text-4xl md:h-6 font-bold mb-8 text-primary">Technologies 💻</h1>
                            <div className="text-primary flex-wrap justify-center flex font-semibold dark:text-gray-100 gap-5 mb-4">
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                                <Widget text="Linux"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faExclamationCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {

    return (
        <div className="container mx-auto z-10 lg:max-w-screen-lg px-6 break-words pt-10">
            <div className="bg-primary justify-center">
                <div className="container mx-auto px-4 py-0 md:py-0 h-full flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
                        <div className="text-primary text-center md:text-left mb-8 md:mb-0">
                            <h1 className="text-4xl md:h-6 font-bold mb-8 text-primary">Timeline</h1>
                                <div className="text-primary flex-wrap justify-center flex font-semibold text-gray-100 gap-5 mb-4">
                                    <div className="p-4 min-h-100vh clear-both flex align-center justify-center mt-12 mb-20">
                                        <div className="container">
                                            <div className="flex flex-col md:grid grid-cols-12 text-primary">
                                                <div className="flex md:contents">
                                                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                                        <div className="h-full w-6 flex items-center justify-center">
                                                            <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                                        </div>
                                                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow text-center">
                                                            <i className="text-white">
                                                                <FontAwesomeIcon icon={faExclamationCircle}/>
                                                            </i>
                                                        </div>
                                                    </div>
                                                    <div className="bg-secondary col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                                        <h3 className="font-semibold text-lg mb-1 text-primary">Apprenticeship as system Administrator at the University Paderborn</h3>
                                                        <p className="leading-tight text-justify text-primary">
                                                            01 August 2021 - Present
                                                        </p>
                                                        <p className="leading-tight text-justify">
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Timeline
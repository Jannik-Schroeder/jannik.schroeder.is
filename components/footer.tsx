import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="text-primary mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Jannik Schröder</h2>
                        <ul>
                            <p>©2023 | All rights reserved.</p>
                            <li><a href="mailto:jannik@schroeder.is" className="hover:text-blue-300 transition duration-200">jannik@schroeder.is</a></li>
                        </ul>
                    </div>
                    <div className="text-primary">
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="hover:text-blue-300 transition duration-200">Home</a></li>
                            <li><a href="/app/projects" className="hover:text-blue-300 transition duration-200"></a>Projects</li>
                            <li><a href="https://github.com/schroeder-is" className="hover:text-blue-300 transition duration-200">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
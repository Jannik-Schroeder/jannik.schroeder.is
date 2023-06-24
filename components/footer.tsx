import React from 'react';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="bg-secondary py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="text-primary mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Jannik Schröder</h2>
                        <ul>
                            <p>©2023 | All rights reserved.</p>
                            <li><a href="mailto:contact@jsde.me" className="hover:text-blue-300 transition duration-200">contact@jsde.me</a></li>
                        </ul>
                    </div>
                    <div className="text-primary">
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <Link href="/" className="hover:text-blue-300 transition duration-200">Home</Link><br/>
                            <Link href="/projects" className="hover:text-blue-300 transition duration-200">Projects</Link><br/>
                            <Link href="https://github.com/jannik-schroeder" className="hover:text-blue-300 transition duration-200">Github</Link><br/>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
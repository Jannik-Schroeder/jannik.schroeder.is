"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-secondary py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link href="/">
                    <div className="text-primary font-bold text-xl">Jannik Schröder</div>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-primary hover:text-primary transition duration-200">Home
                    </Link>
                    <Link href="/projects" className="text-primary hover:text-primary transition duration-200">Projects
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-300 hover:text-primary transition duration-200">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="container mx-auto px-4 mt-4">
                    <nav className="md:hidden bg-gray-900 rounded-lg p-4 space-y-4">
                        <Link href="/" className="text-gray-300 hover:text-primary transition duration-200 block" onClick={toggleMenu}>Home
                        </Link>
                        <Link href="/app/projects" className="text-gray-300 hover:text-primary transition duration-200 block" onClick={toggleMenu}>Projects
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <button>Start</button>
                    </li>
                    <li>
                        <button>Projects</button>
                    </li>
                    <li>
                        <button>Contact</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

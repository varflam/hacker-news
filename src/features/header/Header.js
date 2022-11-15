import React from 'react';

import './header.sass';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Hacker News</h1>
            <h2 className='header__subtitle'>100 latest news</h2>
        </header>
    );
};

export default Header;
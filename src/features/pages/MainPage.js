import React from 'react';
import StoryList from '../storyList/StoryList';
import Button from '../button/Button';

import './mainPage.sass';

const MainPage = () => {
    return (
        <section className='page-main'>
            <div className='page-main__titles'>
                    <h1 className='page-main__title'>Hacker News</h1>
                    <h2 className='page-main__subtitle'>100 latest news</h2>
            </div>
            <div className="page-main__wrapper">
                {/* <Button/> */}
                <StoryList/>
            </div>
        </section>
    );
};

export default MainPage;
import * as React from 'react';
import './index.css';

const Sidebar: React.FunctionComponent = () => {
    return (
        <aside className='Sidebar'>
            <p className='Sidebar-player1Name'>Plup</p><p className='Sidebar-player2Name'>Mango</p>
            <img src='https://esports.htc.com/user/pages/02.articles/melee-plup/1.jpg' className='Sidebar-player1Picture'/><img className='Sidebar-player2Picture' src='https://s.abcnews.com/images/Sports/espnapi_r82979_576x324_16-9_wmain.jpg' />
            <div>2|0</div>
        </aside>)
}; 

export default Sidebar;
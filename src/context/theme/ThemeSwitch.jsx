import React from 'react';
import { useTheme } from './ThemeContext';
import night from '../../assets/dayMode.png';
import day from '../../assets/nightMode.png';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button className='mx-4 p-2 rounded-full dark:bg-gray-800  dark:hover:bg-gray-700' onClick={toggleTheme}>
            <div>
                {theme ==="light" ? (
                    <img src={day} alt="Day Mode" className='w-8 h-auto' />
                ):(
                    <img src={night} alt="Night Mode" className='w-8 h-auto' />
                )}
            </div>
            
        </button>
    );
};

export default ThemeSwitch;
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='h-[8rem] w-[100%] flex items-center justify-start space-x-10 px-[6rem] fixed z-50'>
        <img src='https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg' height={90} width={90}></img>
        <ol className='uppercase flex  space-x-10 font-thin text-[1rem]'>
            <li>
                <Link to='#'>
                    TOPTRACER RANGE
                </Link>
            </li>
            <li>
                <Link to='#'>
                    GOLF LESSONS
                </Link>
            </li>
            <li>
                <Link to='#'>
                    ADVENTURE GOLF
                </Link>
            </li>
            <li>
                <Link to='#'>
                    CAFE
                </Link>
            </li>
            <li>
                <Link to='#'>
                    EVENTS
                </Link>
            </li>
        </ol>
    </nav>
  )
}

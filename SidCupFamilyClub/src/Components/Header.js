import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <section className='w-[100%] h-[100vh] background flex flex-col justify-center items-center relative'>
        <h1 className='text-[6rem] font-black relative'>EAT. DRINK. PLAY.</h1>
        <h3 className='text-xl font-bold mb-2'>WELCOME TO SIDCUP FAMILY GOLF!</h3>
        <p className='w-[50%] text-center font-semibold'>Sidcup Family Golf is a multipurpose golf facility located in Sidcup, South East London. Passionate about technology, player development and making golf fun and accessible to everyone.</p>
    </section>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-teal-900 sticky top-0'>
      <div className='flex justify-between items-center mx-auto px-10 py-3'>
      <Link to='/'>
      <h1 className='flex flex-wrap font-bold items-baseline'>
        <span className="text-slate-300 text-4xl">Bala's   </span>
        <span className='text-slate-100 text-2xl'> Grocery</span>
      </h1>
      </Link>
      <ul className='flex gap-8 justify-between'>
        <Link to='/'>
          <li className='hover:underline text-slate-100'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='hover:underline text-slate-100'>About & contact</li>
        </Link>
        <Link to='/sign-in'>
          <li className='hover:underline text-slate-100'>Sign-in</li>
        </Link>
        <Link to='/profile'>
          <li className='hover:underline text-slate-100'>Profile</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}

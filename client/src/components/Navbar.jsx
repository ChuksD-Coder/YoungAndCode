import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(){ return (
  <header className='bg-white shadow'>
    <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
      <Link to='/' className='text-2xl font-bold text-blue-600'>YoungAndCode</Link>
      <nav className='space-x-4 hidden md:block'>
        <Link to='/programs' className='text-gray-700 hover:text-blue-600'>Programs</Link>
        <Link to='/explore' className='text-gray-700 hover:text-blue-600'>Explore Tutors</Link>
        <Link to='/consultants' className='text-gray-700 hover:text-blue-600'>Consultants</Link>
      </nav>
      <div className='flex items-center gap-3'>
        <Link to='/login' className='text-sm text-gray-700 hover:text-blue-600'>Log in</Link>
        <Link to='/signup' className='px-4 py-2 bg-blue-600 text-white rounded-md text-sm'>Sign up</Link>
      </div>
    </div>
  </header>
)}

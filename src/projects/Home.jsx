import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul className='grid lg:grid-cols-5 sm:grid-cols-3 gap-1'>
        <Link
          className='border border-gray-800 bg-gray-700 hover:scale-95 text-gray-50 px-2 py-1 text-center rounded transition-transform'
          to='/todo'
        >
          TODO App
        </Link>
        <Link
          className='border border-gray-800 bg-gray-700 hover:scale-95 text-gray-50 px-2 py-1 text-center rounded transition-transform'
          to='/todo'
        >
          TODO App
        </Link>
        <Link
          className='border border-gray-800 bg-gray-700 hover:scale-95 text-gray-50 px-2 py-1 text-center rounded transition-transform'
          to='/todo'
        >
          TODO App
        </Link>
        <Link
          className='border border-gray-800 bg-gray-700 hover:scale-95 text-gray-50 px-2 py-1 text-center rounded transition-transform'
          to='/todo'
        >
          TODO App
        </Link>
        <Link
          className='border border-gray-800 bg-gray-700 hover:scale-95 text-gray-50 px-2 py-1 text-center rounded transition-transform'
          to='/todo'
        >
          TODO App
        </Link>
        <Link
          className='border border-gray-800 bg-gray-700 hover:scale-95 text-gray-50 px-2 py-1 text-center rounded transition-transform'
          to='/todo'
        >
          TODO App
        </Link>
        <Link
          className='border border-gray-800 bg-gray-700 hover:scale-95 text-gray-50 px-2 py-1 text-center rounded transition-transform'
          to='/todo'
        >
          TODO App
        </Link>
      </ul>
    </div>
  );
};

export default Home;

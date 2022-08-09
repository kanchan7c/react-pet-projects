import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <Link to='/todo'>TODO App</Link>
      </ul>
    </div>
  );
};

export default Home;

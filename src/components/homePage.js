import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Central Authority of India</h1>
            <Link to='/pay'><button>Pay Tax</button></Link>
            <Link to='/projects'><button>View Projects</button></Link>
            
        </div>
    );
}

export default HomePage;
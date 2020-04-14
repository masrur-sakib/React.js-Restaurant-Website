import React from 'react';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='d-flex align-items-center justify-content-center homepage-banner'>
            <div class="d-flex align-items-center flex-column" style={{ height: '200px' }}>
                <div class="p-2">
                    <h1 className='banner-title'>Best Food Waiting for you Belly</h1>
                </div>
                <div class="p-2">
                    <input className='search-food-item' type="text" placeholder='Search Food Items' />
                    <button className='btn-search' >Search</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
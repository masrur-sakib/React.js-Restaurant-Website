import React from 'react';
import './HomePage.css'
import dummyData from '../../dummyData/foods';
import { useState } from 'react';
import FoodItemBlock from '../FoodItemBlock/FoodItemBlock';


const HomePage = () => {
    const [foodItem, setFoodItem] = useState(dummyData);
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center flex-column homepage-banner">
                <div className="p-2">
                    <h1 className='banner-title'>Best Food Waiting for you Belly</h1>
                </div>
                <div className="p-2">
                    <input className='search-food-item' type="text" placeholder='Search Food Items' />
                    <button className='btn-search' >Search</button>
                </div>
            </div>

            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <h6 className="nav-link active">Breakfast</h6>
                    </li>
                    <li className="nav-item">
                        <h6 className="nav-link">Launch</h6>
                    </li>
                    <li className="nav-item">
                        <h6 className="nav-link">Dinner</h6>
                    </li>
                </ul>

            </div>

            <div className='food-items'>
                {
                    foodItem.map((food) => <FoodItemBlock food={food}></FoodItemBlock> )
                }
                
                {/* foodItem.map(<foodItem foodItem={foodItem}></foodItem>) */}
            </div>
        </div>
    );
};

export default HomePage;
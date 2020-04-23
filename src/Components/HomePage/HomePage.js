import React from 'react';
import './HomePage.css'
import dummyData from '../../dummyData/foods';
import { useState } from 'react';
import FoodItemBlock from '../FoodItemBlock/FoodItemBlock';


const HomePage = () => {
    const [foodItem] = useState(dummyData);
    const [category, setCategory] = useState('breakfast');
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
                <ul className="nav justify-content-center menu-type">
                    <li onClick={()=>setCategory('breakfast')} className="nav-item">
                        <h6 className={category === 'breakfast' ? "active nav-link" : "nav-link"}>Breakfast</h6>
                    </li>
                    <li onClick={()=>setCategory('lunch')} className="nav-item">
                        <h6 className={category === 'lunch' ? "active nav-link" : "nav-link"}>Lunch</h6>
                    </li>
                    <li onClick={()=>setCategory('dinner')} className="nav-item">
                        <h6 className={category === 'dinner' ? "active nav-link" : "nav-link"}>Dinner</h6>
                    </li>
                </ul>

            </div>

            <div className='food-items'>
                {
                    foodItem.map((food) => {
                    return(
                        food.category === category &&
                        <FoodItemBlock key={food.id} food={food}></FoodItemBlock>
                    )
                    })
                }
                
                {/* foodItem.map(<foodItem foodItem={foodItem}></foodItem>) */}
            </div>
        </div>
    );
};

export default HomePage;
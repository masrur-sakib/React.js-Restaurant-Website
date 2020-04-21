import React from 'react';
import './FoodItemBlock.css';

const FoodItemBlock = (props) => {
    return (
        <div className='container'>
            <div style={{margin: '20px 0px'}}>
            <div className="card food-item-block">
                <img className="card-img-top" src={props.food.img} alt="Card image cap"></img>
                <h5>{props.food.name}</h5>
                <p><small>{props.food.shortDescription}</small></p>
                <h4>$<span>{props.food.price}</span></h4>
            </div>
            </div>
        </div>
    );
};

export default FoodItemBlock;
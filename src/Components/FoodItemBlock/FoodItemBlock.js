import React from 'react';
import './FoodItemBlock.css';

const FoodItemBlock = (props) => {
    return (
        <div className='container'>
            <div style={{margin: '20px 0px'}}>
            <div class="card food-item-block" style={{width: '30%', height: '500px',margin: '5px 5px', textAlign: 'center', float: 'left'}}>
                <img class="card-img-top" src={props.food.img} alt="Card image cap"></img>
                <h5>{props.food.name}</h5>
                <p>{props.food.shortDescription}</p>
                <h3>$<span>{props.food.price}</span></h3>
            </div>
            </div>
        </div>
    );
};

export default FoodItemBlock;
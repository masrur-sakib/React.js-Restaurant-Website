import React from 'react';
import './ItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import dummyData from '../../dummyData/foods';
import { useState } from 'react';

const ItemDetail = (props) => {
    const { foodId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const selectedItem = dummyData.find(food => food.id == foodId);
    const totalPrice = quantity*selectedItem.price;
    return (
        <div className='item-details'>
            <div className="row">
                <div className="col-md-8">
                    <h1>{selectedItem.name}</h1>
                    <p>{selectedItem.fullDescription}</p>
                    <div className="d-flex flex-row">
                        <h1>${totalPrice}</h1>
                        <div className='food-quantity'>
                            <span className='btn' onClick={() => setQuantity(quantity <=1 ? 1 :quantity-1)}>-</span>
                            <b>{quantity}</b>
                            <span className='btn' onClick={() => setQuantity(quantity >=20 ? 20 :quantity+1)}>+</span>
                        </div>
                    </div>
                    <br/>
                    <button className='btn-add-to-cart'><FontAwesomeIcon icon={faCartPlus} /> Add</button>
                </div>
                <div className="col-md-4">
                    <img src={selectedItem.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
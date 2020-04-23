import React from 'react';
import './ItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import dummyData from '../../dummyData/foods';

const ItemDetail = (props) => {
    const { foodId } = useParams();
    const selectedItem = dummyData.find(food => food.id == foodId);
    return (
        <div className='item-details'>
            <div className="row">
                <div className="col-md-8">
                    <h1>{selectedItem.name}</h1>
                    <p>{selectedItem.fullDescription}</p>
                    <h1>${selectedItem.price}</h1>
                    <button className='btn-add-to-cart'><FontAwesomeIcon icon={faCartPlus} /> Add</button>
                </div>
                <div className="col-md-4">
                    <img src={selectedItem.img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
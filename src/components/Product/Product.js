import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const{name,img,price} = props.data;
    return (
        <div className='product'>
            <img className='image'  src={img} alt="Girl in a jacket" />
            <h2 style={{color:'orange'}}>price {price}</h2>
            <h3>{name}</h3>
            <div className='button'>
                <button onClick={()=>props.handleCart(props.data)}>Add to cart</button>
                <Link to='/shipment'><button >Order</button></Link>
            </div>
        </div>
    );
};

export default Product;
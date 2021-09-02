import React, { useContext } from 'react';
import fakeData from '../../../src/fakedata'
import { userContext } from '../../App';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const {cartItem} = useContext(userContext);

    const[cart,setCart] = cartItem;

    const handleCart = (product) =>{
        const newCart = [product,...cart]
        setCart(newCart)
    }
    return (
        <div className='products'>
            {
                fakeData.map(data => <Product data = {data} key={data.key} handleCart={handleCart}></Product>)
            }
            
        </div>
    );
};

export default Products;
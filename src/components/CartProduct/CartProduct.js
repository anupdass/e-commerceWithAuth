import React from 'react';

const CartProduct = (props) => {
    const{name,img,price} = props.cartpd;
    return (
        <div style={{marginTop:'10px'}}>
            <img src={img} alt="" />
            <h3>Price : {price}</h3>
            {/* <br /> */}
            <small>{name}</small>
        </div>
    );
};

export default CartProduct;
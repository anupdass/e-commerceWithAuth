import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
    const {cartItem} = useContext(userContext);

    const [cart,setCart] = cartItem;

    const price = cart.reduce((sum , price)=>sum + price.price,0);

    const button = {
        backgroundColor:'orange',
        padding:'20px',
        cursor:'pointer',
        color:'white',
        borderRadius:'5px',
        outline:'none',
        border:"none",
        textDecoration:'none'

    }
    
    return (
        
        <div style={{display:'flex'}}>

            <div style={{width:'800px',margin:'50px', borderRight:'2px solid gray'}}>
                {
                    cart.map(cartpd => <CartProduct cartpd={cartpd}></CartProduct>)
                }
            </div>
        
            <div style={{margin:'50px'}}>
                <h4>Total Product : {cart.length}</h4>
                <h4>Total Price : {Math.ceil(price)}</h4>
                <h4>Delivery Cost : {30 * cart.length}</h4>
                <hr />
                <h4>Sub Total : { Math.ceil(price) + (30 * cart.length) }</h4>
                <br />
                <br /><br />
                <Link to='/shipment'><button style={button}>Order Now</button></Link>
            </div>
            
        </div>
    );
};

export default Cart;
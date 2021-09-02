import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const Shipment = () => {

    const {loginItem,cartItem} = useContext(userContext);
    const[login,setLogin] = loginItem;
    const[cart] = cartItem;
    
    const history = useHistory();
    const button = {
        backgroundColor:'orange',
        marginTop:'10px',
        padding:'15px',
        width:'200px',
        cursor:'pointer',
        color:'white',
        borderRadius:'5px',
        outline:'none',
        border:"none"
    }

    const sucess =(e)=>{
        e.preventDefault();
        history.push('/sucessfull');
    }
    return (
        <div style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
            <form onSubmit={sucess}>
                <label htmlFor="name">your name</label><br />
                <input style={{padding:'10px',margin:'5px'}} type="text" name="name" id=""  value={login.name}/><br />

                <label htmlFor="email">your email</label><br />
                <input style={{padding:'10px',margin:'5px'}} type="email" name="email" value={login.email} id="" /><br />

                <label htmlFor="phone">your Order</label><br />
                <input style={{padding:'10px',margin:'5px'}} type="text" name="phone" id=""  Value={cart.length} /><br />

                <label htmlFor="phone">your phone</label><br />
                <input style={{padding:'10px',margin:'5px'}} type="text" name="phone" id="" /><br />

                <label htmlFor="name">your address</label><br />
                <textarea style={{padding:'10px',margin:'5px',width:'175px',height:'80px'}}></textarea><br />
                {
                    cart.length>0 ? <input type="submit" value="submit" style={button} />: <h2>Add to card then Order</h2>
                }
            </form>
        </div>
    );
};

export default Shipment;
import React from 'react';

const Shipment = () => {

    
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

    return (
        <div style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
            <form action="">
                <label htmlFor="name">your name</label><br />
                <input style={{padding:'10px',margin:'5px'}} type="text" name="name" id="" /><br />

                <label htmlFor="email">your email</label><br />
                <input style={{padding:'10px',margin:'5px'}} type="email" name="email" id="" /><br />

                <label htmlFor="phone">your phone</label><br />
                <input style={{padding:'10px',margin:'5px'}} type="text" name="phone" id="" /><br />

                <label htmlFor="name">your address</label><br />
                <textarea style={{padding:'10px',margin:'5px',width:'175px',height:'80px'}}></textarea><br />

                <input style={button} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Shipment;
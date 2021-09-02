import React from 'react';
import { useHistory } from 'react-router-dom';

const SucessFull = () => {

    const history = useHistory();
    const backHome = () => {
        history.push('/')
    }

    const button = {
        backgroundColor: 'orange',
        marginTop: '10px',
        padding: '15px',
        width: '200px',
        cursor: 'pointer',
        color: 'white',
        borderRadius: '5px',
        outline: 'none',
        border: "none"
    }

    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:"50px"}}>
            <div>
                <h2>Thanks For Order ! We will Delivered Soon </h2>
                <button style={button} onClick={backHome}> Back TO Home</button>
            </div>
        </div>
    );
};

export default SucessFull;
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const Privateroute = ({children,...rest}) => {

    const{loginItem} = useContext(userContext);
    const[login,setLogin] = loginItem;

    return (
        <Route
      {...rest}
      render={({ location }) =>
        login.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default Privateroute;
import React from 'react';
import { Route,Redirect } from 'react-router';
import Auth from './auth'

const PrivateRoute = ({component:Componet, ...rest}) => (
    <Route {...rest} render={(props)=>{
        Auth.isLogin
        ?<Component {...props}/>
        :<Redirect to={
            {
                pathname='/login',
                state:{from:props.location}
            }
        }/>
    }}></Route>
)

export default PrivateRoute;
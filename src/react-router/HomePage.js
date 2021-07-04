import React from 'react';
import {Link} from 'react-router-dom'

export default class HomePage extends React.Component{
    render(){
        return (
            <>
        
                <div>Welcome to Home Page</div>
                <Link to="/about"><div>About</div></Link>
                <Link to="/shop"><div>Shop</div></Link>
            
            </>
        )
    }
}
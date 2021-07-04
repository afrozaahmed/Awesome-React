import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.get('https://fortnite-api.theapinetwork.com/store/get')
        .then(res=>res.data.data)
        .then(data=>this.setState({data}))
    }
    render(){
        console.log("---",this.state.data);
        return (
            <>
            {this.state.data.map((item)=>(
                <div>
                    <Link to={'/shop/id'}>{item.item.name}</Link>
                </div>
        ))}
            </>
        )
    }
}
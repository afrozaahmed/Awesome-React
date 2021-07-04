import React from 'react';

export default class TestApi extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        fetch('http://localhost:9000/TestApi')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    render(){
        return(
            <div>Afroz</div>
        )
    }
}
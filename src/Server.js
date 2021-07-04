import React from 'react';

class Server extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message:""
        }
    }
    callApi(){
        fetch("http://localhost:8000/testApi")
        .then(res => res.text())
        .then(res=>this.setState({message:res}))
    }

    componentWillMount(){
        this.callApi();
    }

    render(){
        return (
            <h1>{this.state.message}</h1>
        )
    }
}

export default Server;
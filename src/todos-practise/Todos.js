import React from 'react';
import './index.css'

export default class Todos extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>this.setState({data}))
    }

    render(){
        return(
            <div className="container">
                {this.state.data.map(item=>(
                    <div className="container-1">
                        <div className="container-2">
                            <span>{item.title}</span>
                            <span style={{textAlign:'left'}}>userid:{item.id}</span>
                            </div>
                        <div><button className={item.completed?'green':'red'}>Completed</button></div>
                        
                    </div>
                ))}
            </div>
        )
    }
}
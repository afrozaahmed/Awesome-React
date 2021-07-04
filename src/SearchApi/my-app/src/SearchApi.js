import React from 'react';

export default class SearchApi extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[],
            value:""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(data=>this.setState({data}))
    }

    handleChange = (e) =>{
        this.setState({
            value:e.target.value
        })
    }

    render(){
        const {data,value} = this.state;
        const newDate = value ? data.filter(ele=>(
            ele.id == value
        )):data;

        return(
            <div>
                <div>
                    <input value={this.state.value} onChange={this.handleChange} placeholder="Search..."></input>
                </div>
                <ul>
                {newDate.map(item=>(
                    <li>
                        {item.name}
                    </li>
                ))}
                </ul>
                
            </div>
        )
    }
}
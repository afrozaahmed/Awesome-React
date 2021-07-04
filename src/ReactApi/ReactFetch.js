import React from 'react';
import axios from 'axios';

class ReactApi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : false,
            result:[],
            error:""
        }
    }
    componentDidMount(){
        /*fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                result:data,
                isLoading: true
            })
        },
        (error)=>{
            this.setState({
                isLoading: true,
                error:error
            })
        })*/
        axios.get('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        .then(data=>{
            this.setState({
                result:data.data,
                isLoading:true
            })
        })
    }

    render(){
        if(this.state.error){
            return (
                <h2>Error: {this.state.error.message}</h2>
            )
        }
        else if(!this.state.isLoading){
            return (
                <h1>Loading...</h1>
            )
        }else{
            return <ul>Name: 
            {this.state.result.members && this.state.result.members.map(itr => {
                return <li key={itr.age}>
                        {itr.name} <ul>Powers: {itr.powers.map(ele=>
                    {
                        return <li>{ele} {itr.name}</li>
                    } 
                 )}</ul>
                </li>
            })}
        </ul>
        }
    }
        
      
}

export default ReactApi;
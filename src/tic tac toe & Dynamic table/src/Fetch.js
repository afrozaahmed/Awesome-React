import React from 'react';

export default class Fetch extends React.Component{
    constructor(){
        super();
        this.textInput = React.createRef();
        this.state = {
            fields:{},
            checkBox: null
        }
    }

    handleChange(field,e){
        let fields = this.state.fields;
        if(field != 'gender'){
            fields[field] = e.target.value;
        }
        else{
            fields[field] = e.target.name;
        }
        this.setState({
            fields:fields

        })
    }

    handleSubmit = ()=>{
        console.log(this.state.fields);
    }

    render(){
    
        return (
            <div>
            <label>Name</label>
            <input type="text" onChange={(e)=>this.handleChange("email",e)}></input>
            <label>Password</label>
            <input type="password" onChange={(e)=>this.handleChange("password",e)}></input>
            <label>Gender: </label>
            <label>Male</label>
            <input
             type="checkbox" 
              name = "male" checked={this.state.fields && this.state.fields.gender === 'male'} onChange={(e)=>this.handleChange("gender",e)}/>
            <label>Female</label>
            <input type="checkbox" checked={this.state.fields && this.state.fields.gender === 'female'} name="female" onChange={(e)=>this.handleChange("gender",e)}/>
            <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
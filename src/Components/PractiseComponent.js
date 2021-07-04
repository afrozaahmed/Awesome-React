import React from 'react';

class PractiseComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"",
            data:"",
            showName:false,
            errors:""
        }
    }

    handleChange = (e)=>{
        
        this.setState({
            name:e.target.value,
            data:e.target.value
        });
    }

    handleValidate = ()=>{
        this.state.errors = "";
        if(this.state.name == ""){
            this.setState({
                errors:"Name should not be empty"
            })
            return false
        }
        if(this.state.nmae && this.state.fields.name.length < 4){
            this.setState({
                errors:"Name should be more than 4 characters"
            })

            return false;
        }

        return true;
    }

    handleSubmit = () => {
        
        if(this.handleValidate()){
            this.setState({
                showName:true,
                name:""
            })
        }else{
            alert("Input has error");
        }
        
    }

    render(){
        return(
            <div>
                <input id="name" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
                <span>{this.state.errors}</span>
                {this.state.showName && <p>{this.state.data}</p>}
            </div>
        )
    }
}

export default PractiseComponent;
import React from 'react';

class ReactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fields:{},
            errors:{}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
  
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }

    handleChange(field,e){
     let fields = this.state.fields;
     fields[field] = e.target.value;
     this.setState({
         fields:fields
     })
    }

    handleSubmit(e){
        console.log("awdawd")
        e.preventDefault();
        if(this.handleValidation()){
            alert('Form Submitted')
        }else{
            alert('Form has error....')
        }
    }

    render(){
        return(
            <div>
                
                    <fieldset>
                        <input type="text" size="30" placeHolder="name" value={this.state.fields["name"]} onChange={this.handleChange.bind(this,"name")}/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                        <br/>
                        
                        <input type="text" size="30" placeHolder="email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this,"email")}/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                        <br/>
                        
                        <input type="text" size="30" placeHolder="phone" value={this.state.fields["phone"]} onChange={this.handleChange.bind(this,"phone")}/>
                        <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                        <br/>
                        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                        <br/>
                    </fieldset>
                    
                
            </div>
        )
    }
}

export default ReactForm;

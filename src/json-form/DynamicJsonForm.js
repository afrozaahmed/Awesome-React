import React from 'react';

class DynamicJsonForm extends React.Component{
constructor(props){
    super(props);
    this.state = {
        data:[  
            {  
                "indexId":"1",
                "abrvIndexName":"name",
                "indexDesc":"Name",
                "htmlControlType":"textbox",
                "cssClassName":"form-control",
                "type":"text"
            },
            {  
                "indexId":"2",
                "abrvIndexName":"age",
                "indexDesc":"Age",
                "htmlControlType":"textarea",
                "cssClassName":"form-control",
                "type":"number"
        },{  
            "indexId":"3",
            "abrvIndexName":"email",
            "indexDesc":"Email",
            "htmlControlType":"textarea",
            "cssClassName":"form-control",
            "type":"text"
    }],
    fields:{},
    errors:{}
    }
}

handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    //name
    if(!fields["name"]){
        formIsValid=false;
        errors["name"] = "Cannot be empty";
    }
    if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
            errors["name"] = "only letters";
        }else{
            if(fields["name"].length <4){
                errors["name"] = "more than 4 characters";
            }
            if(fields["name"].length > 10){
                errors["name"] = "less than 10 characters";
            }
        }
    }
    

    //email
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

    //age
    if(!fields["age"]){
        formIsValid = false;
        errors["age"] = "Cannot be empty";
     }
     if(typeof fields["age"] !== "undefined"){
        if(!fields["age"].match(/^[0-9]+$/)){
            formIsValid = false;
            errors["age"] = "only digits";
        }
     }
     

    this.setState({
        errors
    })
    return formIsValid;
}

handleChange(field,e){
    let fields = this.state.fields;
    fields[field]=e.target.value;
    this.setState({
        fields
    })
}

handleSubmit(e){
    e.preventDefault();
    console.log("---",this);
    if(this.handleValidation()){
        alert('Form Submitted');
    }else{
        alert('Form has error');
    }
}

renderForm(){
    let data1 = this.state.data;
    let items = data1.map((item)=>{
        let type=item.type || "text";
        let key=item.abrvIndexName;
        return <div key={key}>
            <label>{item.indexDesc}</label>
            <input
            ref={(key)=>{this[key]=key}}
            placeholder={item.abrvIndexName}
            type={type}
            onChange={this.handleChange.bind(this,item.abrvIndexName)}
            ></input>
            <span style={{color: "red"}}>{this.state.errors[item.abrvIndexName]}</span>
            </div>
    });
    return items;
}

render(){
    return (
        <div>
            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                {this.renderForm()}
                <button type="submit">Submit</button>
            </form>
            {(Object.keys(this.state.errors).length === 0) && JSON.stringify(this.state.fields)}
        </div>
    )
}

}

export default DynamicJsonForm;
import React from 'react';

class DynamicFormComp extends React.Component{
    constructor(props){
        super(props);
    }

    submit(e){
        e.preventDefault();
        if(this.props.onSubmit){
            this.props.onSubmit(this.state);
        }
    }

    onChange(e,key){
        console.log("---",e,e.target,key)
        this.setState({
        [key]:this[key].value
        })
    }

    renderForm = ()=>{
        let model = this.props.model;
         let formUI = model.map((itr)=>{
            let key = itr.key;
            let type=itr.type || "text";
            let props =itr.props || {};

            return (
                <div key={key}>
                    <label key={"1"+key} htmlFor={true.key} type={type} props={props}>{itr.label}</label>
                    <input {...props}
                    ref={(key)=>{this[itr.key]=key}}
                    type={type}
                    key={"i"+itr.key}
                    onChange={(e)=> {this.onChange(e,key)}}
                    ></input>
                </div>
            )
         })
         return formUI;
    }

    render(){
        let title = this.props.title || 'Dynamic Form'
        return(
            <div>
                {title}
                <form onSubmit={(e)=>{this.submit(e)}}>
                    {this.renderForm()}
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
}

export default DynamicFormComp;
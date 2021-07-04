import React from 'react';
import DynamicFormComp from './DynamicFormComp';

class DynamicForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                  id: 1,
                  name: "a",
                  age: 29,
                  qualification: "B.Com",
                  rating: 3,
                  gender: "male",
                  city: "Kerala",
                  skills: ["reactjs", "angular", "vuejs"]
                },
                {
                  id: 2,
                  name: "b",
                  age: 35,
                  qualification: "B.Sc",
                  rating: 5,
                  gender: "female",
                  city: "Mumbai",
                  skills: ["reactjs", "angular"]
                },
                {
                  id: 3,
                  name: "c",
                  age: 42,
                  qualification: "B.E",
                  rating: 3,
                  gender: "female",
                  city: "Bangalore",
                  skills: ["reactjs"]
                }
              ]
        }
    }

    onSubmit(model){
        alert(JSON.stringify(model));
        this.setState({
            data: [model, ...this.state.data]
        })
    }

    render(){
        return(
            <div>
                <DynamicFormComp 
                title="registration"
                model={[
                    {key:"name",label:"Name", props:{required:true,min:4,max:10}},
                    {key:"age",label:"Age", props:{required:true} ,type:"number"},
                    {key:"rating",label:"Rating", props:{required:true}},
                    {key:"qualification",label:"Qualification", props:{required:true}},
                ]}
                onSubmit = {(model)=> {this.onSubmit(model)}} 
                
                />
                {JSON.stringify(this.state.data)}
            </div>
        )
    }
}

export default DynamicForm;
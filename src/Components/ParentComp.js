import React from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureForm';

class ParentComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'simpliLearn'
        }
    }

    /*componentDidMount() {
        setInterval(()=>{
            this.setState({
            name : 'simpliLearn'
        });
    } ,3000)}*/
    render(){
        console.log("Inside Parent Component");
        return(
            <div>
            <p>
                I'm from Parent Component.
            </p>
            <RegularComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
            </div>
           
        )
    }
}

export default ParentComp;
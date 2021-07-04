import {React, PureComponent} from 'react';

class PureComp extends PureComponent {
    render(){
        console.log("Inside Pure Component");
        return <p>I am pure Component {this.props.name}</p>
    }
}

export default PureComp;
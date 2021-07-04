import React from 'react';

class RegularComp extends React.Component {
    render(){
        console.log("inside Regular Component");
        return (
            <p>
                I' am Regular Component. {this.props.name}
            </p>
        )
    }
}

export default RegularComp;
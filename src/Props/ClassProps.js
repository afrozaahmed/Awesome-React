import React from 'react';

class ClassProps extends React.Component {
    render(){
        return (
            <div>
<p>
                Hello {this.props.name}! from {this.props.place} from SimpliLearn
            </p>
            <p>
                {this.props.children}
            </p>
            </div>
            
        )
    }
}

export default ClassProps;
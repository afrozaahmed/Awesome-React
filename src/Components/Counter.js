import {React, Component} from 'react';
import UpdateComp from './HigherOrder';

class Counter extends Component {
    constructor (props){
        super(props);
        this.state = {
            count:0
        }
    }
    updateIncrement = () => {
        this.setState({
            count: this.state.count+1
        });
    }
    render(){
        return(
            <button onMouseEnter={this.updateIncrement}>{this.props.name} Increament by {this.state.count}</button>
        )
    }
}

export default UpdateComp(Counter);
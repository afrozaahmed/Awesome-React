import {React, Component} from 'react';
import UpdateComp from './HigherOrder';
import ReactDOM from 'react-dom';
import Counter from './Counter';

class Click extends Component {
    constructor(props){
        super(props);
this.state = {
count : 0
}
    }

    updateClick = () => {
this.setState({
    count: this.state.count+1
});
    }

    render(){
        return(
            <div>
                <button onClick={this.updateClick}>{this.props.name} Click {this.state.count}</button>
            </div>
        )
    }
}

//ReactDOM.render(<Counter/>, document.getElementById("root"));

export default UpdateComp(Click);
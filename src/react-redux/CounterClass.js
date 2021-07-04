import React from 'react';
import {connect} from 'react-redux';

class CounterClass extends React.Component {
    increment = () => {
        this.props.dispatch({type:'INCREMENT'});
    }

    decrement = () => {
        this.props.dispatch({type:'DECREMENT'});
    }

    render(){
        return(
            <div>
                <h2>Counter:</h2>
                <button onClick={this.increment}>Increment</button>
                <span>{this.props.count}</span>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
count : state.count
});

export default connect(mapStateToProps)(CounterClass);
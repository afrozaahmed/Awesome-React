import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';

class NewComponent extends Component {
  

    styles = {
        fontstyle:'italic',
        color:'purple'
    }

    styles1 = {
        color:'teal',
    }
  

    render(){
        return (
            <div className="App">
<h3 style={this.styles}>{this.props.message}</h3>
<button style = {this.styles1}onClick = {this.props. ButtonChange}>Subscribe</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        message: state.message
    }
       
    
}

const mapDispatchToProps = dispatch => {
    return {
        ButtonChange: () => dispatch({type:'Message change'})
    }
        
    
}

export default connect(mapStateToProps,
    mapDispatchToProps)(NewComponent)
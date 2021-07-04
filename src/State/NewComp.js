import React from 'react';
import bell1 from './bell1.jpeg'
import bell2 from './bell2.png';
import '../App.css';

class NewComp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        message: "Subscribe to SimpliLearn",
        msg: "Subscribe",
        bell:bell2
            }
    }

    ButtonChange = ()=>{
this.setState ({
    msg:'Subscribed',
    message:'Press the bell icon to never miss an update'
})
    }

    imageChange = () =>{
        this.setState({
            bell:bell1
        })
    }

    styles = {
        width:50,
        height:50
    }

    render(){
        return (
            <div className="App">
            <h2>{this.state.message}</h2>
            <button onClick = {this.ButtonChange}>{this.state.msg}</button>
            <img style = {this.styles} src={this.state.bell} onClick={this.imageChange}></img>
            </div>
        )
    }

}

export default NewComp;
import React from 'react';
import '../index.css'

export default class Square extends React.Component{
    render(){
        
        return(
            <div className="square" 
            onClick={()=>this.props.onHandle()}
            >
               {this.props.value}
            </div>
        )
    }
}
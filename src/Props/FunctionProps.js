import React from 'react';
import FunctionalComp from '../Components/FunctionalComp';
import ClassProps from './ClassProps';

let FunctionComp = (props) =>{
    return (
        <div>
            <h2>This is FunctionalComp</h2>
            <p>
                Hello {props.name} from {props.place} from SimpliLearn
            </p>
        </div>
    )
}

export default FunctionComp;
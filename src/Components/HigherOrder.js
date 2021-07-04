import React from 'react';

const UpdateComp = (OriginalComponent) => {
    class NewCom extends React.Component {
        render(){
            return <OriginalComponent name="The User"/>;
        }
    }
    return NewCom;
}

export default UpdateComp;
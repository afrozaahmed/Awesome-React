import React from 'react';

export default class TodoListClass extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            list:"",
            length:0
        }
    }

    handleChange = (e)=>{
        this.setState({
            list:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.list == "") return;
        let newData = this.state.data;
        newData.push(this.state.list);
        this.setState({
            data:newData,
            list:""
        })
    }


    render(){
        const TodoList = ({data}) => {
            return data.map((item)=>(
                <li>{item}</li>
            ))
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable>
                        <h2>Add your todo list</h2>
                    </lable>
                    <input
                    value={this.state.list}
                    onChange={this.handleChange}
                    >
                    </input>
                    <button >
                        Add {this.state.data.length+1}
                    </button>
                </form>
                <ul>
                {this.state.data && this.state.data.length>0 && <TodoList data={this.state.data}/>}
                </ul>
            </div>
        )
    }
}
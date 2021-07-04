import React from 'react';
import data from './db.json'

export default class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            fields:{}
        }
    }

    handleClick = () => {
        const {books} = data;
        let field = this.state.fields;
        field.id = books.length+1;
        books.push(field);
        this.setState({
            fields:{},
        })
    }

    handleChange = (field,e) => {
            let fields = this.state.fields;
            fields[field] = e.target.value;
                this.setState({
                    fields:fields
                })
    }

    render(){
        const {books} = data;
        return (
            <div>
                <label>BookName</label>
                <input onChange={(e)=>this.handleChange('bookName',e)} value={this.state.fields["bookName"]}></input>
                <label>Publiser</label>
                <input onChange={(e)=>this.handleChange('publisher',e)} value={this.state.fields["publisher"]}></input>
                <button onClick={this.handleClick}>Add Book</button>
                <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Book Name</th>
                        <th>Pubisher</th>
                    </tr>
                </thead>
                <tbody>
                        {books && books.map((item)=>(
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.bookName}</td>
                            <td>{item.publisher}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
        )
    }
}
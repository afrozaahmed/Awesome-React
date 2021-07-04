import React from 'react';
import axios from 'axios';
import '../index.css';

class PaginationComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           originalData:[],
           perPage:10,
           currentPage:1,
           first:1,
           last:10
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(res=>res.data)
        .then(data=>{
            this.setState({
                originalData:data,
            })
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            currentPage:e.target.value
        })
    }

    renderPagination = (pageNumber) => {
        return pageNumber.map((number)=>{
            return (
                <li
                key={number}
                id={number}
                value={number}
                className={number == this.state.currentPage ? 'textColor':''}
                onClick={(e)=>this.handleChange(e)}
                >
                    {number}
                </li>
            )
        })
    }

    handleNext = () => {
        this.setState({
            currentPage:this.state.currentPage+1,
            last:this.state.last+1,
            first:this.state.first+1
        })
    }

    handlePrevious = () => {
        if(this.state.first == 1){
            this.setState({
                currentPage:this.state.currentPage-1
            })
        }else{
            this.setState({
                currentPage:this.state.currentPage-1,
                first:this.state.first-1,
                last:this.state.last-1,
            })
        }
        
    }

    render(){
        const {currentPage, perPage,originalData,first,last} = this.state;
        const lastIndex = currentPage*perPage;
        const firstIndex = lastIndex-perPage;
        const currentData = originalData.slice(firstIndex,lastIndex)

        const pageNumber = [];
        for(let i=first;i<=Math.ceil(last);i++){
            pageNumber.push(i);
        }
        return(
                <>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </thead>
                        <tbody>
                        {currentData  && currentData.map((item)=>(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <ul >
                        <span 
                        onClick = {this.handlePrevious} 
                        className="previous"
                        style={{visibility: this.state.currentPage !== 1 ? 'visible' : 'hidden' }}
                        >&laquo;</span>
                        {this.renderPagination(pageNumber)}
                        <span 
                        style={{visibility: lastIndex == originalData.length || last == originalData.length? 'hidden' : 'visible' }}
                        onClick = {this.handleNext} 
                        className="next"
                        >&raquo;</span>
                        </ul>
                        
                    </div>
                    
                </>
        )
    }
}

export default PaginationComponent;
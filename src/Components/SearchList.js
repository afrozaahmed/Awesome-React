import React from 'react';

export default class SearchList extends React.Component{
    constructor(){
        super();
        this.state={
            posts : [
                { id: '1', name: 'This first post is about React' },
                { id: '2', name: 'This next post is about Preact' },
                { id: '3', name: 'We have yet another React post!' },
                { id: '4', name: 'This is the fourth and final post' },
            ],
            value:"",
            filterPost:[]
        }
    }

    handleChange = (e) =>{
        this.setState({
            value:e.target.value
        })
    }

    render(){
        const {posts,value} = this.state;

        if(value !== ""){
            this.state.filterPost = posts.filter(post=>post.name.includes(value))
        }

        
        
        return (
            <div>
                <div>
                    <input 
                    placeholder="Search" 
                    value={this.state.value}
                    onChange={this.handleChange}
                    ></input>
                </div>
                <ul>

                {this.state.filterPost.length !=0 && this.state.value != "" ? this.state.filterPost.map((post)=>(
                    <li>
                        {post.name}
                    </li>
                )): posts.map((post)=>(
                    <li>
                        {post.name}
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}
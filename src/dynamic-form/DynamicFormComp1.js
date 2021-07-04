import React from 'react';

class DynamicFormComp1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [{
        title: "Node 1",
        type: "input",
        childNodes: [
          { title: "Childnode 1.1" , type: "input",},
          {
            title: "Childnode 1.2",
            type: "input",
            childNodes: [
              {
                title: "Childnode 1.2.1",
                type: "input",
                childNodes: [
                  { title: "Childnode 1.2.1.1" ,
                  type: "Button"}
                ]
              }, { title: "Childnode 1.2.2", type: "text", }
            ]
          }
        ]
      }]
    }
  }

  render(){
    const Button = (props) => {
      console.log(props,'+++button++');
      return <div><button> props.value</button>{props.data.childNodes && <props.Tree data={props.data.childNodes}/>}</div>
    }
    
    const Input = (props) => {
      console.log(props,'+++Input++');
    return <div><input value={props.value} />{props.data.childNodes && <props.Tree data={props.data.childNodes}/>}</div>
    }
    
    const DynamicComp = {
      Button:Button,
      input: Input
    }
    const Tree = ({data, index}) => {
  
      return <ul>
        {data && data.map((item,index) => {
          const TagName = DynamicComp[item["type"]];
          if(TagName){
    
            console.log(TagName ,'---Tree--', data);
    
            return (
              <li>
                <TagName id={TagName} key={`TagName_${index}`} value={item.title} data={item} Tree={Tree} >
                  
                  { item.childNodes && <Tree data={item.childNodes} index={index} />}
                </TagName>
              </li>
            )
          }else{
            return null;
          }
          
          })}
      </ul>
    };
    return (
      <form>
    <Tree data={this.state.data} />
    </form>
    )
  }
}

export default DynamicFormComp1;
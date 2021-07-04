
export default function RenderChild(props){

    const data = [{
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
      }];

      const Tree = ({data}) => {
        console.log("--afroz-",data);
      return <ul>
          {data && data.map((item)=>{
            if(item.title){
                return (
                    <li>{item.title }{item.childNodes ?<button>+</button>: <button>-</button> }
                {item.childNodes && <Tree data ={item.childNodes}/>}
                    </li>
                )
            }else{return null;}
              })}
      </ul>
    }

    return (
        <div>
            <Tree data={data}/>
        </div>
    )
}
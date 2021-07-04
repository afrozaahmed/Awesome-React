import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Basket from  './Components/Basket';
import Main from './Components/Main';
import data from './Data/data';
import {useState} from 'react';

function App() {
  const {products} = data;
  const [cartItems,setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(x=>x.id === product.id)
    if(exist){
        setCartItems(cartItems.map((x)=>(
          x.id === product.id ? {...exist, qty: exist.qty+1}: x
        )))
    }else{
      setCartItems([...cartItems,{...product, qty:1}])
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find(x=>x.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((x)=>x.id === product.id ? {...exist, qty:exist.qty-1}:x)
      )
    }
  }
  
  return (
    <div className="App">
      <Header countCartItem={cartItems.length}/>
      <div className="row">
        <Main onAdd={onAdd} products={products}/>
        <Basket onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

export default function Product(props){
    const {product, onAdd} = props
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={()=>onAdd(product)}>Add to Cart</button>
        </div>
    )
}
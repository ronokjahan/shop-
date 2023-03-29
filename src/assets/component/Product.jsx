import React from 'react';
import './Product/Product.css'

const Product = (props) => {
console.log(props)
    
    
    
    const {img,name,seller,rating,price}=props.product || {}
const handleAddToCart=props.handleAddToCart;
// event handdeler////.................

    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
           <p>price:${price}</p>
           <p>Manufacturer:{price}</p>
           <p>Rating:{rating}star</p>
            
           </div>
           <button onClick={()=>handleAddToCart(props.product)}
           className='btn-cart'>Add full card</button>
        </div>
    );
};

export default Product;
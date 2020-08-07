import React from 'react';

const Product = (props) => {
    const {name, price, imgurl} = props.product;
    return(
        <div>
            <h2>{name}</h2>
            <h2>{price}</h2>
            <img src={imgurl}/>
            
        </div>
    )

}

export default Product;
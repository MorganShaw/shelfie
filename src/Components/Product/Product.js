import React from 'react';

const Product = (props) => {
    const {name, price, imgurl} = props.product;
    return(
        <div className="product-box">
            <div className="product-img">
                <img className="product-img" 
                src={imgurl}/>
            </div>
            <div className="product-info">
                <h3 className="name">{name}</h3>
                <h4 className="price">${price}</h4>
            </div>
            
        </div>
    )

}

export default Product;
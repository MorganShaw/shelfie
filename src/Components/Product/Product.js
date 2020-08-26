import React from 'react';
import {withRouter} from 'react-router-dom'

const Product = (props) => {
    const {name, price, img, id} = props.product;
    const {deleteProduct} = props;
   
    console.log(props);
    return(
        <div className="product-box">
            <div className="product-img"> {!img ? (
                <img className="product-img" 
                src="https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/656/original/DevMountain.jpg?1467187319" alt="Product"/>
            ) : (
                <img className="product-img" 
                src={img} alt="DevMtn Logo"/>        
        )}
            </div>
            <div className="product-info">
                <h3 className="name">{name}</h3>
                <h4 className="price">${price}</h4>
            </div>
            <button onClick={()=> props.history.push(`/edit/${id}`)}>Edit</button>
            <button onClick={() => deleteProduct(id)}>Delete</button>
            
        </div>
    )

}

export default withRouter(Product);



//Possibly use hooks (useHistory....wasn't working but check on that)
 // const {push} = useHistory();
//  const history = useHistory();
 // console.log(history)
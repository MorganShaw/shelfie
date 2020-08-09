import React from 'react';
import Product from '../Product/Product';
import { deleteProduct } from '../../../server/controller';

const Dashboard = (props) => {

    deleteProduct = (id) => {
        axios.delete(`api/products/${id}`)
        .then(res => {
            props.getInventory();
        })

        
    }

    const mappedInventory = props.inventory.map(product => {
        return <Product
                    key={product.id}
                    product={product}
                    deleteProduct={props.deleteProduct}/>
    })
    return(
        <div className="dashboard">
            {mappedInventory}
        </div>
    )
    
}

export default Dashboard;
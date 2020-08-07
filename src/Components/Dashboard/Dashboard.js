import React from 'react';
import Product from '../Product/Product';

const Dashboard = (props) => {
    const mappedInventory = props.inventory.map(product => {
        return <Product
                    key={product.id}
                    product={product}/>
    })
    return(
        <div>
            <div>Dashboard</div>
            {mappedInventory}
        </div>
    )
    
}

export default Dashboard;
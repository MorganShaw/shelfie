import React from 'react';
import axios from 'axios';
import Product from '../Product/Product';
// import { deleteProduct } from '../../../server/controller';
// import { deleteProduct } from '../../../server/controller';

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            inventory: []
        }
    }


    componentDidMount(){
        this.getInventory()
      }

    getInventory = () => {
    axios.get('/api/inventory').then(res => {
        this.setState({
        inventory: res.data
        })
    }).catch(err => {
        console.log(err)
    })
    }

    deleteProduct = (id) => {    
    axios.delete(`/api/products/${id}`)
        .then(res => {
            this.getInventory();
        }).catch(err => console.log(err))

        
    }

    render(){
    const mappedInventory = this.state.inventory.map(product => {
        return <Product
                    key={product.id}
                    product={product}
                    deleteProduct={this.deleteProduct}/>
    })
    return(
        <div className="dashboard">
            {mappedInventory}
        </div>
    )
    }
}

export default Dashboard;
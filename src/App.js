import React from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';
import routes from './routes';
// import Product from './Components/Product/Product';
// import { getInventory } from '../server/controller';

// import './reset.css';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     inventory: [],
  //     selectedProduct: {}
  //   }
  //   this.getInventory = this.getInventory.bind(this)
  //   this.selectProduct = this.selectProduct.bind(this)
  // }
  

  
  // selectProduct = (id) => {
  //   this.setState({
  //     selectedProduct: id
  //   })
  // }



  render(){
    return (
      <div className="App">
        <div className="page">
          <Header />
          {routes}
          {/* <div className="under-header-dashboard">
            <Dashboard inventory={this.state.inventory} getInventory={this.getInventory}/>
            <Form inventory={this.state.inventory} getInventory={this.getInventory} selectedProduct={this.state.selectedProduct}/>
          </div> */}
        </div>
      </div>
    );

  }
}

export default App;

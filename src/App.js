import React from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';
// import { getInventory } from '../server/controller';

// import './reset.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
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
  
  componentDidMount(){
    this.getInventory()
  }

  render(){
    return (
      <div className="App">
        <div className="page">
          <Header />
          <div className="under-header-dashboard">
            <Dashboard inventory={this.state.inventory} getInventory={this.getInventory}/>
            <Form/>
          </div>
        </div>
      </div>
    );

  }
}

export default App;

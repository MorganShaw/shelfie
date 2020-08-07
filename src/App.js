import React from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';
// import './reset.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inventory: [{
        name: "chacos",
        price: 94.99,
        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThp1TO7SKFzD8dZgmJM7NBAykUJ7EH0wyMY-5i4inx7hVEkSkqR3mec1078YKZIHpt0ceyXAY&usqp=CAc"
      },
      { name: "flip-flops",
        price: 3.00,
        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAR6hpkT-EYDUobkdWrSg5_J2_eROxFNxl8tPvUxKKNZZrrBIHKhkzpVMjTDMnqTmUJdksc-Gx&usqp=CAc"

      },
      { name: "oxford",
        price: 39.98,
        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn7THefntajlKUOPsYceOVDMJlZbTDqQncdARcHmUwWMkGvJB4dcVfAsJ810sbKiW8RoDcvVpy&usqp=CAc"

      }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <div className="page">
          <Header />
          <div className="under-header-dashboard">
            <Dashboard inventory={this.state.inventory}/>
            <Form/>
          </div>
        </div>
      </div>
    );

  }
}

export default App;

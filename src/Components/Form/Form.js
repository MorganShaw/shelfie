import React from 'react';
import axios from 'axios';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            price: 0.0,
            img: "",
            id: 0,
            edit: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.cancelInput = this.cancelInput.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }

    componentDidMount = () => {
        if(this.props.match.params.id){
            this.setState({
                edit: true
            })
        }
    }

    addProduct(){
        const {name, price, img} = this.state;
        axios.post('/api/products', {name, price, img})
        .then(() => {
            this.props.history.push('/')
        })
    }
    
    componentDidUpdate(prevProps) {
        const {id} = this.props.match.params;
        // Typical usage (don't forget to compare props):
        if(!id && this.props !== prevProps) {
            this.setState({
                edit: false
            })
        }
      }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    cancelInput(){
        this.setState({
            name: "",
            price: 0.0,
            img: ""
        })
    }

    saveEdit = () => {
        const {name, price, img} = this.state;
        const {id} = this.props.match.params;
        axios.put(`/api/products/${id}`, {name, price, img}).then(res => {
            this.props.history.push('/')
        })
    }

    render(){
        const {name, price, img} = this.state;
        return(
            <div className="form-container">
                <div className="no-image-container"> {!img ? (
                    <img className="no-image" src="https://www.pngkey.com/png/full/110-1108086_no-png-icon-broken-camera-icon-png.png" alt="broken image icon"/>

                ) : (
                    <img className="image-preview" src={img}/>
                )
            }

                </div>
              
                    <p>Product Name:</p>    
                    <input 
                        name="name" 
                        type="text"
                        value={name}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <p>Price:</p>    
                    <input 
                        name="price" 
                        type="text"
                        value={price}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <p>Image URL:</p>    
                    <input 
                        name="img" 
                        type="text"
                        value={img}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <div className="red-btn-container">
                        {
                        !this.state.edit ? (
                        <div>
                            <button className="red-btn" onClick={this.cancelInput}>Cancel</button>
                            <button className="red-btn" onClick={this.addProduct}
                            >Add to Inventory</button>
                        </div>
                        ) : (
                        <div>
                            <button className="red-btn" onClick={this.cancelInput}>Cancel</button>
                            <button className="red-btn" onClick={this.saveEdit}
                            >Save Changes</button> 
                        </div>
                        )}
                        
                    </div> 
            </div>
        // </>
        )
    }
}

//When do we need to invoke a method in an onClick with an arrow function?

//Need to add default image to product when no url is there. I found this solution on stackoverflow and am working on it but ran out of time: https://stackoverflow.com/questions/49037743/trying-to-add-a-default-image-if-image-null-reactjs
//Update: I added default image using ternary in product page. It worked for a minute, and displayed product info from the database I'd created, but then I made further adjustments to other things, and now the products are no longer displaying. I don't know why.
//Update: it's working.

//Also - the styling isn't great. I need to fix margins and spacing, but didn't have time.

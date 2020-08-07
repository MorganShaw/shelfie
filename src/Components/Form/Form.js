import React from 'react';

export default class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            price: 0.0,
            imgurl: "",
            // imageIsNull: true
        }
        this.handleChange=this.handleChange.bind(this)
        this.cancelInput=this.cancelInput.bind(this)
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
            imgurl: ""
        })
    }

    render(){
        const {name, price, imgurl} = this.state;
        const {addProduct} = this.props;
        return(
            <div className="form-container">
                <div className="no-image-container">
                    <img className="no-image" src="https://www.pngkey.com/png/full/110-1108086_no-png-icon-broken-camera-icon-png.png"/>
                </div>
                <form
                    onSubmit={e => {
                        addProduct(e, name, price, imgurl)
                        console.log(this.state.name)
                        this.setState({
                            name: "",
                            price: 0.0,
                            imgurl: ""
                        })
                    }}>
                    <p>Image URL:</p>    
                    <input 
                        name="name" 
                        type="text"
                        value={name}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <p>Product Name:</p>    
                    <input 
                        name="price" 
                        type="text"
                        value={price}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <p>Price:</p>    
                    <input 
                        name="imgurl" 
                        type="text"
                        value={imgurl}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <div className="red-btn-container">
                        <button className="red-btn" onClick={() => this.cancelInput()}>Cancel</button>
                        <button className="red-btn">Add to Inventory</button>
                    </div>
                </form>  
            </div>
        )
    }
}


//Need to add default image to product when no url is there. I found this solution on stackoverflow and am working on it but ran out of time: https://stackoverflow.com/questions/49037743/trying-to-add-a-default-image-if-image-null-reactjs